import { CodeBlock } from '@/components/CodeBlock';
import Link from 'next/link';

// Revalidate this page every 10 seconds
export const revalidate = 10;

export default async function ISRPage() {
  const timestamp = new Date().toISOString();
  
  // Simulated slow fetch just to make a point (not actually slow here)
  const randomNumber = Math.floor(Math.random() * 10000);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
       <div className="mb-6">
        <Link href="/learn/rendering" className="text-sm text-neutral-500 hover:text-white transition-colors">
          ← Back to Rendering
        </Link>
      </div>

      <header>
        <h1 className="text-3xl font-bold text-white mb-2">ISR (Incremental Static Regeneration)</h1>
        <div className="inline-block px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full text-xs font-mono">
          Revalidates every 10s
        </div>
      </header>

      <div className="p-6 border border-neutral-800 rounded-lg bg-neutral-900/50">
        <div className="flex justify-between items-center mb-4">
          <span className="text-neutral-400">Time Generated:</span>
          <span className="font-mono text-white">{timestamp}</span>
        </div>
        <div className="flex justify-between items-center">
            <span className="text-neutral-400">Random ID:</span>
            <span className="font-mono text-purple-400">{randomNumber}</span>
        </div>
        
        <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded text-yellow-200 text-sm">
          <strong>Try this:</strong> Refresh the page multiple times immediately. The time/ID won't change. 
          Wait 10 seconds, then refresh. It will update!
        </div>
      </div>

      <CodeBlock
        title="ISR Config"
        code={`// app/learn/rendering/isr/page.tsx

export const revalidate = 10; // seconds

export default async function ISRPage() {
  const data = await fetch('...', { next: { revalidate: 10 } }); // or use page-level config
  return <div>...</div>
}`}
        />
    </div>
  );
}
