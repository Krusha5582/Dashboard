import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Check, UploadCloud, CreditCard, FileText, ArrowRight, PlayCircle, Lock, Send, X, Upload, MessageCircle, Clock, DollarSign, Eye, RefreshCw, Mail, Star, GraduationCap, Calendar, Plane, Globe, MapPin, Ticket, Building2 } from 'lucide-react';

const ProgressTracker = () => {
  const [stages, setStages] = useState([
    {
      id: 1,
      name: 'Profile Evaluation',
      status: 'completed',
      desc: 'Academic records and identity documents verified.',
      meta: 'Verified on Jan 12',
      icon: Check,
    },
    {
      id: 2,
      name: 'University Shortlisting',
      status: 'completed',
      desc: 'Align your profile with dream, reach, and safety universities.',
      meta: 'Essay approved • Jan 15',
      icon: GraduationCap,
    },
    {
      id: 3,
      name: 'Applications Submitted',
      status: 'completed',
      desc: 'Standardized testing and portal submissions.',
      meta: 'Payments processed • Jan 18',
      icon: Send,
    },
    {
      id: 4,
      name: 'Offers & Enrollment',
      status: 'completed',
      desc: 'Decision tracking and final visa documentation.',
      meta: '3 offers received • Feb 5',
      icon: Star,
    },
    {
      id: 5,
      name: 'Offer Management',
      status: 'completed',
      desc: 'Compare offers and prepare acceptances.',
      meta: 'Accepted Stanford • Feb 28',
      icon: Check,
    },
    {
      id: 6,
      name: 'Final Decision',
      status: 'completed',
      desc: 'Accept your chosen university offer.',
      meta: 'Stanford confirmed • Mar 5',
      icon: Check,
    },
    {
      id: 7,
      name: 'Visa Preparation',
      status: 'in-progress',
      desc: 'Passport and visa document submission.',
      action: 'Upload Visa Documents',
      visaDeadline: 'Apr 15',
      requiredDocs: ['Passport', 'I-20', 'SEVIS Fee Receipt', 'Financial Proof'],
      icon: FileText,
    },
    {
      id: 8,
      name: 'Departure Planning',
      status: 'pending',
      desc: 'Travel arrangements and orientation prep.',
      icon: Plane,
    },
    {
      id: 9,
      name: 'Complete',
      status: 'pending',
      desc: 'Welcome to your university journey!',
      icon: Globe,
    },
  ]);

  const [showVisaModal, setShowVisaModal] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [uploadedDocs, setUploadedDocs] = useState({});
  const [uploading, setUploading] = useState(false);
  const [supportMessage, setSupportMessage] = useState('');
  const fileInputRef = useRef(null);

  const completedCount = stages.filter(s => s.status === 'completed').length;
  const totalStages = stages.length;
  const currentStage = stages.find(s => s.status === 'in-progress');
  const requiredDocs = currentStage?.requiredDocs || [];

  // ESC KEY HANDLER
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setShowVisaModal(false);
        setShowSupportModal(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const handleFileSelect = useCallback((e, docType) => {
    const file = e.target.files[0];
    if (file && file.size <= 10 * 1024 * 1024) {
      setUploadedDocs(prev => ({ ...prev, [docType]: file.name }));
      e.target.value = '';
    }
  }, []);

  const handleUploadVisaDocs = async () => {
    setUploading(true);
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    setStages(prev => prev.map(stage => {
      if (stage.id === 7) {
        return { 
          ...stage, 
          status: 'completed', 
          meta: 'Visa docs approved • Apr 10',
          uploadedDocs: requiredDocs
        };
      }
      if (stage.id === 8) {
        return { 
          ...stage, 
          status: 'in-progress', 
          action: 'Book Flights',
          flightDeadline: 'May 1'
        };
      }
      return stage;
    }));
    
    setShowVisaModal(false);
    setUploadedDocs({});
    setUploading(false);
  };

  const sendSupportMessage = () => {
    if (!supportMessage.trim()) return;
    setTimeout(() => {
      setShowSupportModal(false);
      setSupportMessage('');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50/80 px-4 py-8 lg:px-8 lg:py-12">
      <div className="max-w-4xl mx-auto space-y-8 lg:space-y-12">
        {/* Hero - Single Focus */}
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 border border-gray-200/50 rounded-xl text-xs font-semibold text-gray-700 shadow-sm">
            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
            Step {completedCount + 1} of {totalStages}
          </div>
          
          <div className="space-y-3">
            <h1 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
              {currentStage?.name}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {currentStage?.action === 'Upload Visa Documents'
                ? `Upload ${requiredDocs.length} required documents before ${currentStage.visaDeadline}.`
                : "Prepare for your Stanford adventure!"
              }
            </p>
          </div>

          {/* Single Primary CTA */}
          {currentStage?.action === 'Upload Visa Documents' && (
            <button 
              onClick={() => setShowVisaModal(true)}
              className="group w-full max-w-sm mx-auto flex items-center justify-center gap-3 bg-gray-900 text-white h-14 px-8 
                         rounded-xl font-bold hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900/30
                         transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
            >
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Upload {requiredDocs.length} Documents
              <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>
          )}
        </div>

        {/* Timeline - Compressed History */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Stanford Journey</h2>
            <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">{completedCount}/{totalStages}</span>
          </div>
          
          <div className="relative space-y-4">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 hidden lg:block z-0" />
            {stages.map((stage) => {
              const isActive = stage.status === 'in-progress';
              const isDone = stage.status === 'completed';
              const Icon = stage.icon;

              return (
                <div key={stage.id} className={`
                  group flex items-start gap-4 p-6 rounded-xl border transition-all duration-200 relative z-10 backdrop-blur-sm
                  ${isActive 
                    ? 'border-gray-200 bg-white/80 shadow-sm ring-1 ring-gray-200/50' 
                    : isDone 
                    ? 'border-gray-100 bg-gray-50/50 text-gray-600' 
                    : 'border-transparent hover:border-gray-200/50 hover:bg-gray-50/30'
                  }`}>
                  
                  <div className={`
                    flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center border-2 font-bold text-sm shadow-sm transition-all
                    ${isActive 
                      ? 'bg-gray-900 border-gray-900 text-white shadow-md' 
                      : isDone 
                      ? 'bg-emerald-100 border-emerald-200 text-emerald-700' 
                      : 'bg-gray-100 border-gray-200 text-gray-500 hover:border-gray-300'
                    }`}>
                    <Icon size={16} strokeWidth={isDone || isActive ? 2.5 : 2} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="min-w-0">
                        <h3 className="font-bold text-lg text-gray-900 leading-tight truncate lg:pr-8">{stage.name}</h3>
                        {stage.meta && (
                          <p className="text-sm font-medium mt-1 px-2.5 py-1 rounded-lg inline-block bg-gray-100 text-gray-700 border">
                            {stage.meta}
                          </p>
                        )}
                      </div>
                      {isDone && (
                        <div className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg flex-shrink-0">✓</div>
                      )}
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed line-clamp-2 font-medium">{stage.desc}</p>
                    
                    {stage.requiredDocs && stage.requiredDocs.length > 0 && isActive && (
                      <div className="mt-4 grid grid-cols-2 gap-3 p-4 bg-white/60 rounded-xl border border-gray-200/50">
                        {stage.requiredDocs.map((doc, i) => (
                          <div key={i} className={`p-3 rounded-lg text-xs font-medium flex items-center gap-2 ${
                            uploadedDocs[doc] 
                              ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
                              : 'bg-gray-50 border-gray-200 text-gray-600'
                          }`}>
                            {uploadedDocs[doc] ? (
                              <Check size={12} className="text-emerald-500" />
                            ) : (
                              <Clock size={12} className="text-gray-400" />
                            )}
                            <span className="truncate">{doc}</span>
                            {uploadedDocs[doc] && (
                              <span className="ml-auto text-emerald-600 font-bold text-xs">✓</span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {stage.acceptedOffer && (
                      <div className="mt-4 p-4 bg-emerald-50/80 border border-emerald-200/50 rounded-xl">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-emerald-800 text-base">{stage.acceptedOffer.name}</span>
                          <span className="font-bold text-lg text-emerald-600">{stage.acceptedOffer.scholarship}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Counselor Section - Subtle Support */}
        <div className="pt-8 border-t border-gray-100/50">
          <div className="p-8 bg-white/80 border border-gray-100/50 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center shadow-md">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-xl text-gray-900">Priya Sharma</p>
                  <p className="text-base text-emerald-600 font-semibold bg-emerald-50 px-3 py-1 rounded-lg inline-block">Visa Specialist</p>
                </div>
              </div>
              <button 
                onClick={() => setShowSupportModal(true)} 
                className="w-full lg:w-auto flex items-center justify-center gap-2.5 h-12 px-6 bg-gray-900 text-white 
                           rounded-xl font-semibold hover:bg-black focus:outline-none transition-all shadow-sm hover:shadow-md text-sm"
              >
                <MessageCircle size={16} />
                Get Visa Help
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Visa Upload Modal - Enterprise Workflow */}
      {showVisaModal && (
        <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 border border-gray-100/50 rounded-2xl w-full max-w-2xl max-h-[90vh] shadow-2xl overflow-hidden flex flex-col">
            {/* Header */}
            <div className="px-8 py-7 border-b border-gray-100 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center shadow-lg">
                    <FileText size={28} className="text-white" />
                  </div>
                  <div>
                    <h2 className="font-black text-2xl text-gray-900">Visa Documents</h2>
                    <p className="text-lg text-gray-600 mt-1">Deadline: <span className="font-bold text-orange-600">{currentStage.visaDeadline}</span></p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowVisaModal(false)} 
                  className="p-2 hover:bg-gray-100 rounded-xl transition-all"
                >
                  <X size={20} className="text-gray-500 hover:text-gray-900" />
                </button>
              </div>
            </div>

            {/* Documents Grid */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {requiredDocs.map((doc) => (
                  <div key={doc} className="group">
                    <div className={`p-6 rounded-xl border-2 transition-all hover:shadow-md ${
                      uploadedDocs[doc]
                        ? 'border-emerald-200 bg-emerald-50 shadow-sm ring-1 ring-emerald-100' 
                        : 'border-gray-200 hover:border-gray-300 bg-gray-50/50'
                    }`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md ${
                            uploadedDocs[doc]
                              ? 'bg-emerald-500' 
                              : 'bg-gray-500'
                          }`}>
                            {uploadedDocs[doc] ? '✓' : doc.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-gray-900">{doc}</h3>
                            <p className="text-sm text-gray-600 mt-1">Max 10MB - PDF, JPG, PNG</p>
                          </div>
                        </div>
                        {uploadedDocs[doc] && (
                          <div className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-xl font-semibold text-sm flex-shrink-0">
                            Uploaded
                          </div>
                        )}
                      </div>
                      {!uploadedDocs[doc] && (
                        <input
                          ref={fileInputRef}
                          type="file"
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => handleFileSelect(e, doc)}
                        />
                      )}
                      {!uploadedDocs[doc] && (
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full bg-gray-900 text-white py-3 px-6 rounded-xl font-semibold text-sm 
                                     hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900/30
                                     transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                        >
                          <UploadCloud size={16} />
                          Upload Document
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Summary */}
              <div className="p-6 bg-gray-50/80 border border-gray-200/50 rounded-xl">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-gray-700">
                    {Object.keys(uploadedDocs).length}/{requiredDocs.length} documents ready
                  </span>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                      style={{ width: `${(Object.keys(uploadedDocs).length / requiredDocs.length) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-7 bg-gray-50/80 border-t border-gray-100 flex-shrink-0">
              <div className="flex gap-4">
                <button 
                  onClick={() => setShowVisaModal(false)} 
                  className="flex-1 bg-white border-2 border-gray-200 text-gray-900 py-4 px-8 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleUploadVisaDocs}
                  disabled={Object.keys(uploadedDocs).length !== requiredDocs.length || uploading}
                  className="flex-1 bg-gray-900 text-white py-4 px-8 rounded-xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed 
                             hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900/30 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:shadow-sm"
                >
                  {uploading ? (
                    <>
                      <Clock size={18} className="animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Check size={18} />
                      Submit All Documents
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Support Modal */}
      {showSupportModal && (
        <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 border border-gray-100/50 rounded-2xl max-w-lg w-full max-h-[85vh] shadow-2xl overflow-hidden">
            <div className="p-8 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center shadow-lg">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="font-black text-xl text-gray-900">Visa Help</h2>
                  <p className="text-lg text-gray-600 mt-1">Priya Sharma - Visa Specialist</p>
                </div>
              </div>
              <button onClick={() => setShowSupportModal(false)} className="p-2 hover:bg-gray-100 rounded-xl transition-all">
                <X size={18} className="text-gray-500 hover:text-gray-900" />
              </button>
            </div>
            
            <div className="p-8 space-y-6 overflow-y-auto">
              <textarea 
                value={supportMessage} 
                onChange={(e) => setSupportMessage(e.target.value)} 
                placeholder="Ask about visa requirements, document checklists, interview prep, or processing times..."
                className="w-full p-5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20 resize-none h-40 font-semibold text-lg text-gray-900 shadow-sm"
              />
              
              <div className="flex gap-4 pt-4">
                <button 
                  onClick={() => setShowSupportModal(false)} 
                  className="flex-1 bg-white border-2 border-gray-200 text-gray-900 py-4 px-8 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
                >
                  Cancel
                </button>
                <button 
                  onClick={sendSupportMessage} 
                  disabled={!supportMessage?.trim()}
                  className="flex-1 bg-gray-900 text-white py-4 px-8 rounded-xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed 
                             hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900/30 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressTracker;
