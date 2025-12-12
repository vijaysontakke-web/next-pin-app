import Link from 'next/link';
import { JSX } from 'react';

type NavItem = {
  label: string;
  href: string;
  section?: boolean;
};

const navItems: NavItem[] = [
  { label: 'Overview', href: '/' },
  { label: 'Core Concepts', href: '#', section: true },
  { label: 'Routing', href: '/learn/routing' },
  { label: 'Rendering', href: '/learn/rendering' },
  { label: 'Data Fetching', href: '/learn/fetching' },
  { label: 'Styling', href: '/learn/styling' },
  { label: 'Advanced', href: '#', section: true },
  { label: 'API Routes', href: '/api-showcase' },
  { label: 'Proxy (Middleware)', href: '/learn/proxy' },
  { label: 'Optimization', href: '/learn/optimization' },
];

export function Sidebar(): JSX.Element {
  return (
    <aside className="w-64 h-screen bg-neutral-900 border-r border-neutral-800 text-neutral-200 fixed left-0 top-0 overflow-y-auto font-sans">
      <div className="p-6 border-b border-neutral-800">
        <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Next.js Master
        </h1>
        <p className="text-xs text-neutral-500 mt-1">Interactive Learning</p>
      </div>
      <nav className="p-4 space-y-2">
        {navItems.map((item, index) => (
          item.section ? (
            <div key={index} className="pt-4 pb-2 px-3 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              {item.label}
            </div>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-neutral-800 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </Link>
          )
        ))}
      </nav>
    </aside>
  );
}
