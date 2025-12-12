'use client';

import { CodeBlock } from '@/components/CodeBlock';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function CSRPage() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
       <div className="mb-6">
        <Link href="/learn/rendering" className="text-sm text-neutral-500 hover:text-white transition-colors">
          ← Back to Rendering
        </Link>
      </div>

      <header>
        <h1 className="text-3xl font-bold text-white mb-2">Client Rendering</h1>
        <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full text-xs font-mono">
          Interactive
        </div>
      </header>

      <div className="p-6 border border-neutral-800 rounded-lg bg-neutral-900/50 flex flex-col items-center justify-center space-y-4">
        <div className="text-5xl font-mono font-bold text-white">
          {mounted ? count : 0}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setCount(c => c - 1)}
            className="px-4 py-2 rounded bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
          >
            Decrease
          </button>
          <button
            onClick={() => setCount(c => c + 1)}
            className="px-4 py-2 rounded bg-green-600 hover:bg-green-500 text-white transition-colors"
          >
            Increase
          </button>
        </div>
        <p className="text-neutral-400 text-sm mt-4">
          This counter works because this file uses <code>'use client'</code> at the top.
        </p>
      </div>

      <CodeBlock
        title="Client Component Code"
        code={`'use client';

import { useState } from 'react';

export default function CSRPage() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}
      />
    </div>
  );
}
