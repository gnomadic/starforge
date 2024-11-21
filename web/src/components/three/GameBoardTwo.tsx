"use client";

// import { Belt, Item } from "@/domain/types";
// GameBoard.tsx
import React, { useEffect, useState } from "react";



export interface Station {
  id: string;
  x: number;
  y: number;
  position: number;
  modifier: string;
  processingTime: number;

}

export interface Belt {
  id: string;
  stations: Station[];
  segments: number[]; // Lengths of each segment

}

export interface Item {
  id: string;
  type: string;
  beltId: string;
  position: number; // 0 to 1, representing progress along the belt
  timestamp: number;
  processing: boolean;
  value: number;
}




export interface GameBoardProps {
  belts: Belt[];
  items: Item[];
  setItems: React.Dispatch<React.SetStateAction<Item[]>>;
}


const belt_duration = 30

const GameBoardTwo: React.FC<GameBoardProps> = ({ belts, items, setItems }) => {


  // Function to calculate the position of an item based on the current time
  // const calculatePosition = (item: Item) => {
  //   const currentTime = Date.now();
  //   const elapsedTime = (currentTime - item.timestamp) / 1000; // Convert to seconds
  //   const newPosition = Math.min(elapsedTime * 0.1, 1); // Move 10% per second
  //   return newPosition;
  // };

  // const calculatePosition = (item: Item, belt: Belt)  => {
  //   const currentTime = Date.now();
  //   const elapsedTime = (currentTime - item.timestamp) / 1000; // Convert to seconds
  //   let newPosition = elapsedTime * 0.1; // Move 10% per second

  //   // Check if the item is at a station and should be paused
  //   // for (const station of belt.stations) {
  //   //   const stationPosition = (50 + station.x * 100) / 400;
  //   //   if (newPosition >= stationPosition && newPosition < stationPosition + 0.1) {
  //   //     const timeAtStation = (currentTime - item.timestamp) / 1000 - stationPosition / 0.1;
  //   //     if (timeAtStation < station.processingTime / 1000) {
  //   //       newPosition = stationPosition; // Pause at the station
  //   //     }
  //   //   }
  //   // }

  //   return Math.min(newPosition, 1); // Ensure the position does not exceed 1
  // };

  // Function to calculate the total length of the belt path

  const calculateTotalLength = (belt: Belt) => {
    return belt.segments.reduce((total, length) => total + length, 0);
  };
  const calculatePosition = (item: Item, belt: Belt) => {
    const currentTime = Date.now();
    const elapsedTime = (currentTime - item.timestamp) / 1000; // Convert to seconds
    const totalLength = calculateTotalLength(belt);
    const speed = totalLength / belt_duration; // Speed in units per second
    const distanceTraveled = elapsedTime * speed;

    let remainingDistance = distanceTraveled;
    let x = 80, y = 50; // Starting coordinates
    // let x = 230, y = 200; // Starting coordinates

    for (let i = 0; i < belt.segments.length; i++) {
      const segmentLength = belt.segments[i];
      if (remainingDistance <= segmentLength) {
        if (i % 2 === 0) { // Vertical segment
          y += remainingDistance * (i % 4 === 0 ? 1 : -1);
        } else { // Horizontal segment
          x += remainingDistance * (i % 4 === 1 ? 1 : -1);
        }
        return { x, y };
      }
      if (i % 2 === 0) { // Vertical segment
        y += segmentLength * (i % 4 === 0 ? 1 : -1);
      } else { // Horizontal segment
        x += segmentLength * (i % 4 === 1 ? 1 : -1);
      }
      remainingDistance -= segmentLength;
    }

    // If the item has traveled the entire path, return the end position
    return { x, y };
  };


  const [svgContent, setSvgContent] = useState<JSX.Element | null>(null);

  // Function to generate the SVG content
  const generateSvgContent = () => {
    return (
      <svg width="512" height="512" style={{ border: "1px solid black" }}>
        <path stroke="blue" strokeWidth="40" d="M 80 50 v 400 h 400 v -300 h -325 v 225 h 250 v -150 h -175 v 75" fill="none" strokeLinecap="round"></path>
        {/* Render each conveyor belt */}
        {belts.map((belt, index) => (
          // <g key={belt.id} transform={`translate(50, ${100 + index * 150})`}>
          <g key={belt.id}>
            {/* Conveyor belt rectangle */}
            <rect x={(index * 170) + 60} y="50" width="40" height="400" fill="gray" rx="10" ry="10" />

            {/* Stations on the conveyor belt */}
            {belt.stations.map((station, idx) => (
              <g key={station.id}>
                <circle
                  cx={(index * 170) + 80}
                  cy={5 + (station.position * 100)}
                  r={15}
                  fill="lightblue"
                  stroke="black"
                  strokeWidth="2"
                />
                <text
                  x={(index * 170) + 80}
                  y={5 + (station.position * 100)}
                  textAnchor="middle"
                  fontSize="10"
                  dy=".3em"
                >
                  {station.modifier}
                </text>
              </g>
            ))}

            {/* Items on the conveyor belt */}
            {items
              .filter((item) => item.beltId === belt.id)
              .map((item) => {
                const position = calculatePosition(item, belt);
                return (
                  <circle
                    key={item.id}
                    cx={position.x}
                    cy={position.y}
                    r={10}
                    fill={
                      item.type === "potion"
                        ? "purple"
                        : item.type === "scroll"
                          ? "orange"
                          : "green"
                    }
                    stroke="black"
                    strokeWidth="2"
                  />
                );
              })}
            {/* {items
              .filter((item) => item.beltId === belt.id)
              .map((item) => (


                <g key={item.id}>

                <circle
                  key={item.id}
                  // cx={calculatePosition(item, belt) * 400} // Position item along the belt
                  cx={(index * 170) + 80}
                  cy={calculatePosition(item, belt) * 400}
                  r={10}
                  fill={item.type === "potion" ? "purple" : item.type === "scroll" ? "orange" : "green"}
                  stroke="black"
                  strokeWidth="2"
                />
                <text
                  // x={calculatePosition(item, belt) * 400} // Position item along the belt
                  
                  x={(index * 170) + 80}
                  y={20}
                  textAnchor="middle"
                  fontSize="10"
                  dy=".3em"
                >
                  {calculatePosition(item, belt) * 400}
                </text>
                </g>
              ))} */}
          </g>
        ))}
      </svg>
    );
  };

  // Update the SVG content periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setSvgContent(generateSvgContent());
    }, 500); // Update every half second

    return () => clearInterval(interval);
  }, [belts, items]);

  return <div className="mx-auto">{svgContent}</div>;
};


