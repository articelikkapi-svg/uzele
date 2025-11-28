"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <title>Endonezya Kaşifi - Seyahat ve Evlilik Hizmetleri</title>
        <meta
          name="description"
          content="Endonezya'da unutulmaz seyahat ve evlilik deneyimleri"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Endonezya, seyahat, evlilik, düğün, tatil, Bali, Jakarta, turizm"
        />

        {/* Favicon */}
        <link
          rel="icon"
          type="image/x-icon"
          href="https://ucarecdn.com/460a1296-ffdf-4978-b234-cdbe28bfc995/-/format/auto/"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="https://ucarecdn.com/460a1296-ffdf-4978-b234-cdbe28bfc995/-/format/auto/"
        />
        <link
          rel="apple-touch-icon"
          href="https://ucarecdn.com/460a1296-ffdf-4978-b234-cdbe28bfc995/-/format/auto/"
        />
        <link
          rel="icon"
          sizes="192x192"
          href="https://ucarecdn.com/460a1296-ffdf-4978-b234-cdbe28bfc995/-/format/auto/"
        />
        <link
          rel="icon"
          sizes="512x512"
          href="https://ucarecdn.com/460a1296-ffdf-4978-b234-cdbe28bfc995/-/format/auto/"
        />

        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta
          httpEquiv="Referrer-Policy"
          content="strict-origin-when-cross-origin"
        />
        <meta
          httpEquiv="Permissions-Policy"
          content="camera=(), microphone=(), geolocation=()"
        />

        {/* Content Security Policy - updated to allow Anything platform resources */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://cdn.jsdelivr.net/npm/@emailjs/browser@3/ https://api.emailjs.com/ https://cdn./; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn./; font-src 'self' https://fonts.gstatic.com https://cdn./; img-src 'self' data: https: blob:; media-src 'self' https:; object-src 'none'; frame-src 'self' https://www.google.com/recaptcha/ https://www.youtube.com https://www.instagram.com; connect-src 'self' https: https://api.emailjs.com/; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;"
        />

        {/* reCAPTCHA */}
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>

        {/* EmailJS */}
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
        ></script>
        <script type="text/javascript">
          {`
            (function(){
              emailjs.init("4gPu39idFW7kmAtv3"); // Kullanıcının gerçek EmailJS Public Key'i
            })();
          `}
        </script>
      </head>
      <body className="antialiased">
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
