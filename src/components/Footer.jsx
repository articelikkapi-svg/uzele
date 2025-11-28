import { Instagram, Youtube, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">
              Endonezya Kaşifi
            </h3>
            <p className="text-gray-300 text-sm">
              Endonezya'nın doğal güzelliklerini keşfedin. Seyahat rehberliği ve
              evlilik hizmetleri için yanınızdayız.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-emerald-400 transition"
                >
                  Hakkımızda
                </a>
              </li>
              <li>
                <a
                  href="/wedding"
                  className="text-gray-300 hover:text-emerald-400 transition"
                >
                  Evlilik Hizmetleri
                </a>
              </li>
              <li>
                <a
                  href="/travel"
                  className="text-gray-300 hover:text-emerald-400 transition"
                >
                  Seyahat Planlama
                </a>
              </li>
              <li>
                <a
                  href="/youtube"
                  className="text-gray-300 hover:text-emerald-400 transition"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-emerald-400 transition"
                >
                  İletişim
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-300 hover:text-emerald-400 transition"
                >
                  Gizlilik Politikası
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold text-emerald-400 mb-4">
              İletişim
            </h3>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:uzelemehmet@gmail.com"
                className="flex items-center text-gray-300 hover:text-emerald-400 transition"
              >
                <Mail size={18} className="mr-2" />
                uzelemehmet@gmail.com
              </a>
              <a
                href="tel:+905550343852"
                className="flex items-center text-gray-300 hover:text-emerald-400 transition"
              >
                <Phone size={18} className="mr-2" />
                +90 555 034 3852
              </a>
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://www.instagram.com/endonezyakasifi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-emerald-400 transition"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.youtube.com/@Endonezyakasifi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-emerald-400 transition"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Endonezya Kaşifi. Tüm hakları
            saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
