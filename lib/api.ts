import { mockRsvps, type Rsvp } from '@/data/mock';

let rsvps = [...mockRsvps];
const delay = (ms = 500): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

const newestFirst = (items: Rsvp[]): Rsvp[] => [...items].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

// The real call to the server will go here later.
export async function getRsvps(): Promise<Rsvp[]> {
  await delay(400 + Math.random() * 400);
  return newestFirst(rsvps);
}

// The real call to the server will go here later.
export async function getStats() {
  await delay(400 + Math.random() * 400);
  const attending = rsvps.filter((rsvp) => rsvp.attending);
  const byDay = new Map<string, number>();
  rsvps.forEach((rsvp) => {
    const day = new Date(rsvp.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
    byDay.set(day, (byDay.get(day) ?? 0) + 1);
  });
  return {
    peopleAttending: attending.reduce((sum, rsvp) => sum + rsvp.guests, 0),
    replies: rsvps.length,
    declined: rsvps.filter((rsvp) => !rsvp.attending).length,
    averagePartySize: attending.length ? attending.reduce((sum, rsvp) => sum + rsvp.guests, 0) / attending.length : 0,
    repliesByDay: Array.from(byDay, ([day, replies]) => ({ day, replies })).reverse(),
  };
}

// The real call to the server will go here later.
export async function deleteRsvp(id: string): Promise<void> {
  await delay(500);
  rsvps = rsvps.filter((rsvp) => rsvp.id !== id);
}

const safeCell = (value: string | number): string => {
  const cell = String(value).replace(/"/g, '""');
  return /^[=+\-@]/.test(cell) ? `'${cell}` : cell;
};

// The real call to the server will go here later.
export async function exportCsv(): Promise<void> {
  await delay(400);
  const rows = [
    ['Name', 'Status', 'Guests', 'Message', 'Received'],
    ...newestFirst(rsvps).map((rsvp) => [rsvp.name, rsvp.attending ? 'Attending' : "Can't make it", rsvp.guests, rsvp.message ?? '', new Date(rsvp.createdAt).toISOString()]),
  ];
  const csv = '\uFEFF' + rows.map((row) => row.map((cell) => `"${safeCell(cell)}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'rsvp-list.csv';
  anchor.click();
  URL.revokeObjectURL(url);
}
