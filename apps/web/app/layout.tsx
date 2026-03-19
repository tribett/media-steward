import type { Metadata } from 'next';
import { Lora, DM_Sans, JetBrains_Mono } from 'next/font/google';
import { Nav } from '@/components/nav';
import './globals.css';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

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
      className={`dark ${lora.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <div className="flex min-h-screen">
          <Nav />
          <div className="flex-1 min-w-0 md:ml-52">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
