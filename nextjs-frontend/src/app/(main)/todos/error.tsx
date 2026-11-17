'use client';

export default function TodosError({ reset }: { reset: () => void }) {
  return (
    <div className="page-shell">
      <div className="card error-box">
        <h2>Something went wrong.</h2>
        <p>The todo list could not be loaded.</p>
        <button type="button" className="primary-btn" onClick={() => reset()}>
          Try again
        </button>
      </div>
    </div>
  );
}
