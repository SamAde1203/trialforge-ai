import { NextResponse } from 'next/server';
import { parseProtocolWithAI } from '@/lib/realAI';
import { enhancedSimulateTrial } from '@/lib/advancedStats';

export async function POST(req: Request) {
  try {
    const { protocol } = await req.json();

    if (!protocol || typeof protocol !== 'string') {
      return NextResponse.json(
        { error: 'Missing or invalid "protocol" field' },
        { status: 400 }
      );
    }

    const aiResult = await parseProtocolWithAI(protocol);

    // Let enhancedSimulateTrial return whatever shape it returns (ScenarioResult / EnhancedSimulationResult)
    const simulation = await enhancedSimulateTrial(aiResult.trial);

    return NextResponse.json({
      success: true,
      data: simulation,
      meta: {
        timestamp: new Date().toISOString(),
        version: '2.0.0',
        method: 'non-central-t-distribution',
        aiConfidence: aiResult.confidence,
      },
    });
  } catch (error: any) {
    console.error('Enhanced trial API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Internal server error',
      },
      { status: 500 }
    );
  }
}
