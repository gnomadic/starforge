import { Belt, GameState, Item } from '@/domain/types';
import { useEffect, useState } from 'react';



export function UseData(date: number, belt: Belt,  newItems: Item[], setNewItems: (items: Item[]) => void) {

    const beltDuration = 10; // Total duration for the belt loop

    //now is the current date to the second

    // const now = Date.now() / 1000

    const [lastTick, setLastTick] = useState(0);

    const [state, setState] = useState<GameState>({
        gold: 0,
        pendingGold: 0,
        items: [],
        time: Date.now() / 1000
    });

    // const [batch, setBatch] = useState<ComponentMetadata[]>([]);
    // const [lastRun, setLastRun] = useState(0);

    useEffect(() => {

        if (date === lastTick) {
            return;
        }
        setLastTick(date);

        const updatedItems = state.items;
        updatedItems.push(...newItems);
        setNewItems([]);

        
        
        // add the new items to the state
        setState({
            ...state,
            items: updatedItems
        });

        console.log("hook, new items: " + newItems.length);
        console.log("hook, state items: " + state.items.length);

        const now = new Date(date).getTime();


        // ok so everytime the clock ticks, we need to update the state
        // check that now is greater than the last time we updated the state
        // every item on the belt ticks at the same time
        // and then if they're done, we add the gold to the pending gold

        // console.log("now: " + now + " last: " + state.time);

        if (now > state.time) {

            const elapsedTime = (now - state.time) / 1000; // Elapsed time in seconds
            // console.log("now: " + now + " last: " + state.time);
            console.log("elapsed time: " + elapsedTime);

            const { updatedItems, pendingGold } = resolveItems(state.items, belt, elapsedTime);
          
            setState({
              ...state,
              items: updatedItems,
              gold: state.gold,
              pendingGold: pendingGold,
                time: now,
            });



            // state.items.forEach((item) => {

            //     // calculate the distance traveled
            //     const elapsedTime = now - item.timestamp;
            //     const speed = 1;
            //     const distanceTraveled = elapsedTime * speed;

            //     // if the item has traveled the entire path, add the value to the pending gold
            //     // also remove the item
            //     if (distanceTraveled >= 100) {
            //         setState({
            //             ...state,
            //             items: state.items.filter((i) => i.id !== item.id),
            //             pendingGold: state.pendingGold + item.value
            //         });
            //     }

            //     // if the item has not traveled the entire path, update the distance traveled
            //     else {
            //         item.distanceTraveled = distanceTraveled;
            //     }
            // });
        }
    }, [date, newItems]);


    const calculateTotalLength = (belt: Belt) =>
        belt.segments.reduce((total, length) => total + length, 0);

    const calculateDistanceTraveled = (item: Item, elapsedTime: number, totalLength: number) => {
        const speed = totalLength / beltDuration; // Speed in units per second
        return elapsedTime * speed; // Distance traveled
    };


    const determineSegment = (distanceTraveled: number, belt: Belt) => {
        let remainingDistance = distanceTraveled;
        for (let i = 0; i < belt.segments.length; i++) {
            const segmentLength = belt.segments[i];
            if (remainingDistance <= segmentLength) {
                return { segmentIndex: i, segmentDistance: remainingDistance };
            }
            remainingDistance -= segmentLength;
        }
        return { segmentIndex: -1, segmentDistance: 0 }; // Beyond the belt
    };

    const resolveItems = (items: Item[], belt: Belt, elapsedTime: number) => {
        const totalLength = calculateTotalLength(belt);
        const updatedItems: Item[] = [];
        let pendingGold = 0;

        items.forEach((item) => {
            let itemElapsed = (new Date(date).getTime() - item.timestamp) / 1000
            const distanceTraveled = calculateDistanceTraveled(item, itemElapsed, totalLength);

            if (distanceTraveled >= totalLength) {
                // Item has completed its journey
                pendingGold += item.value;
            } else {
                // Item is still on the belt
                const { segmentIndex, segmentDistance } = determineSegment(distanceTraveled, belt);

                if (segmentIndex >= 0) {
                    const position = calculatePositionOnSegment(segmentIndex, segmentDistance, belt);
                    updatedItems.push({ ...item, ...position, distanceTraveled });
                }
            }
        });

        console.log("updated items: " + updatedItems.length);

        return { updatedItems, pendingGold };
    };


    const calculatePositionOnSegment = (segmentIndex: number, segmentDistance: number, belt: Belt) => {
        let x = 80, y = 50; // Starting coordinates (adjust based on your SVG layout)

        for (let i = 0; i < segmentIndex; i++) {
            const length = belt.segments[i];
            if (i % 2 === 0) {
                y += length * (i % 4 === 0 ? 1 : -1); // Vertical segment
            } else {
                x += length * (i % 4 === 1 ? 1 : -1); // Horizontal segment
            }
        }

        // Add remaining distance to position
        if (segmentIndex % 2 === 0) {
            y += segmentDistance * (segmentIndex % 4 === 0 ? 1 : -1);
        } else {
            x += segmentDistance * (segmentIndex % 4 === 1 ? 1 : -1);
        }

        return { x, y };
    };




    return { state };


}

