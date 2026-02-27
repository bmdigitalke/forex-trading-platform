import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
    const { symbol } = params;
    // add logic to fetch forex pair data using the symbol
    
    return NextResponse.json({ message: `Fetching data for forex pair: ${symbol}` });
}