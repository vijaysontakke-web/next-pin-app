import { JSX } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, title }: CodeBlockProps): JSX.Element {
  return (
    <div className="my-6 rounded-lg overflow-hidden border border-neutral-800 bg-[#1e1e1e] shadow-lg">
      <div className="flex items-center justify-between px-4 py-2 bg-neutral-900 border-b border-neutral-800">
        <span className="text-xs text-neutral-400 font-mono">{title || 'Example'}</span>
        <div className="flex space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
        </div>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm text-neutral-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
