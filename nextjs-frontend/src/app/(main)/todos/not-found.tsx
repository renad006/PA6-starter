import Link from 'next/link';

export default function TodoNotFound() {
  return (
    <div className="page-shell">
      <div className="card error-box">
        <h2>Todo not found.</h2>
        <p>The requested todo does not exist.</p>
        <Link href="/todos" className="primary-btn">
          Back to todos
        </Link>
      </div>
    </div>
  );
}
