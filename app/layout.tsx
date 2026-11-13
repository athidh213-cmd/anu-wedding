import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', weight: ['400', '500', '600', '700'] });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-sans', weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Anusmithin & Vijithra · RSVP Dashboard',
  description: 'Wedding RSVP dashboard for Anusmithin and Vijithra.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${cormorant.variable} ${montserrat.variable}`}>{children}<Toaster /></body></html>;
}
