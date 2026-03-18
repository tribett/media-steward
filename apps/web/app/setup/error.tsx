'use client';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function SetupError({ error, reset }: ErrorProps) {
  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <p className="text-emerald-400 font-mono text-sm mb-4">media-steward</p>
        <h1 className="text-xl font-bold text-zinc-100 mb-2">Setup failed</h1>
        <p className="text-zinc-400 text-sm mb-6">
          {error.message || 'Something went wrong during setup.'}
        </p>
        <button
          onClick={reset}
          className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
