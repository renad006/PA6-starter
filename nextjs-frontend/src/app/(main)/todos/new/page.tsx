'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { API_URL } from '@/lib/todos';

export default function NewTodoPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    try {
      const response = await fetch(`${API_URL}/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, done }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => ({ message: 'Unable to create todo.' }));
        throw new Error(payload.message || 'Unable to create todo.');
      }

      router.push('/todos');
      router.refresh();
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Unable to create todo.');
    }
  }

  return (
    <div className="page-shell">
      <div className="card form-card">
        <h1>Create Todo</h1>
        <form onSubmit={handleSubmit} className="todo-form">
          <label>
            Title
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="What needs to be done?"
            />
          </label>

          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={done}
              onChange={(event) => setDone(event.target.checked)}
            />
            Mark as done
          </label>

          {error ? <p className="error-text">{error}</p> : null}

          <div className="form-actions">
            <button type="submit" className="primary-btn">
              Save todo
            </button>
            <button type="button" className="secondary-btn" onClick={() => router.push('/todos')}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
