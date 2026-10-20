import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { getProductImages } from '../data/productImages';
import { AutoSlidingImage } from '../components/media/AutoSlidingImage';

interface ProductsPageProps {
  onOpenQuoteModal: (productId?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter products
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.botanicalName && product.botanicalName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-24 bg-[#F2F7FA] min-h-screen text-[#0B2536]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0084C9]/10 text-[#0084C9] text-xs font-bold uppercase tracking-widest border border-[#0084C9]/25">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A853]" />
            BOTANICAL INGREDIENT CATALOG
          </div>
          <h1 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-[#0B2536] font-bold">
            Pure natural extracts. <br />
            <span className="italic text-[#0084C9]">Crafted for global industry.</span>
          </h1>
          <p className="text-sm md:text-base text-[#162E3F] font-normal max-w-xl mx-auto leading-relaxed">
            Browse our catalog of Indian essential oils, spice oleoresins, floral absolutes, and micro-sterilized spice powders.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-6 mb-12">
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#162E3F]" />
            <input
              type="text"
              placeholder="Search botanical name, extract type, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border border-[#0084C9]/25 text-sm text-[#0B2536] placeholder-[#162E3F]/70 focus:outline-none focus:ring-2 focus:ring-[#0084C9] shadow-sm font-medium"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-sm ${
                    isSelected
                      ? 'bg-[#0084C9] text-white shadow-[#0084C9]/25 scale-105'
                      : 'bg-white text-[#162E3F] hover:text-[#0084C9] border border-[#0084C9]/20 hover:border-[#0084C9]/50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const productImages = getProductImages(product);

            return (
              <div
                key={product.id}
                className="group glass-bay rounded-3xl overflow-hidden border border-[#0084C9]/20 hover:border-[#0084C9] shadow-sm hover:shadow-2xl transition-all flex flex-col justify-between glass-card-hover"
              >
                {/* Auto-sliding image carousel right on the card */}
                <AutoSlidingImage
                  images={productImages}
                  productName={product.name}
                  categoryLabel={product.categoryLabel}
                  extractionMethod={product.extractionMethod}
                />

                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Name & Botanical Name */}
                    <div>
                      <h3 className="font-serif-editorial text-2xl font-bold text-[#0B2536] group-hover:text-[#0084C9] transition-colors">
                        {product.name}
                      </h3>
                      {product.botanicalName && (
                        <span className="text-xs italic text-[#162E3F] block mt-0.5 font-semibold">
                          {product.botanicalName}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#0B2536] leading-relaxed font-normal line-clamp-3">
                      {product.description}
                    </p>

                    {/* Recommended B2B Applications Tags */}
                    {product.applications && product.applications.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {product.applications.slice(0, 3).map((app, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 rounded-full bg-white text-[10px] text-[#0B2536] border border-[#0084C9]/15 font-semibold"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Clean Direct Action Button: REQUEST QUOTE */}
                  <div className="pt-5 mt-5 border-t border-[#0084C9]/15">
                    <button
                      onClick={() => onOpenQuoteModal(product.id)}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0084C9] to-[#006CA5] text-white text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-[#0084C9]/25 hover:brightness-105 transition-all text-center shadow-sm"
                    >
                      REQUEST QUOTE & SPEC SHEET
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 glass-bay rounded-3xl border border-[#0084C9]/20 space-y-3">
            <h3 className="font-serif-editorial text-2xl text-[#0B2536] font-bold">No Products Found</h3>
            <p className="text-xs text-[#456375]">Try adjusting your search keywords or category filters.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="px-5 py-2 rounded-full bg-[#0084C9] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductsPage;
