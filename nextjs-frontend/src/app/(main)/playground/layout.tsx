'use client';

import Link from 'next/link';
import { ReactNode, useState } from 'react';

export default function PlaygroundLayout({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);

  return (
    <div className="playground-shell card">
      <h1>Playground</h1>
      <p>Layout counter: {count}</p>
      <button type="button" className="secondary-btn" onClick={() => setCount((value) => value + 1)}>
        Increment layout counter
      </button>
      <nav className="filter-row">
        <Link href="/playground/a" className="chip">Page A</Link>
        <Link href="/playground/b" className="chip">Page B</Link>
      </nav>
      {children}
    </div>
  );
}
