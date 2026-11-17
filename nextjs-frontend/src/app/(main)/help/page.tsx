import Link from 'next/link';

export default function HelpPage() {
  return (
    <div className="page-shell">
      <div className="card">
        <p className="eyebrow">Help</p>
        <h1>Help center</h1>
        <ul className="link-list">
          <li>
            <Link href="/help/getting-started">Getting started</Link>
          </li>
          <li>
            <Link href="/help/advanced/routing">Advanced routing</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
