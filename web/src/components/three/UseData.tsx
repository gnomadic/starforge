import { Belt, GameState, Item } from '@/domain/types';
import { useEffect, useState } from 'react';



export function UseData(date: number, belt: Belt, newItems: Item[], setNewItems: (items: Item[]) => void) {

    const beltDuration = 10; // Total duration for the belt loop

    const [lastTick, setLastTick] = useState(0);

    const [state, setState] = useState<GameState>({
        gold: 0,
        pendingGold: 0,
        items: [],
        time: Date.now() / 1000
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
        setState({
            ...state,
            items: updatedItems
        });

        const now = new Date(date).getTime();

        if (now > state.time) {

            const elapsedTime = (now - state.time) / 1000;
            // console.log("elapsed time: " + elapsedTime);
            const { updatedItems, pendingGold } = resolveItems(state.items, belt, elapsedTime);

            setState({
                ...state,
                items: updatedItems,
                gold: state.gold,
                pendingGold: pendingGold + state.pendingGold,
                time: now,
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

