import Link from 'next/link';

export default function PlaygroundPageB() {
  return (
    <div className="card">
      <h2>Playground B</h2>
      <p>This page demonstrates the same layout state while the template counter resets.</p>
      <Link href="/playground/a" className="secondary-btn">
        Go to page A
      </Link>
    </div>
  );
}
