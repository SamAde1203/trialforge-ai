import { NextResponse } from 'next/server';
import { parseProtocol } from '@/lib/ai';

export async function POST(request: Request) {
  try {
    const { text } = await request.json();
    
    if (!text || text.trim().length < 10) {
      return NextResponse.json({
        success: false,
        error: 'Protocol text must be at least 10 characters',
      }, { status: 400 });
    }
    
    const trial = await parseProtocol(text);
    
    return NextResponse.json({
      success: true,
      data: trial,
    });
    
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message || 'Failed to parse protocol',
    }, { status: 500 });
  }
}