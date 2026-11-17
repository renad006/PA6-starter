export type Todo = {
  id: number;
  title: string;
  done: boolean;
};

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || 'http://localhost:3000';

export async function fetchTodos(): Promise<Todo[]> {
  const response = await fetch(`${API_URL}/todos`, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error('Failed to load todos from the backend API.');
  }

  return (await response.json()) as Todo[];
}

export async function fetchTodoById(id: string | number): Promise<Todo> {
  const response = await fetch(`${API_URL}/todos/${id}`, { cache: 'no-store' });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('NOT_FOUND');
    }

    throw new Error('Failed to load the requested todo.');
  }

  return (await response.json()) as Todo;
}

export async function createTodo(todo: { title: string; done?: boolean }) {
  const response = await fetch(`${API_URL}/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo),
    cache: 'no-store',
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Unable to create todo.' }));
    throw new Error(error.message || 'Unable to create todo.');
  }

  return (await response.json()) as Todo;
}

export async function deleteTodo(id: number) {
  const response = await fetch(`${API_URL}/todos/${id}`, {
    method: 'DELETE',
    cache: 'no-store',
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Unable to delete todo.' }));
    throw new Error(error.message || 'Unable to delete todo.');
  }

  return await response.json();
}
