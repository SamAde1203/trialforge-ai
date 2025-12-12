import { NextResponse } from 'next/server';
import { simulateTrial } from '@/lib/stats';

export async function POST(request: Request) {
  try {
    const { trial, dropoutRate = 0.15, nSim = 5000 } = await request.json();
    
    if (!trial || !trial.n_patients || !trial.arms) {
      return NextResponse.json({
        success: false,
        error: 'Invalid trial parameters',
      }, { status: 400 });
    }
    
    const result = simulateTrial(trial, dropoutRate, nSim);
    
    return NextResponse.json({
      success: true,
      data: result,
    });
    
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message || 'Simulation failed',
    }, { status: 500 });
  }
}