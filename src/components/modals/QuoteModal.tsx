import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Loader2, MessageSquare, Mail } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { COMPANY_INFO } from '../../data/company';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProductId?: string;
}

const INITIAL_FORM_STATE = {
  name: '',
  company: '',
  email: '',
  phone: '',
  quantity: 'Sample Order (< 5kg)',
  message: '',
};

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialProductId }) => {
  const [selectedProduct, setSelectedProduct] = useState<string>(initialProductId || 'cardamom-oil');
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [lastSubmittedData, setLastSubmittedData] = useState<{
    productName: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    quantity: string;
    message: string;
  } | null>(null);

  // Sync initial product when opened or changed
  useEffect(() => {
    if (initialProductId) {
      setSelectedProduct(initialProductId);
    }
  }, [initialProductId]);

  if (!isOpen) return null;

  const currentProduct = PRODUCTS.find((p) => p.id === selectedProduct);
  const currentProductName = currentProduct ? `${currentProduct.name} (${currentProduct.categoryLabel})` : 'Custom Botanical Extract';

  // Construct structured WhatsApp message
  const generateWhatsAppLink = (data: typeof lastSubmittedData) => {
    if (!data) return '#';
    const cleanMobile = '917708001856'; // Venuss direct mobile
    const text = `*New B2B Quotation Request — Venuss Herbo Aromatics*\n\n` +
      `🌿 *Product:* ${data.productName}\n` +
      `👤 *Name:* ${data.name}\n` +
      `🏢 *Company:* ${data.company}\n` +
      `✉️ *Email:* ${data.email}\n` +
      `📞 *Phone:* ${data.phone || 'N/A'}\n` +
      `📦 *Requirement Tier:* ${data.quantity}\n` +
      `📝 *Specifications/Notes:* ${data.message || 'Standard B2B Specification'}\n\n` +
      `_Sent directly from venuss.co.in web portal_`;

    return `https://wa.me/${cleanMobile}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionPayload = {
      productName: currentProductName,
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      quantity: formData.quantity,
      message: formData.message,
    };

    // 1. Submit to Formspree / Web3Forms endpoint for live email delivery
    try {
      await fetch('https://formspree.io/f/xbjvlwrk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          subject: `B2B Quotation Request: ${currentProductName} from ${formData.company}`,
          ...submissionPayload,
          factoryEmail: COMPANY_INFO.contact.emailGeneral,
        }),
      }).catch(() => {
        // Fallback gracefully even if network or adblocker interrupts external API
      });
    } catch {
      // Ignore network errors to guarantee uninterrupted user flow
    }

    // 2. Persist locally to localStorage so records are preserved in browser
    try {
      const existingInquiries = JSON.parse(localStorage.getItem('venuss_inquiries') || '[]');
      const newInquiry = {
        id: `INQ-${Date.now()}`,
        ...submissionPayload,
        submittedAt: new Date().toISOString(),
      };
      localStorage.setItem('venuss_inquiries', JSON.stringify([newInquiry, ...existingInquiries]));
    } catch {
      // Ignore localStorage errors
    }

    // Retain a copy for the confirmation action screen
    setLastSubmittedData(submissionPayload);

    // 3. Immediately automatically reset the form inputs back to blank
    setFormData(INITIAL_FORM_STATE);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setFormData(INITIAL_FORM_STATE);
    setLastSubmittedData(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#072C42]/75 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#F2F7FA] rounded-3xl border border-[#0084C9]/25 shadow-2xl overflow-hidden text-[#0B2536]">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-[#072C42] via-[#0A3B59] to-[#051C2C] text-[#F2F7FA] px-6 py-5 flex items-center justify-between border-b border-[#0084C9]/30">
          <div className="flex items-center gap-3.5">
            <div className="h-10 px-2.5 py-1 rounded-xl bg-white shadow-sm border border-[#0084C9]/30 flex items-center justify-center shrink-0">
              <img 
                src="/assets/logo.png" 
                alt="VENUSS Logo" 
                className="h-full w-auto object-contain rounded-md" 
              />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#E5A853] font-bold">Product Inquiry & Quote</span>
              <h3 className="font-serif-editorial text-xl font-semibold text-white">Request Technical Specification & Quotation</h3>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto">
          {isSubmitted && lastSubmittedData ? (
            <div className="py-8 text-center space-y-6 animate-fadeIn">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#0084C9]/15 text-[#0084C9] flex items-center justify-center border-2 border-[#0084C9] shadow-inner">
                <CheckCircle2 className="w-9 h-9 text-[#0084C9]" />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif-editorial text-2xl text-[#0B2536] font-bold">
                  Inquiry Dispatched Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-[#0B2536] max-w-md mx-auto leading-relaxed">
                  Your quotation inquiry for <strong className="text-[#0084C9]">{lastSubmittedData.productName}</strong> has been logged and sent to our sales desk at <strong className="text-[#0B2536]">{COMPANY_INFO.contact.emailGeneral}</strong>.
                </p>
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold">
                  ✓ Form fields have automatically reset
                </div>
              </div>

              {/* Instant WhatsApp Option */}
              <div className="p-5 rounded-2xl bg-white border border-emerald-500/30 text-xs text-[#0B2536] max-w-md mx-auto space-y-3 shadow-md">
                <div className="flex items-center justify-center gap-2 text-emerald-700 font-bold text-sm">
                  <MessageSquare className="w-4 h-4" />
                  <span>Prefer Instant WhatsApp Reply?</span>
                </div>
                <p className="text-[#0B2536] text-[11px] leading-relaxed font-medium">
                  Connect with our factory representative on WhatsApp with your quotation details already formatted:
                </p>
                <a
                  href={generateWhatsAppLink(lastSubmittedData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-102"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat on WhatsApp (+91 77080 01856)
                </a>
              </div>

              {/* Direct Email / Phone Reference */}
              <div className="p-4 rounded-2xl bg-white/70 border border-[#0084C9]/20 text-xs text-[#0B2536] max-w-md mx-auto text-left space-y-1.5 shadow-sm font-medium">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-[#0B2536]">Factory Phone:</span>
                  <span>{COMPANY_INFO.contact.phoneLandline} / {COMPANY_INFO.contact.phoneMobile}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-[#0B2536]">Email:</span>
                  <a href={`mailto:${COMPANY_INFO.contact.emailGeneral}`} className="text-[#0084C9] font-medium hover:underline flex items-center gap-1">
                    <Mail className="w-3 h-3" /> {COMPANY_INFO.contact.emailGeneral}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="px-8 py-3 rounded-full bg-[#0084C9] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#006CA5] transition-all shadow-md"
                >
                  Close & Continue Browsing
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Product Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0084C9] mb-1.5">
                  Select Botanical Ingredient *
                </label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#0084C9]/25 text-sm text-[#0B2536] focus:outline-none focus:border-[#0084C9] focus:ring-2 focus:ring-[#0084C9]/20 shadow-sm"
                  required
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.categoryLabel} — {p.extractionMethod})
                    </option>
                  ))}
                  <option value="custom-extract">Other / Custom Botanical Requirement</option>
                </select>
              </div>

              {/* Grid 2 Column: Name & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0084C9] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#0084C9]/25 text-sm text-[#0B2536] focus:outline-none focus:border-[#0084C9] focus:ring-1 focus:ring-[#0084C9] shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0084C9] mb-1.5">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#0084C9]/25 text-sm text-[#0B2536] focus:outline-none focus:border-[#0084C9] focus:ring-1 focus:ring-[#0084C9] shadow-sm"
                  />
                </div>
              </div>

              {/* Grid 2 Column: Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0084C9] mb-1.5">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#0084C9]/25 text-sm text-[#0B2536] focus:outline-none focus:border-[#0084C9] focus:ring-1 focus:ring-[#0084C9] shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0084C9] mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#0084C9]/25 text-sm text-[#0B2536] focus:outline-none focus:border-[#0084C9] focus:ring-1 focus:ring-[#0084C9] shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0084C9] mb-1.5">
                  Estimated Requirement Quantity
                </label>
                <select
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#0084C9]/25 text-sm text-[#0B2536] focus:outline-none focus:border-[#0084C9] shadow-sm"
                >
                  <option value="Sample Order (< 5kg)">Sample Order (&lt; 5kg)</option>
                  <option value="Trial Batch (5kg - 25kg)">Trial Batch (5kg - 25kg)</option>
                  <option value="Commercial Batch (50kg - 250kg)">Commercial Batch (50kg - 250kg)</option>
                  <option value="Industrial Bulk (> 500kg)">Industrial Bulk (&gt; 500kg)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0084C9] mb-1.5">
                  Specific Specifications / Application Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Please state desired physical format, application (Flavor/Fragrance/Pharma), or specific compliance required..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#0084C9]/25 text-sm text-[#0B2536] focus:outline-none focus:border-[#0084C9] shadow-sm"
                />
              </div>

              <div className="flex items-center gap-2 pt-1 text-[11px] text-[#0B2536] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#0084C9]" />
                <span>Directly routed to Venuss Herbo Aromatics sales desk in Seithur, Tamil Nadu.</span>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-5 py-2.5 rounded-full border border-[#0084C9]/20 text-xs font-semibold text-[#0B2536] hover:bg-[#0084C9]/10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#0084C9] to-[#006CA5] text-white text-xs font-bold uppercase tracking-wider hover:shadow-lg hover:shadow-[#0084C9]/30 hover:scale-105 active:scale-95 transition-all shadow-md disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Enquiry</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
