import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Observation Haki Explained',
  description: 'Deep dive into Luffy\'s Observation Haki in One Piece episode 1012.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
