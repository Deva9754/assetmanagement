import React from 'react'
import { useState } from 'react';

const LandingFeat = () => {
      const [activeTab, setActiveTab] = useState('user');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} login attempted with email: ${email}`);
        setEmail('');
        setPassword('');
      };
  return (
    <><div id="features-section" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-gray-900">Powerful Features for Complete Asset Management</h2>
                  <p className="mt-4 text-xl text-gray-600">Everything you need to track, manage, and optimize your assets</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Feature 1 */ }
                  <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-lg mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Real-time Analytics</h3>
                      <p className="mt-2 text-gray-600">Track asset performance with interactive dashboards and customizable reports.</p>
                  </div>

                  {/* Feature 2 */ }
                  <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-lg mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Financial Tracking</h3>
                      <p className="mt-2 text-gray-600">Monitor depreciation, ROI, and total cost of ownership for all assets.</p>
                  </div>

                  {/* Feature 3 */ }
                  <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-lg mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">Secure Access</h3>
                      <p className="mt-2 text-gray-600">Role-based access control for users and administrators with detailed audit logs.</p>
                  </div>
              </div>
          </div>
      </div><div id="login-section" className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                      <h2 className="text-3xl font-bold text-gray-900">Access Your Account</h2>
                      <p className="mt-4 text-xl text-gray-600">Secure login for administrators and users</p>
                  </div>

                  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                      <div className="flex border-b">
                          <button
                              className={ `w-1/2 py-4 text-center font-medium ${activeTab === 'user' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}` }
                              onClick={ () => setActiveTab('user') }
                          >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                              User Login
                          </button>
                          <button
                              className={ `w-1/2 py-4 text-center font-medium ${activeTab === 'admin' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}` }
                              onClick={ () => setActiveTab('admin') }
                          >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                              Admin Login
                          </button>
                      </div>

                      <div className="p-8">
                          <form onSubmit={ handleSubmit }>
                              <div className="mb-6">
                                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                      Email Address
                                  </label>
                                  <input
                                      id="email"
                                      type="email"
                                      value={ email }
                                      onChange={ (e) => setEmail(e.target.value) }
                                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                      placeholder="your@email.com"
                                      required />
                              </div>
                              <div className="mb-6">
                                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                      Password
                                  </label>
                                  <input
                                      id="password"
                                      type="password"
                                      value={ password }
                                      onChange={ (e) => setPassword(e.target.value) }
                                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                      placeholder="••••••••"
                                      required />
                                  <div className="mt-2 text-right">
                                      <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                                          Forgot password?
                                      </a>
                                  </div>
                              </div>
                              <button
                                  type="submit"
                                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                              >
                                  { activeTab === 'admin' ? 'Admin Login' : 'User Login' }
                              </button>
                          </form>
                      </div>
                  </div>
              </div>
          </div></>

    )
}

export default LandingFeat