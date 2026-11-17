'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/todos', label: 'Todos' },
  { href: '/todos/new', label: 'New Todo' },
  { href: '/help', label: 'Help' },
  { href: '/archive', label: 'Archive' },
  { href: '/playground', label: 'Playground' },
  { href: '/login', label: 'Login' },
  { href: '/dashboard', label: 'Dashboard' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="site-nav" aria-label="Main navigation">
      {links.map((link) => {
        const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={isActive ? 'nav-link active' : 'nav-link'}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
