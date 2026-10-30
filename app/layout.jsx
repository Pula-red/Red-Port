import './globals.css';
import ThemeProvider from '../components/ThemeProvider';
import ScrollProgress from '../components/ScrollProgress';
import CursorEffect from '../components/CursorEffect';
import LoadingScreen from '../components/LoadingScreen';
import BackToTop from '../components/BackToTop';

export const metadata = {
  title: 'John Jared Bueta - Software Developer',
  description: 'The personal portfolio of John Jared Bueta, a full-stack developer building practical software.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body><ThemeProvider><LoadingScreen /><ScrollProgress /><CursorEffect /><BackToTop />{children}</ThemeProvider></body>
    </html>
  );
}
