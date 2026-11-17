import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { deleteTodo, fetchTodoById } from '@/lib/todos';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;

  try {
    const todo = await fetchTodoById(id);
    return { title: `${todo.title} | Todo App` };
  } catch {
    return { title: 'Todo Not Found | Todo App' };
  }
}

export default async function TodoDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  let todo;
  try {
    todo = await fetchTodoById(id);
  } catch {
    notFound();
  }

  async function handleDelete() {
    'use server';
    await deleteTodo(Number(id));
    redirect('/todos');
  }

  return (
    <div className="page-shell">
      <div className="card detail-card">
        <p className="eyebrow">Details</p>
        <h1>{todo.title}</h1>
        <p className="status-pill">{todo.done ? 'Completed' : 'Open'}</p>

        <div className="detail-actions">
          <Link href="/todos" className="secondary-btn">
            Back to list
          </Link>
          <form action={handleDelete}>
            <button type="submit" className="danger-btn">
              Delete todo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
