import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Clock, Lightbulb, Calculator, ShieldAlert } from 'lucide-react';
import HistoryPage from './pages/HistoryPage';
import Concept1Page from './pages/Concept1Page';
import Concept2Page from './pages/Concept2Page';
import Concept3Page from './pages/Concept3Page';
import type { Page } from './types';

declare global {
  interface Window {
    renderMathInElement: (element: HTMLElement, options: any) => void;
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('history');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Re-run KaTeX when the page changes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.renderMathInElement) {
        window.renderMathInElement(document.body, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
          ],
          throwOnError : false
        });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const handleNav = (page: Page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'history', label: 'Chapter History', icon: Clock },
    { id: 'concept1', label: '1. Fundamental Theorem', icon: Lightbulb },
    { id: 'concept2', label: '2. HCF & LCM', icon: Calculator },
    { id: 'concept3', label: '3. Irrationality Proofs', icon: ShieldAlert },
  ] as const;

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans">
      {/* Mobile Sidebar Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 flex flex-col h-full shadow-xl md:shadow-none`}>
        <div className="p-5 border-b border-slate-200 bg-indigo-600 text-white flex items-center justify-between">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <BookOpen className="w-6 h-6" /> Real Numbers
          </h1>
          <button className="md:hidden text-indigo-100 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">Study Modules</div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.id as Page)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left text-[15px] font-medium transition-colors ${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
              >
                <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full relative overflow-hidden">
        {/* Mobile Header */}
        <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-slate-200 p-4 flex items-center gap-3 shadow-sm md:hidden">
          <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 -ml-2 rounded-md text-slate-500 hover:bg-slate-100">
            <Menu className="w-6 h-6" />
          </button>
          <div>
            <h2 className="text-lg font-bold text-slate-800">Real Numbers</h2>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-10 scroll-smooth w-full">
          <div className="max-w-4xl mx-auto w-full">
            {currentPage === 'history' && <HistoryPage />}
            {currentPage === 'concept1' && <Concept1Page />}
            {currentPage === 'concept2' && <Concept2Page />}
            {currentPage === 'concept3' && <Concept3Page />}
          </div>
        </div>
      </main>
    </div>
  );
}
