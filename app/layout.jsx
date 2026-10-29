import './globals.css';
import ThemeProvider from '../components/ThemeProvider';
import ScrollProgress from '../components/ScrollProgress';
import CursorEffect from '../components/CursorEffect';

export const metadata = {
  title: 'John Jared Bueta - Software Developer',
  description: 'The personal portfolio of John Jared Bueta, a full-stack developer building practical software.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body><ThemeProvider><ScrollProgress /><CursorEffect />{children}</ThemeProvider></body>
    </html>
  );
}
