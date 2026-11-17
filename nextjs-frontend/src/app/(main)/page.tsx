import Link from 'next/link';
import { API_URL, fetchTodos } from '@/lib/todos';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  let todos: Awaited<ReturnType<typeof fetchTodos>> = [];

  try {
    todos = await fetchTodos();
  } catch {
    todos = [];
  }

  const total = todos.length;
  const done = todos.filter((todo) => todo.done).length;
  const open = total - done;

  return (
    <div className="page-shell">
      <section className="hero card">
        <div>
          <p className="eyebrow">Assignments</p>
          <h1>Todo App</h1>
          <p>
            A small Next.js frontend that connects to the NestJS todo API running at{' '}
            <code>{API_URL}</code>.
          </p>
        </div>
      </section>

      <section className="stats-grid">
        <div className="stat-card card">
          <span>Total</span>
          <strong>{total}</strong>
        </div>
        <div className="stat-card card">
          <span>Done</span>
          <strong>{done}</strong>
        </div>
        <div className="stat-card card">
          <span>Open</span>
          <strong>{open}</strong>
        </div>
      </section>

      <section className="card">
        <h2>Exercises</h2>
        <ul className="link-list">
          <li>
            <Link href="/todos">Browse the todo list</Link>
          </li>
          <li>
            <Link href="/todos/new">Create a new todo</Link>
          </li>
          <li>
            <Link href="/help">Open the help examples</Link>
          </li>
          <li>
            <Link href="/archive">Browse the archive routes</Link>
          </li>
          <li>
            <Link href="/playground">Visit the playground</Link>
          </li>
          <li>
            <Link href="/dashboard">Open the protected dashboard</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
