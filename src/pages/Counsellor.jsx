import React from 'react';

function Counsellor() {
  return (
    <div className="min-h-screen bg-slate-50/80 px-4 py-12 lg:px-12 lg:py-16">
      <div className="max-w-3xl mx-auto space-y-10 lg:space-y-12">
        {/* Header - Decision Context */}
        <div className="bg-white/90 backdrop-blur-xl border border-gray-100/50 rounded-2xl shadow-sm p-8 lg:p-10 text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-3">Raj Kumar</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Owns your complete application journey. Use this page when messaging won't solve your blocker.
          </p>
        </div>

        {/* Profile - Authority & Ownership */}
        <div className="bg-white/90 backdrop-blur-sm border border-gray-100/50 rounded-2xl p-8 lg:p-10 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
            <div className="w-24 h-24 lg:w-28 lg:h-28 bg-gray-900 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg ring-1 ring-gray-900/10">
              <span className="text-2xl font-bold text-white tracking-tight">RK</span>
            </div>
            <div className="flex-1 min-w-0 space-y-2">
              <div>
                <h2 className="text-2xl lg:text-3xl font-black text-gray-900 leading-tight">Raj Kumar</h2>
                <p className="text-lg font-semibold text-emerald-600 bg-emerald-50/50 px-3 py-1 rounded-xl inline-block">Primary Application Counsellor</p>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed max-w-prose">
                Handles university selection, document review, application submission, and visa processing. 
                <span className="font-semibold text-gray-900">Your single point of escalation.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Decision Framework */}
        <div className="bg-gradient-to-r from-emerald-50/70 to-gray-50/50 border border-emerald-100/50 rounded-2xl p-8 lg:p-10">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            When to contact Raj
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3 p-5 rounded-xl bg-white/60 border border-gray-100/50">
              <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 4.03 9 8z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Messaging (24h response)</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Status updates</li>
                  <li>• Document clarification</li>
                  <li>• Minor blockers</li>
                </ul>
              </div>
            </div>
            <div className="space-y-3 p-5 rounded-xl bg-white/60 border border-gray-100/50">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Call (Same day)</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Workflow blocked</li>
                  <li>• Strategy decisions</li>
                  <li>• Urgent escalations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Availability - Actionable Context */}
        <div className="bg-white/90 backdrop-blur-sm border border-gray-100/50 rounded-2xl p-8 lg:p-10 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Live Response Hours</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm">
            <div>
              <div className="flex items-center gap-3 mb-4 p-4 bg-emerald-50/50 rounded-xl border border-emerald-100/30">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="font-semibold text-emerald-700 text-sm">Available now</span>
              </div>
              <div>
                <p className="text-gray-500 mb-2">Monday - Friday</p>
                <p className="font-semibold text-lg text-gray-900">9:00 AM - 6:00 PM IST</p>
              </div>
            </div>
            <div>
              <p className="text-gray-500 mb-2">Saturday</p>
              <p className="font-semibold text-lg text-gray-900">10:00 AM - 2:00 PM IST</p>
              <p className="text-xs text-gray-500 mt-1">Outside hours: 24h response via message</p>
            </div>
          </div>
        </div>

        {/* Escalation CTA - Single Purpose */}
        <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl p-10 text-center shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-1">
          <svg className="w-16 h-16 mx-auto mb-6 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <h3 className="text-2xl lg:text-3xl font-black mb-4 leading-tight">Workflow Blocked?</h3>
          <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto leading-relaxed">
            Use messaging for updates. Request a call only when your next action is unclear or blocked.
          </p>
          <button className="group w-full max-w-sm mx-auto flex items-center justify-center gap-3 h-14 px-8 bg-white text-gray-900 
                             rounded-xl font-bold shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/50
                             transition-all hover:bg-gray-50 hover:-translate-y-0.5">
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Request Call (Same Day)
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counsellor;
