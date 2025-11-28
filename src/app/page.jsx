"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Plane, Video, MapPin, FileText, Users } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Endonezya'nın Büyüsünü{" "}
                <span className="text-emerald-600">Keşfedin</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Endonezya'nın doğal güzelliklerini keşfetmek, unutulmaz bir
                seyahat deneyimi yaşamak veya hayatınızın en özel gününü burada
                geçirmek için yanınızdayız.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/travel"
                  className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition text-center"
                >
                  Seyahat Planla
                </a>
                <a
                  href="/wedding"
                  className="bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition text-center"
                >
                  Evlilik Hizmetleri
                </a>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop"
                alt="Endonezya Manzarası"
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
              Hizmetlerimiz
            </h2>
            <p className="text-xl text-gray-600">
              Endonezya deneyiminizi unutulmaz kılmak için buradayız
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Wedding Services */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-rose-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Evlilik Hizmetleri
              </h3>
              <p className="text-gray-600 mb-6">
                Endonezya'da evlenmek isteyenler için tüm evrak işlemleri,
                tercümanlık ve organizasyon desteği.
              </p>
              <a
                href="/wedding"
                className="text-emerald-600 font-semibold hover:text-emerald-700 transition"
              >
                Detaylı Bilgi →
              </a>
            </div>

            {/* Travel Planning */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Plane className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Seyahat Planlama
              </h3>
              <p className="text-gray-600 mb-6">
                Kişiselleştirilmiş seyahat planları, rehberlik ve ulaşım desteği
                ile Endonezya'yı keşfedin.
              </p>
              <a
                href="/travel"
                className="text-emerald-600 font-semibold hover:text-emerald-700 transition"
              >
                Plan Oluştur →
              </a>
            </div>

            {/* YouTube Content */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Video className="text-red-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                YouTube İçerikler
              </h3>
              <p className="text-gray-600 mb-6">
                Endonezya'nın doğal güzelliklerini ve kültürünü keşfettiğimiz
                video içeriklerimizi izleyin.
              </p>
              <a
                href="/youtube"
                className="text-emerald-600 font-semibold hover:text-emerald-700 transition"
              >
                Videoları İzle →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Neden Bizi Seçmelisiniz?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-emerald-600" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Yerel Bilgi
              </h3>
              <p className="text-gray-600">
                Endonezya'da yaşıyoruz ve her köşesini biliyoruz
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="text-emerald-600" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Evrak Desteği
              </h3>
              <p className="text-gray-600">
                Tüm resmi işlemlerinizde yanınızdayız
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-emerald-600" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Tercümanlık
              </h3>
              <p className="text-gray-600">
                Türkçe-İndonezce tercümanlık hizmeti
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-emerald-600" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Güvenilir
              </h3>
              <p className="text-gray-600">Müşteri memnuniyeti önceliğimiz</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Hayalinizdeki Endonezya Deneyimi İçin Hazır mısınız?
          </h2>
          <p className="text-xl text-emerald-50 mb-8">
            Seyahat planlamanız veya evlilik organizasyonunuz için hemen bizimle
            iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              İletişime Geç
            </a>
            <a
              href="https://wa.me/905550343852"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-800 transition"
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
