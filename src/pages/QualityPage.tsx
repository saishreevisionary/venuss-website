import React from 'react';
import { QualitySection } from '../components/sections/QualitySection';

interface QualityPageProps {
  onOpenQuoteModal: () => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-28 pb-24 bg-[#F2F7FA] min-h-screen text-[#0B2536]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <QualitySection onOpenQuoteModal={onOpenQuoteModal} />
      </div>
    </div>
  );
};

export default QualityPage;
