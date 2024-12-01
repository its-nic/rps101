"use client"

import { useEffect, useState } from "react";
import Gesture from "./gesture";

export default function GestureList() {

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
        <ul>
            {gestures != null && gestures.map((gesture) => (
                <li key={gesture}><Gesture name={gesture} /></li>
            ))}
        </ul>
    );
}

async function fetchGestures() {
    try {
        const response = await fetch("https://rps101.pythonanywhere.com/api/v1/objects/all");
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(`Error: ${error.message}`);
    }
}