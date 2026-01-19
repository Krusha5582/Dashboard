import React, { useState } from 'react';

function ProfileSettings() {
  const [testDate, setTestDate] = useState('2026-04-15');
  const [targetBand, setTargetBand] = useState('7.5');
  const [weeklyHours, setWeeklyHours] = useState(30);
  const [lastUpdated, setLastUpdated] = useState('12 Jan 2026');
  
  // Modal states
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [show2FAModal, setShow2FAModal] = useState(false);
  const [showUniversityModal, setShowUniversityModal] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  
  // Form states
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const profileData = {
    name: 'Anya Sharma',
    studentId: 'AS2307',
    email: 'anya.sharma@email.com',
    phone: '+91 98765 43210',
    universities: [
      { name: 'Stanford University', category: 'Dream', status: 'Researching' },
      { name: 'MIT', category: 'Dream', status: 'Researching' },
      { name: 'UCL', category: 'Reach', status: 'Documents Ready' },
      { name: 'Imperial College', category: 'Reach', status: 'Documents Ready' }
    ]
  };

  // Button Handlers
  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    if (newPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      return;
    }
    alert('Password updated successfully!');
    setNewPassword('');
    setConfirmPassword('');
    setPasswordError('');
    setShowPasswordModal(false);
  };

  const handleEnable2FA = () => {
    alert('2FA enabled successfully! Check your email for verification code.');
    setShow2FAModal(false);
  };

  const handleRequestUniversityChanges = () => {
    setShowUniversityModal(true);
  };

  const handleConfirmLogout = () => {
    alert('Logging out...');
    setShowLogoutConfirm(false);
    // In real app: navigate to login
    window.location.href = '/login';
  };

  const handleSavePreferences = () => {
    alert('Preferences saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 lg:px-12 lg:py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* H1 - Single Page Title + Last Updated */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
          <p className="text-gray-600 mt-2">Manage your identity, preferences, and security.</p>
          <p className="text-xs text-gray-500 mt-4 flex items-center gap-1">
            Last updated by counsellor • {lastUpdated}
          </p>
          <button 
            onClick={handleSavePreferences}
            className="mt-4 px-6 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-xl hover:bg-emerald-700 transition-colors"
          >
            Save All Changes
          </button>
        </div>

        {/* ZONE 1: Identity & Verification (Locked, Authoritative) */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Verified Identity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <span className="text-lg font-semibold text-gray-900">{profileData.name}</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">Verified by counsellor. Contact support to update official records.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Student ID</label>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <span className="text-lg font-semibold text-gray-900">{profileData.studentId}</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <span className="text-lg font-semibold text-gray-900">{profileData.email}</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">Official contact for universities and visas.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <span className="text-lg font-semibold text-gray-900">{profileData.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ZONE 2: Preferences & Goals (Simple Forms) */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Test & Language Preferences</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">IELTS Target Band</label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={targetBand}
                  onChange={(e) => setTargetBand(e.target.value)}
                  className="flex-1 p-4 border border-gray-200 rounded-xl text-lg font-semibold focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all"
                  placeholder="7.5"
                />
                <span className="px-4 py-4 text-sm font-medium text-gray-500 bg-gray-50 border border-gray-200 rounded-xl">Overall</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">Used for university shortlisting and visa applications.</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Test Date</label>
              <input
                type="date"
                value={testDate}
                onChange={(e) => setTestDate(e.target.value)}
                className="w-full p-4 border border-gray-200 rounded-xl text-sm font-semibold focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
              <p className="text-xs text-gray-500 mt-2">Academic test required for applications.</p>
            </div>
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-3">Weekly Study Hours</label>
              <input
                type="number"
                value={weeklyHours}
                onChange={(e) => setWeeklyHours(e.target.value)}
                className="w-24 p-4 border border-gray-200 rounded-xl text-lg font-semibold text-center focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                min="0"
                max="60"
              />
              <span className="ml-3 text-sm font-medium text-gray-500">hours per week</span>
              <p className="text-xs text-gray-500 mt-2">Recommended: 25-35 hours for IELTS 7.5+</p>
            </div>
          </div>
        </div>

        {/* ZONE 3: University Targets */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Target Universities</h2>
            <span className="text-sm font-medium text-gray-500">{profileData.universities.length} schools</span>
          </div>
          <div className="space-y-3">
            {profileData.universities.map((uni, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all group">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white text-sm font-semibold flex-shrink-0 group-hover:scale-105 transition-transform">
                    {uni.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm truncate">{uni.name}</p>
                    <p className="text-xs text-gray-500">{uni.status}</p>
                  </div>
                </div>
                <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full group-hover:bg-gray-200 transition-colors">
                  {uni.category}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">
            University list managed by your counsellor. Changes may affect application timelines.
          </p>
          <button 
            onClick={handleRequestUniversityChanges}
            className="w-full mt-6 p-4 border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm transition-all"
          >
            Request University Changes
          </button>
        </div>

        {/* ZONE 4: Security */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Security</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-5 border border-gray-200 rounded-xl hover:shadow-sm transition-all">
              <div>
                <p className="font-semibold text-gray-900">Password</p>
                <p className="text-sm text-gray-500">Last changed 3 months ago</p>
              </div>
              <button 
                onClick={() => setShowPasswordModal(true)}
                className="px-6 py-3 border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:shadow-sm transition-all whitespace-nowrap"
              >
                Update Password
              </button>
            </div>
            <div className="p-5 bg-red-50/80 border border-red-200 rounded-xl hover:shadow-sm transition-all">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-1 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-red-900">Two-Factor Authentication Disabled</p>
                  <p className="text-sm text-red-800 mt-1">Enable 2FA to protect your applications and documents.</p>
                </div>
              </div>
              <button 
                onClick={() => setShow2FAModal(true)}
                className="mt-4 w-full px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all shadow-sm hover:shadow-md"
              >
                Enable 2FA
              </button>
            </div>
          </div>
        </div>

        {/* ZONE 5: Access Control */}
        <div className="pt-8 border-t border-gray-200">
          <div className="bg-gray-900 text-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all">
            <h3 className="text-xl font-bold mb-3">Log Out</h3>
            <p className="text-sm text-gray-300 mb-6 max-w-sm mx-auto leading-relaxed">
              Ends your session. You'll need to log back in to access your applications.
            </p>
            <button 
              onClick={() => setShowLogoutConfirm(true)}
              className="w-full max-w-sm mx-auto px-8 py-4 bg-white text-gray-900 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-200 transition-all"
            >
              Log Out Now
            </button>
          </div>
        </div>
      </div>

      {/* Password Update Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Update Password</h3>
              <button 
                onClick={() => setShowPasswordModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleUpdatePassword} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  placeholder="Enter new password"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-4 border border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  placeholder="Confirm new password"
                  required
                />
              </div>
              {passwordError && (
                <p className="text-red-600 text-sm">{passwordError}</p>
              )}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowPasswordModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2FA Modal */}
      {show2FAModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Enable Two-Factor Authentication</h3>
              <button 
                onClick={() => setShow2FAModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-gray-700">We've sent a verification code to your email.</p>
              <button
                onClick={handleEnable2FA}
                className="w-full px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm"
              >
                I Have the Code
              </button>
              <button
                onClick={() => setShow2FAModal(false)}
                className="w-full px-6 py-3 border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Not Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* University Changes Modal */}
      {showUniversityModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Request University Changes</h3>
              <button 
                onClick={() => setShowUniversityModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="text-center space-y-4">
              <p className="text-gray-700">Your request has been sent to Raj Kumar. Expect a response within 24 hours.</p>
              <button
                onClick={() => setShowUniversityModal(false)}
                className="w-full px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all shadow-sm"
              >
                Request Sent
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Confirm Logout</h3>
              <button 
                onClick={() => setShowLogoutConfirm(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="text-center space-y-4 mb-8">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7" />
                </svg>
              </div>
              <p className="text-lg font-semibold text-gray-900">Are you sure you want to log out?</p>
              <p className="text-sm text-gray-600">You'll need to log back in to access your applications.</p>
            </div>
            <div className="flex gap-3 pt-4">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Stay Signed In
              </button>
              <button
                onClick={handleConfirmLogout}
                className="flex-1 px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all shadow-sm"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileSettings;
