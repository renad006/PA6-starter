import { NextResponse } from 'next/server';

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || process.env.API_URL || 'http://localhost:3000';

export async function GET() {
  try {
    const response = await fetch(`${API_URL}/todos`, { cache: 'no-store' });

    if (!response.ok) {
      return NextResponse.json(
        { total: 0, done: 0, open: 0 },
        { status: response.status }
      );
    }

    const todos = (await response.json()) as Array<{ done?: boolean }>;
    const total = todos.length;
    const done = todos.filter((todo) => todo.done === true).length;

    return NextResponse.json({ total, done, open: total - done });
  } catch {
    return NextResponse.json(
      { total: 0, done: 0, open: 0 },
      { status: 500 }
    );
  }
}
