// src/pages/Updates.jsx
// FINAL – GUIDANCE-DRIVEN, CALM, ENTERPRISE-GRADE

function Updates() {
  const updates = [
    {
      title: "Application submitted to University of Toronto",
      content:
        "Your Computer Science (BSc) application for Fall 2024 intake has been successfully submitted by Priya.",
      timestamp: "Jan 5, 2026 2:30 PM",
      implication: "No action required. You’ll be notified once the university begins review.",
      type: "no-action"
    },
    {
      title: "Academic transcripts marked for verification",
      content:
        "Documents have been received and queued for verification by the admissions team.",
      timestamp: "Jan 4, 2026 10:15 AM",
      implication: "Documents are under review. Typical processing time is 3–5 working days.",
      type: "waiting"
    },
    {
      title: "University shortlist approved",
      content:
        "Your selected universities have been reviewed and approved by Priya.",
      timestamp: "Jan 2, 2026 4:45 PM",
      implication: "Applications will now move into the submission phase.",
      type: "waiting"
    },
    {
      title: "Profile evaluation completed",
      content:
        "Your academic background and goals have been evaluated. Application planning is complete.",
      timestamp: "Dec 30, 2025 9:20 AM",
      implication: "Your counsellor will proceed with applications on your behalf.",
      type: "no-action"
    },
    {
      title: "Counsellor assigned",
      content:
        "Priya has been assigned as your primary application counsellor.",
      timestamp: "Dec 28, 2025 11:00 AM",
      implication: "All future updates and actions will be managed by Priya.",
      type: "no-action"
    }
  ];

  const implicationDotColor = (type) => {
    switch (type) {
      case "no-action":
        return "bg-emerald-500";
      case "action-required":
        return "bg-amber-500";
      case "waiting":
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-8 bg-gray-50/50 min-h-screen">
      
      {/* Header */}
      <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
          Updates
        </h1>
        <p className="text-gray-600 text-lg lg:text-xl max-w-2xl leading-relaxed">
          Activity updates and guidance. Managed by Priya.
        </p>
      </div>

      {/* Updates Feed */}
      <div className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-100">
        {updates.map((update, idx) => (
          <div
            key={idx}
            className="p-8 lg:p-10 hover:bg-gray-50/40 transition-colors"
          >
            {/* Header Row */}
            <div className="flex items-start justify-between mb-4 lg:mb-6">
              <div className="flex-1 min-w-0 pr-6">
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2 leading-tight">
                  {update.title}
                </h3>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  {update.content}
                </p>
              </div>

              <p className="text-sm lg:text-base text-gray-500 font-medium whitespace-nowrap">
                {update.timestamp}
              </p>
            </div>

            {/* Implication – Single, Calm Signal */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-start gap-3">
                <div
                  className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${implicationDotColor(
                    update.type
                  )}`}
                />
                <p className="text-sm lg:text-base font-medium text-gray-700 leading-relaxed">
                  {update.implication}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Reassurance */}
      <div className="bg-white rounded-2xl border border-gray-200 p-10 lg:p-12 text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 mx-auto bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
          <span className="text-2xl text-emerald-600 font-bold">✓</span>
        </div>
        <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
          Everything is tracked
        </h3>
        <p className="text-gray-600 text-lg lg:text-xl leading-relaxed max-w-md mx-auto">
          Updates appear automatically. No action is required unless stated explicitly.
        </p>
      </div>
    </div>
  );
}

export default Updates;
