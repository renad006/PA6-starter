import { fetchTodos } from '@/lib/todos';

export const dynamic = 'force-dynamic';

export default async function StatsSlot() {
  const todos = await fetchTodos().catch(() => []);

  return (
    <div className="card">
      <h2>Stats</h2>
      <p>{todos.length} total items</p>
    </div>
  );
}
