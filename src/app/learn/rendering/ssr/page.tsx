import { CodeBlock } from '@/components/CodeBlock';
import Link from 'next/link';

// Force dynamic rendering for demo purposes so the timestamp updates
export const dynamic = 'force-dynamic';

export default async function SSRPage() {
  // This runs on the server
  const timestamp = new Date().toISOString();
  // Simulate data fetch
  const randomNum = Math.floor(Math.random() * 1000);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="mb-6">
        <Link href="/learn/rendering" className="text-sm text-neutral-500 hover:text-white transition-colors">
          ← Back to Rendering
        </Link>
      </div>

      <header>
        <h1 className="text-3xl font-bold text-white mb-2">Server Rendering (SSR)</h1>
        <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-mono">
          Rendered at: {timestamp}
        </div>
      </header>

      <div className="p-6 border border-neutral-800 rounded-lg bg-neutral-900/50">
        <h3 className="text-lg font-semibold text-white">Random Number: {randomNum}</h3>
        <p className="text-neutral-400 mt-2">
          Refresh the page. You will see a new number and timestamp every time because `force-dynamic` is used.
          The HTML is generated on the server and sent to your browser.
        </p>
      </div>

      <CodeBlock
        title="Server Component Code"
        code={`// app/learn/rendering/ssr/page.tsx
export const dynamic = 'force-dynamic';

export default async function SSRPage() {
  const timestamp = new Date().toISOString();
  
  return (
    <div>
      <h1>Server Rendered</h1>
      <p>{timestamp}</p>
    </div>
  );
}`}
      />
    </div>
  );
}
