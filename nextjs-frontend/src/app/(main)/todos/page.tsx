import Link from 'next/link';
import { fetchTodos, type Todo } from '@/lib/todos';

export const dynamic = 'force-dynamic';

export default async function TodosPage({
  searchParams,
}: {
  searchParams?: Promise<{ status?: string }>;
}) {
  const params = searchParams ? await searchParams : {};
  const status = typeof params.status === 'string' ? params.status.toLowerCase() : 'all';

  let todos: Todo[] = [];

  try {
    todos = await fetchTodos();
  } catch {
    todos = [];
  }

  const filteredTodos =
    status === 'done'
      ? todos.filter((todo) => todo.done)
      : status === 'open'
        ? todos.filter((todo) => !todo.done)
        : todos;

  return (
    <div className="page-shell">
      <section className="card">
        <div className="section-header">
          <div>
            <p className="eyebrow">Collection</p>
            <h1>Todos</h1>
          </div>
          <Link href="/todos/new" className="primary-btn">
            New Todo
          </Link>
        </div>

        <div className="filter-row" aria-label="Todo status filters">
          <Link href="/todos" className={status === 'all' ? 'chip active' : 'chip'}>
            All
          </Link>
          <Link href="/todos?status=done" className={status === 'done' ? 'chip active' : 'chip'}>
            Done
          </Link>
          <Link href="/todos?status=open" className={status === 'open' ? 'chip active' : 'chip'}>
            Open
          </Link>
        </div>

        {filteredTodos.length === 0 ? (
          <p>No todos match this filter yet.</p>
        ) : (
          <ul className="todo-list">
            {filteredTodos.map((todo) => (
              <li key={todo.id} className="todo-item card-subtle">
                <div>
                  <p className="todo-title">{todo.title}</p>
                  <span className={todo.done ? 'status-badge done' : 'status-badge pending'}>
                    {todo.done ? 'Done' : 'Open'}
                  </span>
                </div>
                <Link href={`/todos/${todo.id}`} className="secondary-btn" scroll={false}>
                  View details
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
