import { CodeBlock } from '@/components/CodeBlock';
import Link from 'next/link';

export default function FetchingPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <header>
        <h1 className="text-3xl font-bold text-white mb-2">Data Fetching</h1>
        <p className="text-neutral-400">
          Next.js App Router simplifies data fetching with async Server Components.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/learn/fetching/server-side" className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-blue-500 transition-colors">
          <h3 className="text-lg font-semibold text-blue-400">Server Component Fetching</h3>
          <p className="text-sm text-neutral-400 mt-2">The recommended way. Fetch directly in your component.</p>
        </Link>
        <Link href="/learn/fetching/client-side" className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-green-500 transition-colors">
          <h3 className="text-lg font-semibold text-green-400">Client Side Fetching</h3>
          <p className="text-sm text-neutral-400 mt-2">Using useEffect or libraries like SWR/TanStack Query.</p>
        </Link>
      </div>

       <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">The "fetch" API</h2>
        <p className="text-neutral-300">
          Next.js extends the native <code>fetch</code> API to allow for granular caching and revalidation.
        </p>
        <CodeBlock
          title="Server Fetching Example"
          code={`async function getData() {
  const res = await fetch('https://api.example.com/...')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res.ok) throw new Error('Failed to fetch data')
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <main>{/* ... */}</main>
}`}
        />
      </section>
    </div>
  );
}
