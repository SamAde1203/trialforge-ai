import { NextResponse } from 'next/server';
import { parseProtocolWithAI } from '@lib/realAI';
import { enhancedSimulateTrial } from '@lib/advancedStats';


export async function POST(req: Request) {
  try {
    const { protocol } = await req.json();

    if (!protocol || typeof protocol !== 'string') {
      return NextResponse.json(
        { error: 'Missing or invalid "protocol" field' },
        { status: 400 },
      );
    }

    // Step 1: AI parsing
    const aiResult = await parseProtocolWithAI(protocol);

    // Step 2: Advanced simulation
    const simulation = await enhancedSimulateTrial(aiResult.trial);

    // Step 3: Combine for dashboard
    const combined = {
      ...simulation,
      confidence: aiResult.confidence,
      recommendations: aiResult.recommendations,
      riskLevel: aiResult.riskLevel,
      protocol,
    };

    return NextResponse.json({
      result: combined,
      aiInsights: {
        confidence: aiResult.confidence,
        recommendations: aiResult.recommendations,
        riskLevel: aiResult.riskLevel,
      },
    });
  } catch (error: any) {
    console.error('Enhanced trial API error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 },
    );
  }
}
