"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Youtube, Play } from "lucide-react";

export default function YouTubePage() {
  // Gerçek video ID'leri ve başlıkları - kullanıcının YouTube kanalından
  const videos = [
    {
      id: "Jt3crcPmGUc",
      title:
        "Tekneyle Gittik, Savaşın Ortasında Kaldık! 🫡 2. Dünya Savaşı'ndan Maymunların Savaşına 🇮🇩",
    },
    {
      id: "5ICrq1qT6Gc",
      title:
        "Endonezya'da Böyle Bir Yer Olduğuna İnanamayacaksınız! Citumang Maceramız 🌴🇮🇩",
    },
    {
      id: "VZiBxoD3zLA",
      title:
        "ENDONEZYA BANDUNG ŞEHRİNDE BEKLENEN BÜYÜK GÜN GELDİ, 3 AYIN SONUNDA SALİH VE TİNİ'NİN NİKAH TÖRENİ",
    },
    {
      id: "FLCXfirhON4",
      title:
        "Burası Endonezya'nın Gizli Sahili!!! Pangandaran'da Sürprizlerle Dolu Bir Gün",
    },
    {
      id: "mE6NI9EhzZM",
      title: "ENDONEZYA KEŞFİ BAŞLASIN.... BANDUNG CIWIDEY VE RENGANES TURU",
    },
    {
      id: "OiUBcYcFv-c",
      title:
        "Dokunmaya Cesaret Eder Misin? Yogyakarta'nın En Tehlikeli Köşesi!",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section - YouTube Banner Background */}
      <section
        className="pt-24 pb-16 px-4 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://ucarecdn.com/66519904-a8b4-4701-8675-09224c09df6d/-/format/auto/')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="relative">
              {/* Profile Image */}
              <img
                src="https://ucarecdn.com/8ea03339-3259-43d4-b161-8586e8937244/-/format/auto/"
                alt="Endonezya Kaşifi Profil Fotoğrafı"
                className="w-24 h-24 rounded-full border-4 border-white shadow-xl object-cover"
              />
              {/* YouTube Icon Badge */}
              <div className="absolute -bottom-2 -right-2 bg-red-600 p-2 rounded-full shadow-lg">
                <Youtube size={24} className="text-white" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Endonezya'nın Doğal Güzelliklerini{" "}
            <span className="text-red-400">Keşfedin</span>
          </h1>
          <p className="text-xl text-white mb-8 drop-shadow-md max-w-3xl mx-auto">
            Endonezya'nın doğal güzelliklerini, kültürünü ve yaşam tarzını
            keşfettiğimiz videolarımızı izleyin
          </p>
          <a
            href="https://www.youtube.com/@Endonezyakasifi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition shadow-xl"
          >
            Kanalımıza Abone Olun
          </a>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              YouTube İçeriklerimiz
            </h2>
            <p className="text-xl text-gray-600">
              Endonezya maceralarımızı takip edin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="relative aspect-video bg-gray-200">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {video.title}
                  </h3>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 font-semibold hover:text-red-700 transition inline-flex items-center"
                  >
                    <Play size={18} className="mr-2" />
                    YouTube'da İzle
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Info */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Kanalımız Hakkında
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Endonezya Kaşifi YouTube kanalında, Endonezya'nın eşsiz doğal
            güzelliklerini, zengin kültürünü, lezzetli mutfağını ve günlük
            yaşamını sizlerle paylaşıyoruz. Seyahat tavsiyeleri, yerel
            deneyimler ve pratik bilgiler için kanalımıza abone olmayı
            unutmayın!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.youtube.com/@Endonezyakasifi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              Kanalımıza Git
            </a>
            <a
              href="https://www.instagram.com/endonezyakasifi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition"
            >
              Instagram'da Takip Et
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Endonezya Deneyiminizi Planlayın
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Videolarımızda gördüğünüz yerleri keşfetmek ister misiniz? Seyahat
            planlamanız için bizimle iletişime geçin!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/travel"
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition"
            >
              Seyahat Planla
            </a>
            <a
              href="/contact"
              className="bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition"
            >
              İletişime Geç
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
