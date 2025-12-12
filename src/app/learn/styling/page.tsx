import { CodeBlock } from '@/components/CodeBlock';

export default function StylingPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <header>
        <h1 className="text-3xl font-bold text-white mb-2">Styling with Tailwind CSS</h1>
        <p className="text-neutral-400">
          Next.js supports CSS Modules, Global CSS, and Tailwind CSS (recommended) out of the box.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-blue-400">Tailwind CSS</h2>
          <p className="text-neutral-300">
            Utility-first CSS framework. Rapidly build custom designs without leaving your HTML.
          </p>
          <div className="p-4 bg-white rounded-lg shadow-lg">
             <p className="text-black font-bold text-center">I am a white box</p>
             <button className="mt-2 w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition">
               Hover me
             </button>
          </div>
          <CodeBlock
            title="Tailwind Example"
            code={`<div className="p-4 bg-white rounded-lg shadow-lg">
  <p className="text-black font-bold">I am a white box</p>
</div>`}
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-purple-400">CSS Modules</h2>
          <p className="text-neutral-300">
            Locally scoped CSS. Useful when you want traditional CSS but without conflicts.
          </p>
           <CodeBlock
            title="Button.module.css"
            code={`.error {
  color: red;
  font-weight: bold;
}`}
          />
           <CodeBlock
            title="Button.tsx"
            code={`import styles from './Button.module.css'

export function Button() {
  return <button className={styles.error}>Error</button>
}`}
          />
        </section>
      </div>
    </div>
  );
}
