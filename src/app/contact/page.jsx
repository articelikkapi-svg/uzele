"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  CheckCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  // EmailJS Configuration - Kullanıcının gerçek bilgileri
  const EMAILJS_SERVICE_ID = "service_8tule5k";
  const EMAILJS_TEMPLATE_ID = "template_2n5v9u9";
  const EMAILJS_PUBLIC_KEY = "4gPu39idFW7kmAtv3";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    console.log("Contact form gönderimi başladı:", formData);

    try {
      // Backend API'ye form gönderimi
      console.log("Contact API'ye gönderiliyor...");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Contact API Response status:", response.status);
      const responseData = await response.json();
      console.log("Contact API Response data:", responseData);

      if (!response.ok) {
        throw new Error(responseData.error || "Form gönderiminde hata oluştu");
      }

      console.log(
        "Contact API Success:",
        responseData.message || "Başarıyla kaydedildi",
      );
      // EmailJS kullanarak e-posta gönderimi
      console.log("Contact EmailJS gönderimi başlıyor...");
      if (typeof window !== "undefined" && window.emailjs) {
        const templateParams = {
          from_name: formData.full_name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_name: "Endonezya Kaşifi",
        };

        const emailResult = await window.emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY,
        );

        console.log("Contact EmailJS sonucu:", emailResult);
      } else {
        console.warn("EmailJS yüklenemedi!");
      }

      console.log("Contact form başarıyla gönderildi!");
      setSuccess(true);
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Contact form gönderimi hatası:", err);
      setError(
        err.message ||
          "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz.",
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
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            İletişim
          </h1>
          <p className="text-xl text-gray-600">
            Sorularınız, önerileriniz veya hizmetlerimiz hakkında bilgi almak
            için bizimle iletişime geçin
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                İletişim Bilgileri
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                    <Mail className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      E-posta
                    </h3>
                    <a
                      href="mailto:uzelemehmet@gmail.com"
                      className="text-gray-600 hover:text-emerald-600 transition"
                    >
                      uzelemehmet@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                    <Phone className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Telefon / WhatsApp
                    </h3>
                    <a
                      href="tel:+905550343852"
                      className="text-gray-600 hover:text-emerald-600 transition"
                    >
                      +90 555 034 3852
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                    <MapPin className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Konum</h3>
                    <p className="text-gray-600">Endonezya</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Sosyal Medya
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/endonezyakasifi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition"
                  >
                    <Instagram size={28} />
                  </a>
                  <a
                    href="https://www.youtube.com/@Endonezyakasifi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white p-4 rounded-lg hover:bg-red-700 transition"
                  >
                    <Youtube size={28} />
                  </a>
                </div>
              </div>

              <div className="mt-12 p-6 bg-emerald-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Hızlı İletişim
                </h3>
                <p className="text-gray-600 mb-4">
                  Acil durumlar veya hızlı yanıt gerektiren konular için
                  WhatsApp üzerinden bize ulaşabilirsiniz.
                </p>
                <a
                  href="https://wa.me/905550343852"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  WhatsApp ile Yaz
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Mesaj Gönderin
              </h2>

              {success && (
                <div className="mb-8 p-6 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <div className="flex items-center text-emerald-800">
                    <CheckCircle className="mr-3" size={24} />
                    <div>
                      <p className="font-semibold">
                        Mesajınız başarıyla gönderildi!
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
                className="space-y-6"
              >
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>

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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="+90 555 123 4567"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Konu <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Mesajınızın konusu"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Mesaj <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    placeholder="Mesajınızı buraya yazın..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-emerald-600 text-white py-4 rounded-lg font-semibold hover:bg-emerald-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? "Gönderiliyor..." : "Mesaj Gönder"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Sıkça Sorulan Sorular
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Ne kadar sürede yanıt alırım?
              </h3>
              <p className="text-gray-600">
                Genellikle 24 saat içinde tüm mesajlara yanıt veriyoruz. Acil
                durumlar için WhatsApp üzerinden iletişime geçebilirsiniz.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Hangi dillerde hizmet veriyorsunuz?
              </h3>
              <p className="text-gray-600">
                Türkçe ve İndonezce dillerinde hizmet veriyoruz. Gerektiğinde
                İngilizce iletişim de kurabiliyoruz.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fiyat teklifleri ücretsiz mi?
              </h3>
              <p className="text-gray-600">
                Evet, tüm fiyat teklifleri ve danışmanlık hizmetlerimiz tamamen
                ücretsizdir. Sadece hizmetlerimizden yararlanmaya karar
                verdiğinizde ücretlendirme yapılır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
