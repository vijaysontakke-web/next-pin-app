'use client';

import { CodeBlock } from '@/components/CodeBlock';
import { useState } from 'react';

export default function ApiShowcasePage() {
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const callApi = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/hello', { cache: 'no-store' });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error(error);
      setResponse({ error: 'Failed' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <header>
        <h1 className="text-3xl font-bold text-white mb-2">API Routes</h1>
        <p className="text-neutral-400">
          Create backend endpoints directly in `app/api/`.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-blue-400">Try it out</h2>
        <div className="flex items-start gap-4 flex-col md:flex-row">
          <button
            onClick={callApi}
            disabled={loading}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Calling API...' : 'Call /api/hello'}
          </button>

          <div className="flex-1 w-full p-4 bg-neutral-900 border border-neutral-800 rounded-lg font-mono text-sm text-green-400 min-h-[120px]">
            {response ? JSON.stringify(response, null, 2) : '// Response will appear here...'}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">How to write an API Route</h2>
        <p className="text-neutral-300">
          Create a `route.ts` file in `app/api/[folder]`. Export async functions named after HTTP methods (GET, POST, etc).
        </p>
        <CodeBlock
          title="app/api/hello/route.ts"
          code={`import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Hello from the API!',
    timestamp: new Date().toISOString(),
  });
}`}
        />
        <CodeBlock
          title="Handling params"
          code={`// app/api/items/[id]/route.ts

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  return NextResponse.json({ id });
}`}
        />
      </section>
    </div>
  );
}
