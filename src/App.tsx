
import { ThemeProvider } from '@/components/ui/theme-provider';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen transition-colors duration-300">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
