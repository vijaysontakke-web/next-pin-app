import { CodeBlock } from '@/components/CodeBlock';
import Link from 'next/link';

export default function RenderingPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <header>
        <h1 className="text-3xl font-bold text-white mb-2">Rendering in Next.js</h1>
        <p className="text-neutral-400">
          Understanding where and how your code runs is crucial.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/learn/rendering/ssr" className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-blue-500 transition-colors">
          <h3 className="text-lg font-semibold text-blue-400">Server Components (Default)</h3>
          <p className="text-sm text-neutral-400 mt-2">Rendered on the server. Zero bundle size for the client.</p>
        </Link>
        <Link href="/learn/rendering/csr" className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-green-500 transition-colors">
          <h3 className="text-lg font-semibold text-green-400">Client Components</h3>
          <p className="text-sm text-neutral-400 mt-2">Rendered on the client (and server). Interactive.</p>
        </Link>
        <Link href="/learn/rendering/isr" className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-purple-500 transition-colors">
          <h3 className="text-lg font-semibold text-purple-400">ISR / Revalidation</h3>
          <p className="text-sm text-neutral-400 mt-2">Update static content after a specific time interval.</p>
        </Link>
      </div>
      
       <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">The "Use Client" Directive</h2>
        <p className="text-neutral-300">
          To make a component interactive (hooks, clicking), you must add <code>'use client'</code> at the top.
        </p>
        <CodeBlock
          title="Client Component"
          code={`'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(c => c+1)}>{count}</button>
}`}
        />
      </section>
    </div>
  );
}
