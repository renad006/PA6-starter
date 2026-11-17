import { fetchTodos } from '@/lib/todos';

export const dynamic = 'force-dynamic';

export default async function RecentSlot() {
  const todos = await fetchTodos().catch(() => []);

  return (
    <div className="card">
      <h2>Recent items</h2>
      <ul className="todo-list compact">
        {todos.slice(0, 3).map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}