// // Animate item movement
// useEffect(() => {
//   const interval = setInterval(() => {

//     // setItems(items.map((item) => ({
//     //   ...item,
//     //   position: Math.min(item.position + 0.1, 1), // Move 10% per tick
//     // })));

//     setItems((prevItems) =>
//       prevItems.map((item) => ({
//         ...item,
//         position: Math.min(item.position + 0.1, 1), // Move 10% per tick
//       }))
//     );
//   }, 500); // Adjust interval time as needed

//   return () => clearInterval(interval);
// }, []);

// return (
//   <svg width="800" height="600" style={{ border: "1px solid black" }}>
//     {/* Render each conveyor belt */}
//     {belts.map((belt, index) => (
//       <g key={belt.id} transform={`translate(50, ${100 + index * 150})`}>
//         {/* Conveyor belt rectangle */}
//         <rect x="0" y="0" width="600" height="40" fill="gray" rx="10" ry="10" />

//         {/* Stations on the conveyor belt */}
//         {belt.stations.map((station, idx) => (
//           <g key={station.id}>
//             <circle
//               cx={50 + idx * 100}
//               cy={20}
//               r={15}
//               fill="lightblue"
//               stroke="black"
//               strokeWidth="2"
//             />
//             <text
//               x={50 + idx * 100}
//               y={20}
//               textAnchor="middle"
//               fontSize="10"
//               dy=".3em"
//             >
//               {station.modifier}
//             </text>
//           </g>
//         ))}

//         {/* Items on the conveyor belt */}
//         {items
//           .filter((item) => item.beltId === belt.id)
//           .map((item) => (
//             <circle
//               key={item.id}
//               cx={item.position * 600} // Position item along the belt
//               cy={20}
//               r={10}
//               fill={item.type === "potion" ? "purple" : item.type === "scroll" ? "orange" : "green"}
//               stroke="black"
//               strokeWidth="2"
//             />
//           ))}
//       </g>
//     ))}
//   </svg>
// );

// return (
//   <svg width="800" height="600" style={{ border: "1px solid black" }}>
//     {/* Render each conveyor belt */}
//     {belts.map((belt, index) => (
//       <g key={belt.id} transform={`translate(50, ${100 + index * 150})`}>
//         {/* Conveyor belt rectangle */}
//         <rect x="0" y="0" width="600" height="40" fill="gray" rx="10" ry="10" />

//         {/* Stations on the conveyor belt */}
//         {belt.stations.map((station, idx) => (
//           <g key={station.id}>
//             <circle
//               cx={50 + idx * 100}
//               cy={20}
//               r={15}
//               fill="lightblue"
//               stroke="black"
//               strokeWidth="2"
//             />
//             <text
//               x={50 + idx * 100}
//               y={20}
//               textAnchor="middle"
//               fontSize="10"
//               dy=".3em"
//             >
//               {station.modifier}
//             </text>
//           </g>
//         ))}

//         {/* Items on the conveyor belt */}
//         {items
//           .filter((item) => item.beltId === belt.id)
//           .map((item) => (
//             <circle
//               key={item.id}
//               cx={calculatePosition(item) * 600} // Position item along the belt
//               cy={20}
//               r={10}
//               fill={item.type === "potion" ? "purple" : item.type === "scroll" ? "orange" : "green"}
//               stroke="black"
//               strokeWidth="2"
//             />
//           ))}
//       </g>
//     ))}
//   </svg>
// );
// };

export default GameBoardTwo;