'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    href: '/',
    label: 'Home',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 6.5L8 2l6 4.5V14a.5.5 0 01-.5.5h-3.75v-3.75h-3.5V14.5H2.5A.5.5 0 012 14V6.5z"/>
      </svg>
    ),
    exact: true,
  },
  {
    href: '/fence',
    label: 'Fence',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 1.5L14.5 5v6L8 14.5 1.5 11V5L8 1.5z"/>
        <path d="M8 5.5v5M5.5 7L8 5.5 10.5 7"/>
      </svg>
    ),
    exact: false,
  },
  {
    href: '/cultivate',
    label: 'Cultivate',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 14V8"/>
        <path d="M8 8C8 8 4 7 3 4c2.5 0 4.5 1.5 5 4z"/>
        <path d="M8 8C8 8 12 7 13 4c-2.5 0-4.5 1.5-5 4z"/>
        <path d="M8 8C8 8 8 4 6 2c0 2.5 1 4.5 2 6z"/>
      </svg>
    ),
    exact: false,
  },
  {
    href: '/steward',
    label: 'Steward',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="12" height="12" rx="1.5"/>
        <path d="M5 6h6M5 9h4"/>
      </svg>
    ),
    exact: false,
  },
];

export function Nav() {
  const pathname = usePathname();

  // Don't show nav on setup page
  if (pathname === '/setup') return null;

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="fixed left-0 top-0 h-full w-52 hidden md:flex flex-col border-r border-border bg-card z-40">
        {/* Wordmark */}
        <div className="px-5 py-6 border-b border-border">
          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center border"
              style={{
                background: 'oklch(0.16 0.04 55)',
                borderColor: 'oklch(0.72 0.12 65 / 0.3)',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="3" stroke="oklch(0.72 0.12 65)" strokeWidth="1.5"/>
                <path d="M7 1v2M7 11v2M1 7h2M11 7h2" stroke="oklch(0.72 0.12 65)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="text-xs font-mono text-muted-foreground leading-none">media</div>
              <div className="text-sm font-semibold text-foreground leading-tight tracking-tight">steward</div>
            </div>
          </div>
        </div>

        {/* Nav items */}
        <div className="flex-1 px-3 py-4 space-y-0.5">
          {navItems.map((item) => {
            const isActive = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href) && (item.href !== '/' || pathname === '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 group ${
                  isActive
                    ? 'border'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary border border-transparent'
                }`}
                style={isActive ? {
                  background: 'oklch(0.16 0.04 55)',
                  color: 'oklch(0.72 0.12 65)',
                  borderColor: 'oklch(0.72 0.12 65 / 0.2)',
                } : undefined}
              >
                <span style={isActive ? { color: 'oklch(0.72 0.12 65)' } : undefined}>
                  {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="px-5 py-4 border-t border-border">
          <p className="text-xs text-muted-foreground/60 font-mono">self-hosted</p>
        </div>
      </nav>

      {/* Mobile top bar */}
      <nav className="fixed top-0 left-0 right-0 h-14 md:hidden flex items-center justify-between px-4 border-b border-border z-40"
        style={{ background: 'oklch(0.12 0.008 55 / 0.95)', backdropFilter: 'blur(12px)' }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center"
            style={{ background: 'oklch(0.16 0.04 55)' }}
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="3" stroke="oklch(0.72 0.12 65)" strokeWidth="1.5"/>
              <path d="M7 1v2M7 11v2M1 7h2M11 7h2" stroke="oklch(0.72 0.12 65)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-sm font-semibold tracking-tight">media-steward</span>
        </div>
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = item.exact
              ? pathname === item.href
              : pathname.startsWith(item.href) && (item.href !== '/' || pathname === '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className="p-2.5 rounded-lg transition-colors"
                style={isActive ? {
                  color: 'oklch(0.72 0.12 65)',
                  background: 'oklch(0.16 0.04 55)',
                } : { color: 'oklch(0.55 0.018 65)' }}
                aria-label={item.label}
              >
                {item.icon}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
