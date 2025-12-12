'use client';

import { CodeBlock } from '@/components/CodeBlock';

export default function ProxyPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <header>
        <h1 className="text-3xl font-bold text-white mb-2">Proxy (formerly Middleware)</h1>
        <p className="text-neutral-400">
          Run code before a request is completed. Useful for authentication, redirects, and headers.
          In Next.js 16+, `middleware.ts` is replaced by `proxy.ts`.
        </p>
      </header>

      <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-200">
        <p>
          <strong>Check your headers!</strong> This app has a proxy function running that adds a custom header:
          <code className="bg-black/30 px-2 py-0.5 rounded mx-1">x-learning-app: true</code>.
          Open your browser DevTools (Network tab) to verify.
        </p>
      </div>

       <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Common Use Cases</h2>
        <ul className="list-disc list-inside space-y-2 text-neutral-300">
            <li>Authentication (Verifying cookies/tokens)</li>
            <li>Bot protection</li>
            <li>Redirects and Rewrites</li>
            <li>Server-Side Analytics</li>
        </ul>
        
        <CodeBlock
          title="proxy.ts"
          code={`import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  // Redirect
  if (request.nextUrl.pathname === '/about') {
    return NextResponse.redirect(new URL('/about-us', request.url))
  }
  
  // Auth check
  const token = request.cookies.get('token')
  if (!token) {
     return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}`}
        />
      </section>
    </div>
  );
}
