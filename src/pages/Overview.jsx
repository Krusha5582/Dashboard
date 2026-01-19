import React, { useState, useEffect } from 'react';

const StatusChip = ({ status, label, size = 'sm', className = '' }) => {
  const styles = {
    success: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    warning: 'bg-amber-50 border-amber-100 text-amber-700',
    default: 'bg-gray-50 border-gray-200 text-gray-600',
    review: 'bg-blue-50 border-blue-100 text-blue-700',
  };

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-medium border text-xs transition-colors ${
        size === 'xs' ? 'px-2 py-0.5 text-[10px]' : 'text-xs'
      } ${styles[status] || styles.default} ${className}`}
    >
      {status === 'warning' && (
        <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )}
      {status === 'review' && (
        <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM12.707 8.293a1 1 0 00-1.414 0L9 10.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" clipRule="evenodd" />
        </svg>
      )}
      <span className="truncate">{label}</span>
    </span>
  );
};

const QuietStepper = ({ steps, currentStep }) => (
  <div className="flex items-center gap-3 px-1 -mx-1 overflow-x-auto pb-1 no-scrollbar">
    {steps.map((step, index) => (
      <React.Fragment key={step.id}>
        <div className="flex flex-col items-center min-w-[52px] flex-shrink-0">
          <div
            className={`
              w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border transition-all duration-200
              ${step.id === currentStep
                ? 'bg-gray-200 text-gray-700 border-gray-300'
                : step.complete
                ? 'bg-emerald-100 text-emerald-600 border-emerald-200'
                : 'bg-gray-50 text-gray-400 border-gray-100 hover:border-gray-200'
              }
            `}
            aria-label={`${step.name} ${step.complete ? 'complete' : step.id === currentStep ? 'current' : 'pending'}`}
          >
            {step.complete ? (
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <span className="font-mono">{step.id}</span>
            )}
          </div>
          <span className={`text-[10px] mt-1 font-medium text-center leading-tight px-0.5 ${
            step.id === currentStep
              ? 'text-gray-700 font-semibold'
              : step.complete
              ? 'text-emerald-600'
              : 'text-gray-400'
          }`}>
            {step.name}
          </span>
        </div>
        {index < steps.length - 1 && <div className="flex-1 h-px bg-gray-100 min-w-[20px]" />}
      </React.Fragment>
    ))}
  </div>
);

const MetricCard = ({ icon, label, value, status }) => (
  <div className="group rounded-lg p-3 border border-gray-100/50 bg-white/60 hover:border-gray-200/70 transition-all cursor-default backdrop-blur-sm">
    <div className="flex items-start justify-between mb-1.5">
      <span className={`text-base transition-colors flex-shrink-0 ${
        status === 'review' 
          ? 'text-blue-500' 
          : 'text-gray-400 group-hover:text-gray-500'
      }`}>
        {icon}
      </span>
    </div>
    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-0.5 leading-tight">{label}</p>
    <p className="text-sm font-bold text-gray-900 leading-tight">{value}</p>
  </div>
);

const PriorityBlock = ({ counsellor, state, onPrimaryAction, onSecondaryAction }) => {
  if (state === 'completed') {
    return (
      <div className="bg-white/90 border border-emerald-100/50 rounded-2xl p-7 shadow-sm backdrop-blur-sm">
        <div className="flex flex-col gap-5">
          <StatusChip status="review" label="In Review" />
          <div className="space-y-1.5">
            <h2 className="text-xl font-black leading-tight">{counsellor.name}</h2>
            <p className="text-sm font-medium text-gray-500">{counsellor.role}</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={onPrimaryAction}
              className="flex-1 flex items-center justify-center gap-2 h-12 px-5 bg-emerald-50/80 border border-emerald-200/50 text-emerald-700 rounded-xl font-semibold hover:bg-emerald-100 hover:shadow-md transition-all text-sm backdrop-blur-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Track Progress
            </button>
            <button 
              onClick={onSecondaryAction}
              className="flex items-center justify-center gap-2 h-12 px-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-black transition-all shadow-sm hover:shadow-md text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 4.03 9 8z" />
              </svg>
              Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/90 border border-amber-100/50 rounded-2xl p-7 shadow-sm backdrop-blur-sm">
      <div className="flex flex-col gap-5">
        <StatusChip status="warning" label="Priority Action" />
        <div className="space-y-1.5">
          <h2 className="text-xl font-black leading-tight">{counsellor.name}</h2>
          <p className="text-sm font-medium text-gray-500">{counsellor.role}</p>
        </div>
        <div className="space-y-3">
          <button 
            onClick={onPrimaryAction}
            className="group w-full flex items-center justify-center gap-3 h-14 px-8 bg-gray-900 text-white 
                       rounded-xl font-bold hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900/30
                       transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm relative overflow-hidden"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span>Upload Essay Draft</span>
            <div className="absolute -right-3 -top-3 w-5 h-5 bg-white/20 rounded-full group-hover:w-7 group-hover:h-7 transition-all" />
          </button>
          <button 
            onClick={onSecondaryAction}
            className="w-full flex items-center justify-center gap-2.5 h-11 px-6 bg-white/80 border border-gray-200/50 text-gray-700 
                       rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm
                       transition-all text-sm backdrop-blur-sm"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 4.03 9 8z" />
            </svg>
            Message {counsellor.firstName}
          </button>
        </div>
      </div>
    </div>
  );
};

const initialData = {
  student: { name: 'Anya Sharma', id: 'AS2307', ielts: 7.5, gpa: 3.85, applications: 5 },
  counsellor: { 
    name: 'Priya Patel', 
    firstName: 'Priya',
    role: 'Senior Counsellor',
    availability: 'Mon–Fri 9AM–6PM, Sat 10AM–2PM IST'
  },
  journey: { 
    currentStep: 3,
    steps: [
      { id: 1, name: 'Prep', complete: true },
      { id: 2, name: 'Research', complete: true },
      { id: 3, name: 'Apply', complete: false },
      { id: 4, name: 'Offers', complete: false },
      { id: 5, name: 'Enroll', complete: false }
    ]
  },
  health: {
    documents: '10/12',
    essays: 'In Review',
    payments: '2/5',
    references: '2/3'
  },
  applications: [
    { id: 'UCL', status: 'Submitted', deadline: 'Jan 15', priority: 'High' },
    { id: 'UCL', status: 'Draft', deadline: 'Jan 20', priority: 'Medium' },
    { id: 'Imperial', status: 'Pending', deadline: 'Feb 1', priority: 'High' },
    { id: 'LSE', status: 'Draft', deadline: 'Feb 15', priority: 'Low' }
  ],
  recentActivity: [
    { text: 'Priya Patel reviewed essay', time: '2 days ago' },
    { text: 'Documents verified complete', time: '3 days ago' },
    { text: 'UCL application submitted', time: '5 days ago' }
  ]
};

export default function Overview() {
  const [data] = useState(initialData);
  const [priorityState, setPriorityState] = useState('pending');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const handleUpload = () => {
    setShowUploadModal(false);
    setPriorityState('completed');
  };

  const handleMessage = () => {
    setShowMessageModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 px-4 py-8 lg:px-12 lg:py-12">
      <div className="max-w-6xl mx-auto space-y-8 lg:space-y-12">
        {/* Profile Header */}
        <div className="bg-white/90 backdrop-blur-xl border border-gray-100/50 rounded-2xl shadow-sm p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
            <div className="flex-1 space-y-3 mb-8 lg:mb-0">
              <div className="flex items-center gap-3 mb-2">
                <p className="text-sm font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50/50 px-3 py-1 rounded-full">AS2307</p>
                <div className="flex gap-1.5">
                  <StatusChip status="success" label={`IELTS ${data.student.ielts}`} size="xs" />
                  <StatusChip status="default" label={data.student.gpa} size="xs" />
                  <StatusChip status="default" label={`${data.student.applications} Apps`} size="xs" />
                </div>
              </div>
              <h1 className="text-3xl lg:text-4xl font-black leading-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Anya Sharma</h1>
            </div>
            <div className="lg:min-w-[280px] flex flex-col items-end space-y-4">
              <div className="text-xs text-gray-500 max-w-md text-right leading-relaxed">
                Priya Patel reviewed essay • 2 days ago
              </div>
              <QuietStepper steps={data.journey.steps} currentStep={data.journey.currentStep} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Priority Block */}
          <div className="lg:col-span-2">
            <PriorityBlock
              counsellor={data.counsellor}
              state={priorityState}
              onPrimaryAction={() => setShowUploadModal(true)}
              onSecondaryAction={() => setShowMessageModal(true)}
            />
          </div>

          {/* Quick Stats */}
          <div className="space-y-4">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-100/50 rounded-xl p-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline text-sm">
                  <span className="text-gray-500 font-medium">Apps</span>
                  <span className="font-bold text-gray-900">{data.student.applications}</span>
                </div>
                <div className="flex justify-between items-baseline text-sm">
                  <span className="text-gray-500 font-medium">Docs</span>
                  <span className="font-bold text-gray-900">10/12</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 h-1.5 rounded-full" style={{width: '83%'}} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Health Metrics + Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Health Metrics */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-100/50 rounded-2xl p-8 lg:p-10">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">Application Status</h3>
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(data.health).map(([key, value]) => (
                <MetricCard
                  key={key}
                  icon={
                    key === 'documents' ? '📂' :
                    key === 'essays' ? '📝' :
                    key === 'payments' ? '💳' : '✉️'
                  }
                  label={key.charAt(0).toUpperCase() + key.slice(1)}
                  value={value}
                  status={key === 'essays' ? 'review' : undefined}
                />
              ))}
            </div>
          </div>

          {/* Recent Applications */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-100/50 rounded-2xl p-8 lg:p-10">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6 flex items-center gap-2">
              Applications
              <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full font-semibold">4</span>
            </h3>
            <div className="space-y-3">
              {data.applications.slice(0, 3).map((app, i) => (
                <div key={app.id} className="flex items-center justify-between group p-3 rounded-xl hover:bg-gray-50/50 transition-all cursor-default">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-white">{app.id}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{app.status}</p>
                      <p className="text-xs text-gray-500">{app.deadline}</p>
                    </div>
                  </div>
                  <StatusChip status={app.priority === 'High' ? 'warning' : 'default'} label={app.priority} size="xs" />
                </div>
              ))}
              {data.applications.length > 3 && (
                <div className="text-center py-4 text-sm text-gray-500 border-t border-gray-100/50">
                  +{data.applications.length - 3} more
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Ownership + Next Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/70 backdrop-blur-sm border border-gray-100/50 rounded-2xl p-8 text-sm text-gray-600 text-center lg:text-left">
            <p className="font-semibold text-gray-900 mb-2">Priya Patel owns your applications</p>
            <p>Upload requested materials when pinged. We'll notify you of all decisions and next steps automatically.</p>
          </div>
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50/50 border border-emerald-100/50 rounded-2xl p-8">
            <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-4">Counsellor Availability</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2 text-gray-900">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Available now
              </p>
              <p>{data.counsellor.availability}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-gray-100/50 p-8 max-h-[90vh] overflow-y-auto backdrop-blur-xl">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
              <h2 className="text-2xl font-black text-gray-900">Upload Essay Draft</h2>
              <button 
                onClick={() => setShowUploadModal(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100/50 rounded-xl transition-all backdrop-blur-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-6 mb-10">
              <p className="text-sm text-gray-600 leading-relaxed">
                Final essay draft required to proceed with applications. Once submitted, review begins automatically.
              </p>
              <div className="border-2 border-dashed border-gray-200/60 rounded-2xl p-10 text-center hover:border-gray-300/80 transition-all backdrop-blur-sm hover:shadow-sm">
                <input 
                  type="file" 
                  className="hidden" 
                  id="essay-upload"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    if (e.target.files?.[0] && e.target.files[0].size <= 5 * 1024 * 1024) {
                      handleUpload();
                    }
                  }}
                />
                <label htmlFor="essay-upload" className="block cursor-pointer group">
                  <svg className="w-14 h-14 mx-auto mb-6 text-gray-400 group-hover:text-gray-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="font-semibold text-lg text-gray-700 mb-2 group-hover:text-gray-900 transition-colors">Click to select essay</p>
                  <p className="text-sm text-gray-500 mb-1">PDF / DOC / DOCX • Max 5MB</p>
                </label>
              </div>
            </div>
            <div className="flex justify-end gap-4 pt-6 border-t border-gray-100/50">
              <button 
                onClick={() => setShowUploadModal(false)}
                className="px-8 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Message Modal */}
      {showMessageModal && (
        <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-gray-100/50 p-8 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
              <h2 className="text-2xl font-black text-gray-900">Message Priya</h2>
              <button 
                onClick={() => setShowMessageModal(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100/50 rounded-xl transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4 mb-8">
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Use only if action is blocked or clarification required</p>
              <p className="text-sm text-gray-600">Priya responds within 24 hours.</p>
              <textarea
                rows={4}
                placeholder="Essay questions, strategy discussion, document clarification..."
                className="w-full p-4 border border-gray-200/60 rounded-xl resize-vertical text-sm focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all backdrop-blur-sm"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.metaKey) {
                    handleMessage();
                  }
                }}
              />
            </div>
            <div className="flex justify-end gap-4 pt-6 border-t border-gray-100/50">
              <button 
                onClick={() => setShowMessageModal(false)}
                className="px-8 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleMessage}
                className="px-10 py-3 bg-gray-900 text-white text-sm font-bold rounded-xl hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900/30 shadow-lg hover:shadow-xl transition-all"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
