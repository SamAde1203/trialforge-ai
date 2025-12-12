import OpenAI from 'openai';
import { TrialParams } from './types';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function parseProtocolWithAI(text: string): Promise<{
  trial: TrialParams;
  confidence: number;
  recommendations: string[];
  riskLevel: 'low' | 'medium' | 'high';
}> {
  try {
    const response = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
      messages: [
        {
          role: 'system',
          content: `You are a clinical trial biostatistician with 20 years of experience. 
          Parse the protocol and provide structured output with confidence scores and recommendations.`
        },
        {
          role: 'user',
          content: `Parse this clinical trial protocol and provide:
          1. Sample size (n_patients)
          2. Duration in weeks
          3. Primary endpoint (hba1c, weight, glucose, or custom)
          4. Treatment arms with effect sizes
          5. Baseline value and standard deviation
          6. Confidence score (0-1)
          7. 3 key recommendations
          8. Risk level (low, medium, high)
          
          Protocol: "${text}"
          
          Return JSON only.`
        }
      ],
      temperature: 0.3,
      response_format: { type: 'json_object' }
    });

    const content = response.choices[0]?.message?.content;
    if (!content) throw new Error('No response from AI');

    const parsed = JSON.parse(content);
    
    return {
      trial: {
        n_patients: parsed.n_patients || 100,
        weeks: parsed.weeks || 12,
        endpoint: parsed.endpoint || 'hba1c',
        arms: parsed.arms || [
          { name: 'Treatment', effect_size: -0.8 },
          { name: 'Placebo', effect_size: -0.1 }
        ],
        baseline: parsed.baseline || 7.5,
        sd: parsed.sd || 1.2,
      },
      confidence: parsed.confidence || 0.85,
      recommendations: parsed.recommendations || [
        'Consider increasing sample size by 20% for better power',
        'Add interim analysis at week 6',
        'Implement adaptive design for dropout handling'
      ],
      riskLevel: parsed.riskLevel || 'medium'
    };
  } catch (error) {
    console.error('AI parsing error:', error);
    // Fallback to mock data
    return {
      trial: {
        n_patients: 100,
        weeks: 12,
        endpoint: 'hba1c',
        arms: [
          { name: 'Treatment', effect_size: -0.8 },
          { name: 'Placebo', effect_size: -0.1 }
        ],
        baseline: 7.5,
        sd: 1.2,
      },
      confidence: 0.75,
      recommendations: [
        'Default recommendation: Verify endpoint measurements',
        'Consider adding biomarker analysis',
        'Review inclusion/exclusion criteria'
      ],
      riskLevel: 'medium'
    };
  }
}