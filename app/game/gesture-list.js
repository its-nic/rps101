"use client"

import { useEffect, useState } from "react";
import Gesture from "./gesture";

export default function GestureList({onGestureClick}) {

    const [gestures, setGestures] = useState([]);

    async function loadGestures() {
        setGestures(await fetchGestures());
    }

    useEffect(() => {
        (async () => {
            await loadGestures();
        })();
    }, []);

    return(
        <div className="flex justify-center flex-wrap">
            {gestures != null && gestures.map((gesture) => (
                <Gesture key={gesture} name={gesture} onGestureClick={onGestureClick}/>
            ))}
        </div>
    );
}

async function fetchGestures() {
    try {
        const response = await fetch("/gestures");
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(`Error: ${error.message}`);
    }
}