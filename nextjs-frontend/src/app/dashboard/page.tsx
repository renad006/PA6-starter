import { fetchTodos } from '@/lib/todos';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const todos = await fetchTodos().catch(() => []);

  return (
    <div className="page-shell">
      <div className="stats-grid">
        <div className="stat-card card">
          <span>Total</span>
          <strong>{todos.length}</strong>
        </div>
        <div className="stat-card card">
          <span>Done</span>
          <strong>{todos.filter((todo) => todo.done).length}</strong>
        </div>
        <div className="stat-card card">
          <span>Open</span>
          <strong>{todos.filter((todo) => !todo.done).length}</strong>
        </div>
      </div>
    </div>
  );
}
