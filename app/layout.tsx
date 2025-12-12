import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TrialForge AI | Clinical Trial Simulator',
  description: 'AI-powered clinical trial simulator: Transform protocols → synthetic patients → power analysis → CONSORT flows.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50 antialiased">
        {/* Background gradient noise texture */}
        <div className="fixed inset-0 bg-[url('/noise.svg')] opacity-5 pointer-events-none" />
        
        {/* Main content */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Footer */}
        <footer className="relative z-10 border-t border-slate-800/50 py-6 mt-20">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} TrialForge AI. For research purposes only.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}