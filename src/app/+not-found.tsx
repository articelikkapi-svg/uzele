import React from 'react';
import { Link } from 'react-router';

export default function NotFound() {
  return (
    <html>
      <head>
        <title>Not Found</title>
      </head>
      <body className="min-h-screen flex items-center justify-center bg-white text-black">
        <div className="text-center">
          <h1 style={{ fontSize: 48, marginBottom: 8 }}>404</h1>
          <p style={{ marginBottom: 16 }}>Sayfa bulunamadı.</p>
          <Link to="/" style={{ color: '#0ea5a4' }}>Anasayfaya dön</Link>
        </div>
      </body>
    </html>
  );
}
