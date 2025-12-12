import { CodeBlock } from '@/components/CodeBlock';
import Link from 'next/link';

type Post = {
  id: number;
  title: string;
  body: string;
};

async function getPosts() {
  // Artificial delay to show loading states (if we had suspense)
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3', {
    // Ensuring we don't hit cache for demo purposes, or use revalidate: 0
    cache: 'no-store' 
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
 
  return res.json() as Promise<Post[]>;
}

export default async function ServerFetchingPage() {
  const posts = await getPosts();

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
       <div className="mb-6">
        <Link href="/learn/fetching" className="text-sm text-neutral-500 hover:text-white transition-colors">
          ← Back to Data Fetching
        </Link>
      </div>

      <header>
        <h1 className="text-3xl font-bold text-white mb-2">Server-Side Fetching</h1>
        <p className="text-neutral-400">
          Fetched securely on the server. The data never exposed to the client until rendered.
        </p>
      </header>

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
             <h3 className="font-semibold text-white truncate">{post.title}</h3>
             <p className="text-sm text-neutral-500 mt-2 line-clamp-2">{post.body}</p>
          </div>
        ))}
      </div>

      <CodeBlock
        title="Server Fetching"
        code={`// app/learn/fetching/server-side/page.tsx

export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3', { 
    cache: 'no-store' 
  });
  const posts = await res.json();

  return (
     <ul>
      {posts.map(post => <li key={post.id}>{post.title}</li>)}
     </ul>
  );
}`}
      />
    </div>
  );
}
