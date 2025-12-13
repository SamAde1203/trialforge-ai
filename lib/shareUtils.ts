import emailjs from '@emailjs/browser';

// Initialize EmailJS (free tier available)
const EMAILJS_SERVICE_ID = 'your_service_id';
const EMAILJS_TEMPLATE_ID = 'your_template_id';
const EMAILJS_PUBLIC_KEY = 'your_public_key';

export async function shareWithTeam(
  email: string,
  subject: string,
  message: string,
  reportUrl?: string
): Promise<{ success: boolean; message: string }> {
  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        to_email: email,
        subject,
        message,
        report_url: reportUrl,
        from_name: 'TrialForge AI Pro',
        reply_to: 'noreply@trialforge.ai'
      },
      EMAILJS_PUBLIC_KEY
    );
    
    return { success: true, message: 'Report shared successfully!' };
  } catch (error) {
    console.error('Email share error:', error);
    return { 
      success: false, 
      message: 'Failed to share. You can copy the report manually.' 
    };
  }
}

export function generateShareableLink(result: any): string {
  const data = btoa(JSON.stringify({
    protocol: result.protocol?.substring(0, 500),
    power: result.power,
    sampleSize: result.requiredSample || result.nPerArm * 2,
    timestamp: new Date().toISOString()
  }));
  
  return `${window.location.origin}/share/${data}`;
}

export function copyToClipboard(text: string): Promise<boolean> {
  return navigator.clipboard.writeText(text)
    .then(() => true)
    .catch(() => false);
}