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
  var cpuMove = gestures[Math.floor(Math.random() * gestures.length)];

  if(gesture.name == cpuMove.name) {
    setResult("DRAW");
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
  setUserGesture(gesture);
  setCpuGesture(cpuMove);
  setGameEnd(true);
}

const handleReset = () => {
  setGameEnd(false); 
  setCondition("");
  setResult("");
}

  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-900 text-white">
      <header className="flex flex-col items-center m-16">
        <h1 className="text-8xl font-bold mb-2">RPS-101</h1>
        <h2 className="text-lg">Rock Paper Scissors - With 101 Gestures!</h2>
        <p className="text-sm mt-4">Game design and images by <Link href="https://www.umop.com/rps101.htm"target="_blank" className="underline">David C. Lovelace</Link></p>
        <p className="text-sm">Check out all the possible gestures <Link href="https://www.umop.com/rps101/alloutcomes.htm" target="_blank" className="underline">here</Link></p>
      </header>
      <main>
      {gameEnd ? (
        <div>
          <div className="flex flex-nowrap">
            <section className="flex flex-col items-center min-w-52 max-w-52 pb-4">
              <h3 className="font-bold text-center text-xl text-green-500 pb-2">YOU:</h3>
              <p className="text-center"> {userGesture.name}</p>
              <img src={(`/img/${userGesture.name}.${userGesture.type}`)} alt={(`Gesture for ${userGesture.name}`)}/>
            </section>
            <section className="flex flex-col items-center min-w-52 max-w-52 pb-4">
              <h3 className="font-bold text-center text-xl text-red-500 pb-2">CPU:</h3>
              <p className="text-center">{cpuGesture.name}</p>
              <img src={(`/img/${cpuGesture.name}.${cpuGesture.type}`)} alt={(`Gesture for ${cpuGesture.name}`)}/>
            </section>
          </div>
          <div className="flex flex-col items-center">
            {result == "WIN" ? (
              <p className="text-4xl font-bold text-green-500">WIN!</p>
            ) : result == "LOSE" ? (
              <p className="text-4xl font-bold text-red-500">LOSE!</p>
            ) : result == "DRAW" ? (
              <p className="text-4xl font-bold text-blue-500">DRAW!</p>
            ) : ( 
              <p></p>
            )}
            <p className="pt-2">{condition}</p>
            <button onClick={handleReset} className="bg-blue-600 px-4 py-3 rounded-xl mt-8 hover:bg-blue-700">Play Again</button>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-3xl text-center">Select a Gesture to Play!</p>
          <GestureList gestures={gestures} onGestureClick={handleGestureSelect}/>
        </div>
        )}
      </main>

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