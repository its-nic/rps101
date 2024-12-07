"use client"

import Link from "next/link";
import GestureList from "./game/gesture-list";
import { useEffect, useState } from "react";

export default function Home() {

  const [gestures, setGestures] = useState([]);
  const [userGesture, setUserGesture] = useState();
  const [cpuGesture, setCpuGesture] = useState();
  const [gameEnd, setGameEnd] = useState(false);
  const [result, setResult] = useState("");
  const [condition, setCondition] = useState("");

  async function loadGestures() {
      setGestures(await fetchGestures());
  }

  useEffect(() => {
    (async () => {
        await loadGestures();
    })();
}, []);

const handleGestureSelect = async (gesture) => {
  setUserGesture(gesture);
  var cpuMove = gestures[Math.floor(Math.random() * gestures.length)];
  setCpuGesture(cpuMove);
  setGameEnd(true);

  if(gesture.name == cpuMove.name) {
    setResult("TIE");
    setCondition("");
  }
  else {
    var userWins = await fetchWins(gesture.name);
    var winCondition;
    
    userWins.map(win => {
      if(win.loser == cpuMove.name) {
        winCondition = win;
        setResult("WIN");
      }
    })

    if(winCondition == null) {
      var cpuWins = await fetchWins(cpuMove.name);

      cpuWins.map(win => {
        if(win.loser == gesture.name) {
          winCondition = win;
          setResult("LOSE");
        }
      })
    }
    setCondition(winCondition.winner + winCondition.result + winCondition.loser + winCondition.extra);
  }
}

const handleReset = () => setGameEnd(false);

  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-900 text-white">
      <header className="flex flex-col items-center m-16">
        <h1 className="text-8xl font-bold mb-2">RPS-101</h1>
        <h2 className="text-lg">Rock Paper Scissors - With 101 Gestures!</h2>
        <p className="text-sm mt-4">Game design and images by <Link href="https://www.umop.com/rps101.htm"target="_blank" className="underline">David C. Lovelace</Link></p>
        <p className="text-sm">Check out all the possible gestures <Link href="https://www.umop.com/rps101/alloutcomes.htm" target="_blank" className="underline">here</Link></p>
      </header>
      {gameEnd ? (
        <main className="flex flex-col items-center">
          <p>Your move: {userGesture.name}, CPU move: {cpuGesture.name}</p>
          <p>{result}: {condition}</p>
          <button onClick={handleReset}>Play again</button>
        </main>
      ) : (
        <main className="flex flex-col items-center">
          <p className="text-3xl">Select a Gesture Below to Play!</p>
          <GestureList gestures={gestures} onGestureClick={handleGestureSelect}/>
        </main>
        )}
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

async function fetchWins(name) {
  try {
      const response = await fetch(`/gestures/${name}`);
      const data = await response.json();
      return data;
  }
  catch (error) {
      console.log(`Error: ${error.message}`);
  }
}