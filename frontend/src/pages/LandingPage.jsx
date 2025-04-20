import { useState } from 'react';
import LandingFeat from '../components/LandingFeat';
import Footer from '../components/Footer';

export default function AssetManagementLanding() {

  


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="flex items-center font-bold text-xl text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                AssetsProManager
              </span>
            </div>
            <div className="flex items-center">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
                onClick={() => document.getElementById('login-section').scrollIntoView({ behavior: 'smooth' })}
              >
                Login 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-16 pb-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Smart Asset Management for Modern Businesses
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Streamline your asset tracking, maintenance, and reporting with our powerful platform.
              </p>
              {/* <div className="flex mb-6 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium shadow-lg"
                  onClick={() => document.getElementById('features-section').scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Features
                </button>
                <button
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-6 py-3 rounded-lg font-medium"
                  onClick={() => document.getElementById('login-section').scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Started
                </button>
              </div> */}
       
       <div className=" md:flex-row md:space-x-4 space-y-4  md:space-y-0 mb-6 ">
  <button
    className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium shadow-lg"
    onClick={() => document.getElementById('features-section').scrollIntoView({ behavior: 'smooth' })}
  >
    Explore Features
  </button>
  <button
    className= "bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-5 py-3 rounded-lg font-medium "
    onClick={() => document.getElementById('login-section').scrollIntoView({ behavior: 'smooth' })}
  >
    Get Started
  </button>
</div>


            </div>
          
          </div>
        </div>
      </div>

      {/* Features Section */}
     <LandingFeat/>

      {/* Footer */}
  <Footer/>
    </div>
  );
}