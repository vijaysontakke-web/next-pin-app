import { CodeBlock } from '@/components/CodeBlock';
import Image from 'next/image';

export default function OptimizationPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <header>
        <h1 className="text-3xl font-bold text-white mb-2">Optimization</h1>
        <p className="text-neutral-400">
          Next.js includes built-in optimizations for Images, Fonts, and Scripts.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-blue-400">Image Optimization</h2>
        <p className="text-neutral-300">
          The <code>&lt;Image /&gt;</code> component automatically resizes, optimizes, and serves images in modern formats like WebP/AVIF.
        </p>
        
        <div className="relative h-64 w-full bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800">
           {/* Using a placeholder image since we don't have local assets */}
           <Image 
             src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
             alt="Technology"
             fill
             className="object-cover"
             priority
           />
           <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-xs text-center text-white backdrop-blur-sm">
             Optimized with next/image
           </div>
        </div>

        <CodeBlock
          title="Image Component"
          code={`import Image from 'next/image'

export default function Hero() {
  return (
    <Image
      src="/hero.png" // Path to image in public folder
      alt="Hero Image"
      width={1000}
      height={500}
      priority // Preload this image
    />
  )
}`}
        />
      </section>
      
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-purple-400">Font Optimization (next/font)</h2>
        <p className="text-neutral-300">
           Automatically optimizes fonts (including Google Fonts) and removes external network requests for improved privacy and performance.
        </p>
        <CodeBlock
          title="layout.tsx"
          code={`import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}`}
        />
      </section>
    </div>
  );
}
