'use client';

import { CodeBlock } from '@/components/CodeBlock';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function ClientFetchingPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
       <div className="mb-6">
        <Link href="/learn/fetching" className="text-sm text-neutral-500 hover:text-white transition-colors">
          ← Back to Data Fetching
        </Link>
      </div>

      <header>
        <h1 className="text-3xl font-bold text-white mb-2">Client-Side Fetching</h1>
        <p className="text-neutral-400">
          Typical React pattern: Fetch in <code>useEffect</code> (or use SWR/React Query).
        </p>
      </header>

      <div className="space-y-4 min-h-[200px]">
        {loading ? (
           <div className="text-neutral-500 italic">Loading posts on client...</div>
        ) : (
           posts.map((post) => (
            <div key={post.id} className="p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
               <h3 className="font-semibold text-green-400 truncate">{post.title}</h3>
               <p className="text-sm text-neutral-500 mt-2 line-clamp-2">{post.body}</p>
            </div>
          ))
        )}
      </div>

      <CodeBlock
        title="Client Fetching"
        code={`'use client'
        
import { useState, useEffect } from 'react';

export default function Page() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/data').then(res => res.json()).then(setData)
  }, [])

  if (!data) return <p>Loading...</p>
  return <div>{data.title}</div>
}`}
      />
    </div>
  );
}
