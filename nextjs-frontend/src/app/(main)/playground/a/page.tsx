import Link from 'next/link';

export default function PlaygroundPageA() {
  return (
    <div className="card">
      <h2>Playground A</h2>
      <p>This page demonstrates the layout counter persisting between route changes.</p>
      <Link href="/playground/b" className="secondary-btn">
        Go to page B
      </Link>
    </div>
  );
}
