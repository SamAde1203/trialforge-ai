import { NextResponse } from 'next/server';
import { parseProtocolWithAI } from '@/lib/realAI';
import { enhancedSimulateTrial } from '@/lib/advancedStats';
import type { EnhancedSimulationResult } from '@/lib/types';

export async function POST(req: Request) {
  try {
    const { protocol } = await req.json();

    if (!protocol || typeof protocol !== 'string') {
      return NextResponse.json(
        { error: 'Missing or invalid "protocol" field' },
        { status: 400 }
      );
    }

    // Step 1: AI parsing (optional - can skip if not using AI insights)
    const aiResult = await parseProtocolWithAI(protocol);

    // Step 2: Advanced simulation (this returns EnhancedSimulationResult with baseCase, conservative, optimistic)
    const simulation: EnhancedSimulationResult = await enhancedSimulateTrial(aiResult.trial);

    // Step 3: Return simulation result directly (don't mix with AI insights)
    return NextResponse.json({
      success: true,
      data: simulation,
      meta: {
        timestamp: new Date().toISOString(),
        version: '2.0.0',
        method: 'non-central-t-distribution',
        aiConfidence: aiResult.confidence,
      }
    });

  } catch (error: any) {
    console.error('Enhanced trial API error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: error.message || 'Internal server error' 
      },
      { status: 500 }
    );
  }
}
