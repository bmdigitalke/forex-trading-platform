import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();
    
    const { username, password } = body;

    // Placeholder for authentication logic
    if (username === 'testuser' && password === 'password123') {
        return NextResponse.json({ message: 'Login successful!' }, { status: 200 });
    }

    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
}