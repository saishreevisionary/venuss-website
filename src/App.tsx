import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { ProductsPage } from './pages/ProductsPage';
import { GalleryPage } from './pages/GalleryPage';
import { RnDPage } from './pages/RnDPage';
import { QualityPage } from './pages/QualityPage';
import { ContactPage } from './pages/ContactPage';
import { QuoteModal } from './components/modals/QuoteModal';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [modalProductId, setModalProductId] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (productId?: string) => {
    setModalProductId(productId);
    setQuoteModalOpen(true);
  };

  const renderActivePage = () => {
    switch (activeTab) {
      case 'about':
        return <AboutPage onOpenQuoteModal={handleOpenQuoteModal} />;
      case 'sustainability':
        return <SustainabilityPage onOpenQuoteModal={handleOpenQuoteModal} setActiveTab={setActiveTab} />;
      case 'products':
        return <ProductsPage onOpenQuoteModal={handleOpenQuoteModal} />;
      case 'gallery':
        return <GalleryPage />;
      case 'rnd':
        return <RnDPage onOpenQuoteModal={handleOpenQuoteModal} />;
      case 'quality':
        return <QualityPage onOpenQuoteModal={handleOpenQuoteModal} />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage setActiveTab={setActiveTab} onOpenQuoteModal={handleOpenQuoteModal} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F7FA] text-[#0B2536] flex flex-col font-sans-ui selection:bg-[#0084C9]/25 selection:text-[#0084C9]">
      {/* Sticky Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main Page View */}
      <main className="flex-grow">
        {renderActivePage()}
      </main>

      {/* Deep Botanical Green Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Direct B2B Quotation & Sample Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProductId={modalProductId}
      />
    </div>
  );
}

export default App;
