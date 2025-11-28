"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Globe, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hakkımızda
          </h1>
          <p className="text-xl text-gray-600">
            Endonezya'nın güzelliklerini dünya ile paylaşmak ve sizlere
            unutulmaz deneyimler yaşatmak için buradayız
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div
                style={{
                  maxWidth: "750px",
                  padding: "40px",
                  borderRadius: "20px",
                  background: "rgba(16, 185, 129, 0.1)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  boxShadow:
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                }}
              >
                {/* BAŞLIK */}
                <h1
                  style={{
                    fontSize: "48px",
                    fontWeight: "700",
                    color: "#065f46",
                    margin: "0 0 24px 0",
                    textAlign: "left",
                  }}
                >
                  Hakkımızda
                </h1>
                {/* HERO BAŞLIK */}
                <h2
                  style={{
                    fontSize: "26px",
                    fontWeight: "600",
                    color: "#047857",
                    margin: "0 0 32px 0",
                    lineHeight: "1.4",
                    textAlign: "left",
                  }}
                >
                  Endonezya'da güvenli, organize ve her detayı sizin adınıza
                  üstlenen profesyonel seyahat & evlilik yol arkadaşınız.
                </h2>
                {/* PARAGRAFLAR */}
                <p
                  style={{
                    color: "#374151",
                    fontSize: "18px",
                    lineHeight: "1.7",
                    margin: "0 0 20px 0",
                  }}
                >
                  Endonezya Kaşifi, Endonezya'yı keşfetmek isteyen herkes için
                  güvenilir ve profesyonel bir yol arkadaşıdır. Amacımız,
                  misafirlerimizin bu büyüleyici coğrafyada hem unutulmaz bir
                  seyahat deneyimi yaşamasını hem de tüm süreçlerde kendilerini
                  güvende hissetmelerini sağlamaktır.
                </p>
                <p
                  style={{
                    color: "#374151",
                    fontSize: "18px",
                    lineHeight: "1.7",
                    margin: "0 0 20px 0",
                  }}
                >
                  Seyahat eden misafirlerimize; uçuş planlaması, ulaşım,
                  konaklama, bölge rehberliği ve özel deneyimlere kadar her şey
                  dahil bir hizmet sunuyoruz. Yolculuğunuzun başından sonuna
                  kadar tüm detaylar ekibimiz tarafından yönetilir.
                </p>
                <p
                  style={{
                    color: "#374151",
                    fontSize: "18px",
                    lineHeight: "1.7",
                    margin: "0 0 20px 0",
                  }}
                >
                  Endonezya'da evlenmek isteyen çiftler için ise; evrak
                  işlemleri, düğün planlama, konsept oluşturma, ulaşım,
                  konaklama ve aileler arası iletişim dahil tüm süreci baştan
                  sona biz yönetiyoruz. Çiftler yalnızca hayallerindeki özel ana
                  odaklanır.
                </p>
                <p
                  style={{
                    color: "#374151",
                    fontSize: "18px",
                    lineHeight: "1.7",
                    margin: "0",
                  }}
                >
                  YouTube içeriklerimiz, şeffaf ve güvenilir hizmet
                  anlayışımızın en güçlü referansıdır. Misafirlerimizin
                  kendilerini doğru ellerde hissetmesi için titizlikle
                  çalışıyoruz. Sizin hikâyeniz, bizim sorumluluğumuzdur.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="relative h-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1000&h=800&fit=crop"
                  alt="Havuzlu Villa'da Lüks Tatil"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  style={{
                    filter:
                      "drop-shadow(0 20px 25px rgba(0, 0, 0, 0.3)) drop-shadow(0 10px 10px rgba(0, 0, 0, 0.1))",
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-xl p-4">
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      style={{
                        textShadow:
                          "2px 2px 8px rgba(0, 0, 0, 0.8), 1px 1px 4px rgba(0, 0, 0, 0.6)",
                        filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8))",
                      }}
                    >
                      Havuzlu Villa'da Lüks Tatil
                    </h3>
                    <p
                      className="text-lg text-white"
                      style={{
                        textShadow:
                          "2px 2px 6px rgba(0, 0, 0, 0.7), 1px 1px 3px rgba(0, 0, 0, 0.5)",
                        filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.7))",
                      }}
                    >
                      Özel havuzlu villalarımızda unutulmaz tatil deneyimi
                      yaşayın
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1000&h=800&fit=crop"
                  alt="Endonezya'da Düğün Organizasyonu"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  style={{
                    filter:
                      "drop-shadow(0 20px 25px rgba(0, 0, 0, 0.3)) drop-shadow(0 10px 10px rgba(0, 0, 0, 0.1))",
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-xl p-4">
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      style={{
                        textShadow:
                          "2px 2px 8px rgba(0, 0, 0, 0.8), 1px 1px 4px rgba(0, 0, 0, 0.6)",
                        filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8))",
                      }}
                    >
                      Düğün Organizasyonu
                    </h3>
                    <p
                      className="text-lg text-white"
                      style={{
                        textShadow:
                          "2px 2px 6px rgba(0, 0, 0, 0.7), 1px 1px 3px rgba(0, 0, 0, 0.5)",
                        filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.7))",
                      }}
                    >
                      Hayalinizdeki düğünü Endonezya'nın güzel mekânlarında
                      gerçekleştirin
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Değerlerimiz
            </h2>
            <p className="text-xl text-gray-600">Bizi biz yapan prensipler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-emerald-600" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tutku</h3>
              <p className="text-gray-600">
                Endonezya'ya olan sevgimiz ve tutkumuz her yaptığımız işe yansır
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-blue-600" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deneyim</h3>
              <p className="text-gray-600">
                Yıllardır Endonezya'da yaşıyor ve her köşesini keşfediyoruz
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-purple-600" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Müşteri Odaklı
              </h3>
              <p className="text-gray-600">
                Sizin memnuniyetiniz bizim en büyük başarımız
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="text-orange-600" size={36} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Güvenilirlik
              </h3>
              <p className="text-gray-600">
                Şeffaf ve dürüst hizmet anlayışımızla güveninizi kazanıyoruz
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Misyonumuz</h2>
            <p className="text-xl leading-relaxed">
              Endonezya'nın doğal güzelliklerini, kültürel zenginliklerini ve
              yaşam tarzını dünya ile paylaşarak, insanların bu eşsiz ülkeyi
              keşfetmelerine ve burada unutulmaz anılar biriktirmelerine
              yardımcı olmak. Seyahat ve evlilik süreçlerinde profesyonel destek
              sunarak, hayallerini gerçeğe dönüştürmek.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Bizi Takip Edin
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            YouTube ve Instagram'da Endonezya'nın güzelliklerini keşfedin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.youtube.com/@Endonezyakasifi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              YouTube Kanalımız
            </a>
            <a
              href="https://www.instagram.com/endonezyakasifi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition"
            >
              Instagram Hesabımız
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
