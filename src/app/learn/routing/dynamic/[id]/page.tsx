import { CodeBlock } from '@/components/CodeBlock';
import Link from 'next/link';

// In Next.js 15, params is a Promise so we need to await it
export default async function DynamicPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
       <div className="mb-6">
        <Link href="/learn/routing" className="text-sm text-neutral-500 hover:text-white transition-colors">
          ← Back to Routing
        </Link>
      </div>

      <header>
        <h1 className="text-3xl font-bold text-white mb-2">Dynamic Route: <span className="text-blue-400">{id}</span></h1>
        <p className="text-neutral-400">
          This page is rendered by `app/learn/routing/dynamic/[id]/page.tsx`.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-blue-400">How it works</h2>
        <p className="text-neutral-300">
          The segment `[id]` matches any value in the URL path at that position. It is passed as a prop to the page.
        </p>
        
        <CodeBlock
          title="Implementation"
          code={`// app/learn/routing/dynamic/[id]/page.tsx

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <h1>ID: {id}</h1>
}`}
        />
      </section>
    </div>
  );
}
