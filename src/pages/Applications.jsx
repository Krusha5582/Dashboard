// src/pages/Applications.jsx
// FINAL – Realistic, Calm, Production-Grade

function Applications() {
  const applications = [
    {
      university: 'University of Toronto',
      program: 'Computer Science (BSc)',
      intake: 'Fall 2024',
      status: 'Under Review',
      updated: '2 days ago',
      lastAction: 'Reviewed by counsellor and forwarded to university',
      nextStep: 'No action needed from you',
      counsellor: 'Priya'
    },
    {
      university: 'University College London',
      program: 'Data Science (MSc)',
      intake: 'Fall 2024',
      status: 'Submitted',
      updated: '5 days ago',
      lastAction: 'Application submitted successfully',
      nextStep: 'Waiting for university review',
      counsellor: 'Priya'
    },
    {
      university: 'University of British Columbia',
      program: 'Business Administration (BBA)',
      intake: 'Fall 2024',
      status: 'Submitted',
      updated: '1 day ago',
      lastAction: 'Final documents uploaded',
      nextStep: 'Submission confirmation pending',
      counsellor: 'Ankit'
    },
    {
      university: 'McGill University',
      program: 'Biomedical Engineering (BEng)',
      intake: 'Winter 2025',
      status: 'Offer',
      updated: '1 day ago',
      lastAction: 'Offer letter received from university',
      nextStep: 'Counsellor will guide acceptance process',
      counsellor: 'Priya'
    },
    {
      university: 'ETH Zurich',
      program: 'Mechanical Engineering (MSc)',
      intake: 'Spring 2024',
      status: 'Rejected',
      updated: '1 week ago',
      lastAction: 'Decision received from university',
      nextStep: 'Counsellor will discuss reapplication options',
      counsellor: 'Rahul'
    }
  ];

  const STATUS_COLORS = {
    Offer: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    'Under Review': 'text-blue-600 bg-blue-50 border-blue-200',
    Submitted: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    Rejected: 'text-red-600 bg-red-50 border-red-200'
  };

  const STATUS_MEANING = {
    'Under Review': 'Your application is with the university. No action needed from you.',
    Submitted: 'Application submitted successfully. Waiting for review.',
    Rejected: 'This outcome is normal. Your counsellor will advise next steps.',
    Offer: 'Congratulations. Your counsellor will guide the acceptance process.'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-800 text-sm font-semibold rounded-lg border border-emerald-200 mb-8">
            <span>•</span>
            <span>Managed by your counsellor</span>
            <span className="px-2 py-0.5 bg-white text-emerald-700 text-xs rounded border border-emerald-200">
              {applications.length} applications
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Applications
          </h1>
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            Your counsellor handles the process. You’ll see updates here as they happen.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-4">
          {applications.map((app, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-150"
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center border">
                    <span className="text-xl font-semibold text-gray-600">→</span>
                  </div>

                  <div className="min-w-0">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
                      {app.university}
                    </h2>
                    <p className="text-lg text-gray-600 font-medium">
                      {app.program}
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="ml-4 text-right max-w-[260px]">
                  <div
                    className={`inline-block px-4 py-2 text-sm font-semibold rounded-lg border ${
                      STATUS_COLORS[app.status]
                    }`}
                  >
                    {app.status}
                  </div>
                  <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                    {STATUS_MEANING[app.status]}
                  </p>
                </div>
              </div>

              {/* Meta */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-500 block mb-1">Intake</span>
                  <span className="font-semibold text-gray-900">{app.intake}</span>
                </div>

                <div>
                  <span className="text-gray-500 block mb-1">Last update</span>
                  <span className="font-semibold text-emerald-600">{app.updated}</span>
                </div>

                <div>
                  <span className="text-gray-500 block mb-1">Last action</span>
                  <span className="font-medium text-gray-800">{app.lastAction}</span>
                </div>

                <div>
                  <span className="text-gray-500 block mb-1">Next step</span>
                  <span className="font-medium text-gray-800">{app.nextStep}</span>
                </div>
              </div>

              <div className="mt-4 text-xs text-gray-500">
                Managed by <span className="font-semibold text-gray-700">{app.counsellor}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-20 py-12 border-t border-gray-200 bg-white rounded-xl">
          <div className="max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 mx-auto bg-emerald-100 rounded-xl flex items-center justify-center">
              <span className="text-xl text-emerald-600 font-bold">✓</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">
              You’re on track
            </h3>
            <p className="text-gray-600">
              We’ll notify you when something needs your attention.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Applications;
