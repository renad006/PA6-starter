import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET() {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get('demo-auth')?.value === '1';

  if (!isLoggedIn) {
    redirect('/login');
  }
}
