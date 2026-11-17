'use client';

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell">
          <div className="card error-box">
            <h2>Something went wrong.</h2>
            <p>The application hit an unexpected error.</p>
            <button type="button" className="primary-btn" onClick={() => reset()}>
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
