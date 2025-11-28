"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  FileText,
  Languages,
  Car,
  Users,
  Heart,
  CheckCircle,
} from "lucide-react";

export default function WeddingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Endonezya'da <span className="text-rose-600">Evlilik</span>{" "}
                Hizmetleri
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Hayatınızın en özel gününü Endonezya'da geçirmek isteyenler için
                tüm evrak işlemleri, tercümanlık ve organizasyon desteği
                sunuyoruz.
              </p>
              <a
                href="/contact"
                className="inline-block bg-rose-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-rose-700 transition"
              >
                Hemen İletişime Geç
              </a>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&h=600&fit=crop"
                alt="Endonezya'da Nikah Töreni"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sunduğumuz Hizmetler
            </h2>
            <p className="text-xl text-gray-600">
              Evlilik sürecinizde A'dan Z'ye yanınızdayız
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Document Processing */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <FileText className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Evrak İşlemleri
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-emerald-600 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Evlilik belgesi hazırlama</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-emerald-600 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Apostil işlemleri</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-emerald-600 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Resmi kurum başvuruları</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-emerald-600 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Belge takibi</span>
                </li>
              </ul>
            </div>

            {/* Translation Services */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Languages className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Tercümanlık
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-emerald-600 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Aileler arası iletişim aracılığı</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-emerald-600 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Belge çevirisi</span>
                </li>
              </ul>
            </div>

            {/* Transportation */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Car className="text-orange-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ulaşım Desteği
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-emerald-600 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Havalimanı karşılama</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-emerald-600 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Resmi kurumlara ulaşım</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-emerald-600 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Şehir içi transfer</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-emerald-600 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Özel araçla ulaşım</span>
                </li>
              </ul>
            </div>

            {/* Consultation */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Danışmanlık
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-emerald-600 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Evlilik süreci danışmanlığı</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-emerald-600 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Yasal prosedür bilgilendirme</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-emerald-600 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Kültürel adaptasyon desteği</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-emerald-600 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>7/24 iletişim</span>
                </li>
              </ul>
            </div>

            {/* Wedding Planning */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-rose-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Düğün Organizasyonu
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-emerald-600 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Mekan önerileri</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-emerald-600 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Fotoğrafçı koordinasyonu</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-emerald-600 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Konaklama ayarlamaları</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-emerald-600 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Özel etkinlik planlaması</span>
                </li>
              </ul>
            </div>

            {/* Additional Support */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="text-teal-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ek Destekler
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-emerald-600 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Vize işlemleri yardımı</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-emerald-600 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Otel rezervasyonları</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-emerald-600 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Yerel rehberlik</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-emerald-600 mr-2 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Acil durum desteği</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Evlilik Süreci Nasıl İşler?
            </h2>
            <p className="text-xl text-gray-600">
              Adım adım sizinle ilerliyoruz
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  İlk Görüşme
                </h3>
                <p className="text-gray-600">
                  Bizimle iletişime geçin. İhtiyaçlarınızı dinleyelim ve size
                  özel bir plan oluşturalım.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Belge Hazırlığı
                </h3>
                <p className="text-gray-600">
                  Gerekli evrakları hazırlayın. Size detaylı bir liste ve rehber
                  sunuyoruz.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Endonezya'ya Geliş
                </h3>
                <p className="text-gray-600">
                  Sizi havalimanında karşılıyoruz ve konaklama yerinize
                  ulaştırıyoruz.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Resmi İşlemler
                </h3>
                <p className="text-gray-600">
                  Tüm resmi kurumlarda yanınızdayız. Tercümanlık ve evrak takibi
                  yapıyoruz.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                5
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Düğün & Kutlama
                </h3>
                <p className="text-gray-600">
                  İsterseniz düğün organizasyonunuzu da planlıyoruz.
                  Hayalinizdeki günü yaşayın.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                6
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Sonrası Destek
                </h3>
                <p className="text-gray-600">
                  Evlilik sonrası tüm işlemlerinizde de yanınızdayız. Sürekli
                  destek sunuyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Endonezya'da Evlilik Hayalinizi Gerçekleştirin
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Detaylı bilgi almak ve sürecinizi başlatmak için hemen bizimle
            iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-rose-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-rose-700 transition"
            >
              İletişim Formu
            </a>
            <a
              href="https://wa.me/905550343852"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              WhatsApp ile Yaz
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
