import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h1 className="text-7xl">RPS-101</h1>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <ul>
            <li><Link href="./game">Play vs. a CPU</Link></li>
            <li><Link href="https://www.umop.com/rps101/alloutcomes.htm" target="_blank">View all gestures</Link></li>
          </ul>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Game design and images by <Link href="https://www.umop.com/rps101.htm" target="_blank" className="underline">David C. Lovelace</Link></p>
      </footer>
    </div>
  );
}
