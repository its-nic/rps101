"use client"

import Link from "next/link";
import GestureList from "./game/gesture-list";

export default function Home() {

const handleGestureSelect = (gesture) => {
  console.log(gesture);
}



  return (
    <div className="flex flex-col items-center min-h-screen bg-slate-900 text-white">
      <header className="flex flex-col items-center m-16">
        <h1 className="text-8xl font-bold mb-2">RPS-101</h1>
        <h2 className="text-lg">Rock Paper Scissors - With 101 Gestures!</h2>
        <p className="text-sm mt-4">Game design and images by <Link href="https://www.umop.com/rps101.htm"target="_blank" className="underline">David C. Lovelace</Link></p>
        <p className="text-sm">Check out all the possible gestures <Link href="https://www.umop.com/rps101/alloutcomes.htm" target="_blank" className="underline">here</Link></p>
      </header>
      <main className="flex flex-col items-center">
        <p className="text-3xl">Select a Gesture Below to Play!</p>
        <GestureList onGestureClick={handleGestureSelect}/>
      </main>
    </div>
  );
}
