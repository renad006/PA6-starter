'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get('email') ?? '').trim();
    const password = String(form.get('password') ?? '').trim();

    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    document.cookie = 'demo-auth=1; path=/; max-age=3600';
    router.push('/dashboard');
    router.refresh();
  }

  return (
    <div className="page-shell auth-page">
      <div className="card form-card">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="todo-form">
          <label>
            Email
            <input type="email" name="email" placeholder="user@example.com" />
          </label>
          <label>
            Password
            <input type="password" name="password" placeholder="••••••••" />
          </label>
          {error ? <p className="error-text">{error}</p> : null}
          <button type="submit" className="primary-btn">Sign in</button>
        </form>
      </div>
    </div>
  );
}
