'use client';

import { useState } from 'react';

export default function PlaygroundTemplate() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>Template counter</h2>
      <p>Current value: {count}</p>
      <button type="button" className="secondary-btn" onClick={() => setCount((value) => value + 1)}>
        Increment template counter
      </button>
    </div>
  );
}
