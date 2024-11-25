import { Belt, GameState, Item, Station } from '@/domain/types';
import { useEffect, useState } from 'react';



export function UseData(
    date: number, 
    belt: Belt, 
    stations: Station[],
    selectedItem: Item,
    newItems: Item[], 
    setNewItems: (items: Item[]) => void,
) {

    const beltDuration = 10; // Total duration for the belt loop
    const newItemRate = 2; // Number of seconds to wait before dropping an item

    const [lastTick, setLastTick] = useState(0);

    const [state, setState] = useState<GameState>({
        gold: 0,
        pendingGold: 0,
        items: [],
        stations: [],
        time: Date.now(),
        lastItemSpawned: Date.now(),
        selectedItem: selectedItem,
    });


    useEffect(() => {

        if (date === lastTick) {
            return;
        }
        setLastTick(date);

        const updatedItems = state.items;
        updatedItems.push(...newItems);
        setNewItems([]);

        // add the new items to the state
        // console.log("use data station 0: " , stations[0]);
        setState({
            ...state,
            items: updatedItems,
            stations: stations,
        });

        

        const now = new Date(date).getTime();

        if (now > state.time) {


            const processingItems = state.items;
            let lastSpawn = state.lastItemSpawned;
            const secondspassed = (now - lastSpawn) / 1000

            if (secondspassed > newItemRate) {
                const newItem = {
                    id: `item${Date.now()}`,
                    type: selectedItem.type,
                    timestamp: now,
                    value: 10,
                    x: 80,
                    y: 50,
                    distanceTraveled: 0,
                    enhancements: [],
                    appliedStations: 0,
                };

                processingItems.push(newItem);
                lastSpawn = now;


                
                // state.lastItemSpawned = now;
            }

            console.log("seconds passed: " + secondspassed + " " + newItemRate);

            // // let lastSpawn = state.lastItemSpawned
            // console.log("time since last spawn: " + (now - state.lastItemSpawned) + " " + newItemRate * 1000)

            // const itemSpawns = Math.floor(( now - state.lastItemSpawned) / (newItemRate * 1000));
            // console.log("should spawn " + itemSpawns + " " + state.selectedItem?.type );
            // // state.lastItemSpawned = now;

            // const elapsedTime = (now - state.time) / 1000;

            // console.log("elapsed time: " + elapsedTime);
            const { updatedItems, pendingGold } = resolveItems(now, processingItems, belt);

            setState({
                ...state,
                stations: stations,
                items: updatedItems,
                gold: state.gold,
                pendingGold: pendingGold + state.pendingGold,
                time: now,
                lastItemSpawned: lastSpawn
            });
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

    const resolveItems = (now: number, items: Item[], belt: Belt) => {
        const totalLength = calculateTotalLength(belt);
        const updatedItems: Item[] = [];
        let pendingGold = 0;

        items.forEach((item) => {
            let itemElapsed = (now - item.timestamp) / 1000
            const distanceTraveled = calculateDistanceTraveled(item, itemElapsed, totalLength);

            if (distanceTraveled >= totalLength) {
                // Item has completed its journey
                const modItem = applyStationModifiers(item, distanceTraveled);
                pendingGold += modItem.value;
            } else {
                // Item is still on the belt
                const { segmentIndex, segmentDistance } = determineSegment(distanceTraveled, belt);

                if (segmentIndex >= 0) {
                    const position = calculatePositionOnSegment(segmentIndex, segmentDistance, belt);
                    const modItem = applyStationModifiers(item, distanceTraveled);

                    updatedItems.push({ ...modItem, ...position, distanceTraveled });
                }
            }
        });

        console.log("updated items: " + updatedItems.length);

        return { updatedItems, pendingGold };
    };

    const applyStationModifiers = (item: Item, distanceTraveled: number) => {
        let valueMultiplier = 1;
        let valueAddition = 0;

        belt.stationSlots.forEach((slot, index) => {
            if (item.appliedStations <= index) {
            if (distanceTraveled >= slot.distance){
                const station = stations[index];
                if (station !== undefined) {
                    valueMultiplier *= station.valueMultiplier;
                    valueAddition += station.valueAddition;
                    item.appliedStations++;
                }
            }
        }
        });


        item.value = Math.floor(item.value + valueAddition) * valueMultiplier;
        return item;


    }


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

