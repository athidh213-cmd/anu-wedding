'use client';

import { Toaster as Sonner } from 'sonner';

export function Toaster() {
  return <Sonner position="bottom-right" toastOptions={{ style: { background: '#f5efe0', border: '1px solid #b08a45', color: '#22302a' } }} />;
}
