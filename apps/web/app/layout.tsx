import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

export const metadata: Metadata = {
  title: 'Media Steward',
  description: 'Family media stewardship — fence, cultivate, steward',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="antialiased bg-zinc-950 text-zinc-50 min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
