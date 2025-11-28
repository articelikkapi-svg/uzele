"use client";

import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-3">
              <img
                src="https://ucarecdn.com/460a1296-ffdf-4978-b234-cdbe28bfc995/-/format/auto/"
                alt="Endonezya Kaşifi Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-2xl font-bold text-emerald-600">
                Endonezya Kaşifi
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="/"
                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-emerald-100 hover:text-emerald-600 transition font-medium"
              >
                Ana Sayfa
              </a>
              <a
                href="/about"
                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-emerald-100 hover:text-emerald-600 transition font-medium"
              >
                Hakkımızda
              </a>
              <a
                href="/wedding"
                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-emerald-100 hover:text-emerald-600 transition font-medium"
              >
                Evlilik Hizmetleri
              </a>
              <a
                href="/travel"
                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-emerald-100 hover:text-emerald-600 transition font-medium"
              >
                Seyahat Planlama
              </a>
              <a
                href="/youtube"
                className="px-4 py-2 rounded-lg text-gray-700 hover:bg-emerald-100 hover:text-emerald-600 transition font-medium"
              >
                YouTube
              </a>
              <a
                href="/contact"
                className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition font-medium"
              >
                İletişim
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <a
                href="/"
                className="block px-4 py-3 text-gray-700 hover:bg-emerald-100 hover:text-emerald-600 rounded-lg transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                Ana Sayfa
              </a>
              <a
                href="/about"
                className="block px-4 py-3 text-gray-700 hover:bg-emerald-100 hover:text-emerald-600 rounded-lg transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                Hakkımızda
              </a>
              <a
                href="/wedding"
                className="block px-4 py-3 text-gray-700 hover:bg-emerald-100 hover:text-emerald-600 rounded-lg transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                Evlilik Hizmetleri
              </a>
              <a
                href="/travel"
                className="block px-4 py-3 text-gray-700 hover:bg-emerald-100 hover:text-emerald-600 rounded-lg transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                Seyahat Planlama
              </a>
              <a
                href="/youtube"
                className="block px-4 py-3 text-gray-700 hover:bg-emerald-100 hover:text-emerald-600 rounded-lg transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                YouTube
              </a>
              <a
                href="/contact"
                className="block px-4 py-3 bg-emerald-600 text-white hover:bg-emerald-700 rounded-lg transition font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                İletişim
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/905550343852"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50 flex items-center justify-center"
        aria-label="WhatsApp ile iletişime geç"
      >
        <MessageCircle size={28} />
      </a>
    </>
  );
}
