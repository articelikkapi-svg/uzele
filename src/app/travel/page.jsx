"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import {
  Plane,
  MapPin,
  Calendar,
  Users,
  DollarSign,
  CheckCircle,
} from "lucide-react";

export default function TravelPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    travel_dates: "",
    number_of_people: "",
    package_preference: "",
    interests: "",
    budget_range: "",
    additional_details: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  // EmailJS Configuration - Kullanıcının gerçek bilgileri
  const EMAILJS_SERVICE_ID = "service_8tule5k";
  const EMAILJS_TEMPLATE_ID = "template_an057sw";
  const EMAILJS_PUBLIC_KEY = "4gPu39idFW7kmAtv3";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    console.log("Form gönderimi başladı:", formData);

    try {
      // Backend API'ye form gönderimi
      console.log("API'ye gönderiliyor...");
      const response = await fetch("/api/travel-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("API Response status:", response.status);
      const responseData = await response.json();
      console.log("API Response data:", responseData);

      if (!response.ok) {
        throw new Error(responseData.error || "Form gönderiminde hata oluştu");
      }

      console.log(
        "API Success:",
        responseData.message || "Başarıyla kaydedildi",
      );

      // EmailJS kullanarak e-posta gönderimi
      console.log("EmailJS gönderimi başlıyor...");
      if (typeof window !== "undefined" && window.emailjs) {
        const templateParams = {
          from_name: formData.full_name,
          from_email: formData.email,
          phone: formData.phone,
          travel_dates: formData.travel_dates,
          number_of_people: formData.number_of_people,
          package_preference: formData.package_preference,
          interests: formData.interests,
          budget_range: formData.budget_range,
          additional_details: formData.additional_details,
          to_name: "Endonezya Kaşifi",
        };

        const emailResult = await window.emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY,
        );

        console.log("EmailJS sonucu:", emailResult);
      } else {
        console.warn("EmailJS yüklenemedi!");
      }

      console.log("Form başarıyla gönderildi!");
      setSuccess(true);
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        travel_dates: "",
        number_of_people: "",
        package_preference: "",
        interests: "",
        budget_range: "",
        additional_details: "",
      });
    } catch (err) {
      console.error("Form gönderimi hatası:", err);
      setError(
        err.message ||
          "Teklif gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">Seyahat</span> Planlaması
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Endonezya'da unutulmaz bir tatil deneyimi için size özel seyahat
                planı oluşturuyoruz. Formu doldurun, size en uygun teklifi
                sunalım.
              </p>

              <div className="mb-8 p-6 bg-blue-50 rounded-lg">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Profesyonel ekibimizle <strong>ulaşım organizasyonu</strong>,{" "}
                  <strong>konaklama düzenlemeleri</strong>,{" "}
                  <strong>yerel rehberlik hizmetleri</strong> ve{" "}
                  <strong>aktivite planlaması</strong> sunuyoruz. Size özel{" "}
                  <strong>Türkçe bilen asistan tahsisi</strong> ile tatiliniz
                  boyunca hiçbir dil sorunu yaşamayacak, Endonezya'nın büyülü
                  atmosferini sonuna kadar yaşayacaksınız.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop"
                alt="Tropikal Plaj - Endonezya"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seyahat Paketlerimiz
            </h2>
            <p className="text-xl text-gray-600">
              Size özel planlar oluşturuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MapPin className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Rehberli Turlar
              </h3>
              <p className="text-gray-600">
                Yerel rehberlerimiz eşliğinde Endonezya'nın gizli cennetlerini
                keşfedin
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Plane className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ulaşım Organizasyonu
              </h3>
              <p className="text-gray-600">
                Havalimanı transferi, şehir içi ulaşım ve adalar arası seyahat
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Konaklama Desteği
              </h3>
              <p className="text-gray-600">
                Bütçenize uygun otel, villa ve resort rezervasyonları
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Packages Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tatil Paketlerimiz
            </h2>
            <p className="text-xl text-gray-600">
              İhtiyaçlarınıza uygun tatil paketi seçin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ekonomik Paket */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-2xl border-2 border-green-200 hover:border-green-400 transition hover:shadow-xl">
              <div className="text-center mb-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="text-green-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Ekonomik Paket
                </h3>
                <p className="text-gray-600">Bütçe dostu tatil deneyimi</p>
              </div>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-600 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>3 yıldızlı otel konaklaması</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-600 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>1 lokasyon seçeneği</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-600 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Ulaşım</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-600 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>3 öğün yemek dahil</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-600 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Günlük aktiviteler</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-600 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>5 gece 6 gün tatil avantajı</span>
                </li>
              </ul>
            </div>

            {/* Standart Paket */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl shadow-2xl border-2 border-blue-400 hover:border-blue-600 transition relative hover:shadow-xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Popüler
                </span>
              </div>
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Standart Paket
                </h3>
                <p className="text-gray-600">Konforlu tatil deneyimi</p>
              </div>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-blue-600 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>2 farklı lokasyon seçeneği</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-blue-600 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>4 yıldızlı otel konaklaması</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-blue-600 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Konforlu ulaşım</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-blue-600 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>3 öğün yemek seçenekleri</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-blue-600 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Gündüz ve akşam aktiviteleri</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-blue-600 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>9 gece 10 gün tatil avantajı</span>
                </li>
              </ul>
            </div>

            {/* VIP Paket */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-2xl border-2 border-purple-400 hover:border-purple-600 transition hover:shadow-xl">
              <div className="text-center mb-6">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-purple-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  VIP Paket
                </h3>
                <p className="text-gray-600">Lüks tatil deneyimi</p>
              </div>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-purple-600 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>5 yıldızlı otel/villa seçenekleri</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-purple-600 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Havuzlu özel villalar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-purple-600 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>3 farklı lokasyon</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-purple-600 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Özel aktiviteler</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-purple-600 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>7/24 Türkçe bilen asistan</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-purple-600 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Özel araçla ulaşım</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-purple-600 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Fotoğraf ve video kayıtları</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-purple-600 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>Tüm öğünler opsiyonel yemek seçenekleri</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-purple-600 mr-3 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>14 gece 15 gün tatil avantajı</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Hangi paketin size uygun olduğunu öğrenmek için teklif formumuzu
              doldurun
            </p>
            <a
              href="#form"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Teklif Al
            </a>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Fiyat Teklifi Alın
            </h2>
            <p className="text-xl text-gray-600">
              Formu doldurun, 24 saat içinde size özel bir teklif gönderelim
            </p>
          </div>

          {success && (
            <div className="mb-8 p-6 bg-emerald-50 border border-emerald-200 rounded-lg">
              <div className="flex items-center text-emerald-800">
                <CheckCircle className="mr-3" size={24} />
                <div>
                  <p className="font-semibold">
                    Talebiniz başarıyla gönderildi!
                  </p>
                  <p className="text-sm">
                    En kısa sürede sizinle iletişime geçeceğiz.
                  </p>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800">{error}</p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            method="POST"
            action="#"
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Ad Soyad <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Adınız ve soyadınız"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  E-posta <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="ornek@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Telefon <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+90 555 123 4567"
                />
              </div>

              {/* Package Preference */}
              <div className="relative">
                <label className="block text-gray-700 font-semibold mb-2">
                  Tercih Edilen Paket
                </label>
                <select
                  name="package_preference"
                  value={formData.package_preference}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent relative z-10 appearance-none bg-white cursor-pointer"
                >
                  <option value="">Paket Seçiniz</option>
                  <option value="ekonomik">
                    Ekonomik Paket (5 gece 6 gün)
                  </option>
                  <option value="standart">
                    Standart Paket (9 gece 10 gün)
                  </option>
                  <option value="vip">VIP Paket (14 gece 15 gün)</option>
                </select>
                <div className="absolute inset-y-0 right-0 top-8 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>

              {/* Travel Dates */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Seyahat Tarihleri <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="travel_dates"
                  value={formData.travel_dates}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Örn: 15-25 Haziran 2025"
                />
              </div>

              {/* Number of People */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Kişi Sayısı <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="number_of_people"
                  value={formData.number_of_people}
                  onChange={handleChange}
                  required
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Kaç kişi seyahat edecek?"
                />
              </div>

              {/* Interests */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  İlgi Alanları
                </label>
                <input
                  type="text"
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Örn: Plaj, dalış, tapınaklar, doğa yürüyüşü"
                />
              </div>

              {/* Budget Range */}
              <div className="relative">
                <label className="block text-gray-700 font-semibold mb-2">
                  Bütçe Aralığı
                </label>
                <select
                  name="budget_range"
                  value={formData.budget_range}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent relative z-10 appearance-none bg-white cursor-pointer"
                >
                  <option value="">Seçiniz</option>
                  <option value="1500-2000">$1,500 - $2,000 (Kişi başı)</option>
                  <option value="2000-3000">$2,000 - $3,000 (Kişi başı)</option>
                  <option value="3000+">$3,000+ (Kişi başı)</option>
                </select>
                <div className="absolute inset-y-0 right-0 top-8 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>

              {/* Additional Details */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Ek Detaylar
                </label>
                <textarea
                  name="additional_details"
                  value={formData.additional_details}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Özel istekleriniz, sorularınız veya ek bilgiler..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? "Gönderiliyor..." : "Teklif Talebi Gönder"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popüler Destinasyonlar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-[300px] rounded-xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop"
                alt="Bali"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Bali</h3>
                  <p className="text-sm">
                    Tapınaklar, plajlar ve pirinç tarlaları
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] rounded-xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"
                alt="Komodo"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Komodo Adası</h3>
                  <p className="text-sm">Komodo ejderleri ve pembe plajlar</p>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] rounded-xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&h=400&fit=crop"
                alt="Raja Ampat"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Raja Ampat</h3>
                  <p className="text-sm">Dünyanın en zengin mercan resifleri</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
