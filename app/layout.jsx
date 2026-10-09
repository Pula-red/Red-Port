import './globals.css';

export const metadata = {
  title: 'Jared Bueta - Web Developer',
  description: 'The personal portfolio of John Jared Bueta, a full-stack developer building practical software.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
