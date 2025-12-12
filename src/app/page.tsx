import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
         My Next.js App - Master Next.js 15
        </h1>
        <p className="text-xl text-neutral-400">
          A comprehensive, interactive guide to building modern web applications with the App Router.
        </p>
        <div className="flex gap-4 pt-4">
          <Link
            href="/learn/routing"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-500 transition-all duration-200"
          >
            Start Learning
          </Link>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800 px-6 py-3 text-sm font-semibold text-neutral-200 shadow-sm hover:bg-neutral-700 transition-all duration-200"
          >
            Read Docs
          </a>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <Card
          title="Routing"
          description="Master the filesystem-based routing, dynamic paths, and route groups."
          href="/learn/routing"
        />
        <Card
          title="Rendering"
          description="Understand Server Components, Client Components, SSG, and ISR."
          href="/learn/rendering"
        />
        <Card
          title="Data Fetching"
          description="Learn patterns for fetching data on the server and client."
          href="/learn/fetching"
        />
        <Card
          title="Advanced Patterns"
          description="Middleware, API Routes, Optimization and more."
          href="/learn/proxy"
        />
      </div>
    </div>
  );
}

function Card({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="group block p-6 bg-neutral-900 rounded-xl border border-neutral-800 hover:border-blue-500/50 transition-colors duration-200">
      <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-neutral-400 group-hover:text-neutral-300 transition-colors">
        {description}
      </p>
    </Link>
  );
}
