import Link from 'next/link';
import { fetchTodoById } from '@/lib/todos';

export default async function TodoModalPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  try {
    const todo = await fetchTodoById(id);

    return (
      <div className="modal-backdrop" role="dialog" aria-modal="true">
        <div className="card modal-card">
          <p className="eyebrow">Todo details</p>
          <h2>{todo.title}</h2>
          <p>{todo.done ? 'Completed' : 'Open'}</p>
          <div className="detail-actions">
            <Link href={`/todos/${id}`} className="secondary-btn">
              Open full page
            </Link>
            <Link href="/todos" className="primary-btn">
              Close
            </Link>
          </div>
        </div>
      </div>
    );
  } catch {
    return null;
  }
}
