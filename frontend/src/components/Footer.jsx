import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">AssetsProManager</h3>
          <p className="text-gray-400">Comprehensive asset management solutions for modern businesses of all sizes.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Documentation</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>support@assetspromanager.com</li>
            <li>+1 (555) 123-4567</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-gray-400 text-sm text-center">
        <p>© 2025 AssetsProManager. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer