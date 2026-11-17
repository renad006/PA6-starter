import type { ReactNode } from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({
  children,
  stats,
  recent,
}: {
  children: ReactNode;
  stats: ReactNode;
  recent: ReactNode;
}) {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get('demo-auth')?.value === '1';

  if (!isLoggedIn) {
    redirect('/login');
  }

  return (
    <div className="dashboard-layout">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
      </header>
      {children}
      <div className="dashboard-grid">
        <div>{stats}</div>
        <div>{recent}</div>
      </div>
    </div>
  );
}
