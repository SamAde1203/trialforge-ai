import { addDays, format } from 'date-fns';

export interface CalendarEvent {
  title: string;
  description: string;
  start: Date;
  end: Date;
  location?: string;
}

export function generateCalendarEvent(
  title: string,
  description: string,
  daysFromNow: number = 7
): CalendarEvent {
  const start = addDays(new Date(), daysFromNow);
  const end = addDays(start, 1); // 1-hour meeting
  
  return {
    title: `TrialForge Review: ${title.substring(0, 30)}`,
    description,
    start,
    end,
    location: 'Virtual Meeting (Zoom/Teams)'
  };
}

export function generateGoogleCalendarUrl(event: CalendarEvent): string {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    details: event.description,
    location: event.location || '',
    dates: `${format(event.start, 'yyyyMMdd\'T\'HHmmss')}/${format(event.end, 'yyyyMMdd\'T\'HHmmss')}`,
    ctz: Intl.DateTimeFormat().resolvedOptions().timeZone
  });
  
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function generateOutlookCalendarUrl(event: CalendarEvent): string {
  const params = new URLSearchParams({
    path: '/calendar/action/compose',
    rru: 'addevent',
    subject: event.title,
    body: event.description,
    startdt: format(event.start, 'yyyy-MM-dd\'T\'HH:mm:ss'),
    enddt: format(event.end, 'yyyy-MM-dd\'T\'HH:mm:ss'),
    location: event.location || ''
  });
  
  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
}