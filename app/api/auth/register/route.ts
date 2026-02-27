// Register route for the API
import { NextResponse } from 'next/server';

// Simulated user database
const users = [];

// Handle POST requests
export async function POST(req) {
    const { username, password } = await req.json();

    // Basic validation
    if (!username || !password) {
        return NextResponse.json({ message: 'Username and password are required.' }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return NextResponse.json({ message: 'User already exists.' }, { status: 409 });
    }

    // Register new user
    users.push({ username, password });
    return NextResponse.json({ message: 'User registered successfully.' }, { status: 201 });
}