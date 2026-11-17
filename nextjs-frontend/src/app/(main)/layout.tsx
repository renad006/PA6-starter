import type { ReactNode } from 'react';
import { Navbar } from '../components/navbar';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-content">{children}</main>
    </div>
  );
}
