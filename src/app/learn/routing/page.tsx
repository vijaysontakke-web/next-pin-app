import { CodeBlock } from '@/components/CodeBlock';
import Link from 'next/link';

export default function RoutingPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <header>
        <h1 className="text-3xl font-bold text-white mb-2">Routing in Next.js</h1>
        <p className="text-neutral-400">
          Next.js uses a file-system based router. Folders inside `app` define routes.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-blue-400">Basic Routing</h2>
        <p className="text-neutral-300">
          A file named `page.tsx` (or .js, .jsx) makes a route publicly accessible.
        </p>
        <CodeBlock
          title="Folder Structure"
          code={`app/
  page.tsx        -> /
  dashboard/
    page.tsx      -> /dashboard
  settings/
    profile/
      page.tsx    -> /settings/profile`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-blue-400">Dynamic Routing</h2>
        <p className="text-neutral-300">
          You can create dynamic segments by wrapping a folder name in square brackets: `[folderName]`.
        </p>
        <CodeBlock
          title="Dynamic Segments"
          code={`app/
  blog/
    [slug]/
      page.tsx    -> /blog/hello-world`}
        />
        <div className="p-4 border border-neutral-700 rounded-lg bg-neutral-900/50">
          <p className="mb-2 text-sm text-neutral-400">Try it out:</p>
          <div className="flex gap-2">
            <Link 
              href="/learn/routing/dynamic/1"
              className="px-3 py-1.5 bg-blue-600/20 text-blue-400 border border-blue-600/50 rounded hover:bg-blue-600/30 transition-colors"
            >
              /dynamic/1
            </Link>
            <Link 
              href="/learn/routing/dynamic/nextjs-is-awesome"
              className="px-3 py-1.5 bg-purple-600/20 text-purple-400 border border-purple-600/50 rounded hover:bg-purple-600/30 transition-colors"
            >
              /dynamic/nextjs-is-awesome
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
