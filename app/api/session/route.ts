import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const res = await fetch('http://localhost:8080/auth/me', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Cookie: req.headers.get('cookie') || '',
        },
    });
      

    if (!res.ok) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const data = await res.json();
    return NextResponse.json({ authenticated: true, user: data });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
