"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-emerald-600 p-4 rounded-full">
              <Shield size={48} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Gizlilik Politikası
          </h1>
          <p className="text-xl text-gray-600">
            Kişisel verilerinizin güvenliği bizim için önceliklidir
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Son güncelleme: 26 Kasım 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              Endonezya Kaşifi olarak, kişisel verilerinizin gizliliğini ve
              güvenliğini korumayı taahhüt ediyoruz. Bu gizlilik politikası, web
              sitemizi ziyaret ettiğinizde ve hizmetlerimizi kullandığınızda
              kişisel bilgilerinizi nasıl topladığımızı, kullandığımızı ve
              koruduğumuzu açıklamaktadır.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {/* Data Collection */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FileText className="text-blue-600" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Toplanan Bilgiler
                </h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Web sitemizi kullandığınızda aşağıdaki bilgileri
                  toplayabiliriz:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Ad, soyad ve iletişim bilgileri (e-posta, telefon)</li>
                  <li>Seyahat tercihleri ve ilgi alanları</li>
                  <li>Form gönderimlerinde sağladığınız bilgiler</li>
                  <li>Web sitesi kullanım verileri ve çerezler</li>
                  <li>IP adresi ve tarayıcı bilgileri</li>
                </ul>
              </div>
            </div>

            {/* Data Usage */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <Eye className="text-emerald-600" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Bilgilerin Kullanımı
                </h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>Topladığımız bilgileri şu amaçlarla kullanırız:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Hizmet taleplerinize yanıt vermek ve size özel teklifler
                    sunmak
                  </li>
                  <li>
                    Seyahat planlaması ve evlilik organizasyonu hizmetleri
                    sağlamak
                  </li>
                  <li>İletişim taleplerini yanıtlamak</li>
                  <li>Web sitesi deneyiminizi iyileştirmek</li>
                  <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                  <li>Hizmet kalitemizi artırmak için analiz yapmak</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Lock className="text-purple-600" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Veri Güvenliği
                </h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>Kişisel verilerinizin güvenliğini sağlamak için:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>SSL şifreleme teknolojisi kullanıyoruz</li>
                  <li>Güvenli sunucularda veri saklıyoruz</li>
                  <li>Yetkisiz erişime karşı koruma önlemleri alıyoruz</li>
                  <li>Düzenli güvenlik güncellemeleri yapıyoruz</li>
                  <li>
                    Sadece yetkili personelin verilere erişimini sağlıyoruz
                  </li>
                </ul>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <Shield className="text-orange-600" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Veri Paylaşımı
                </h2>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Kişisel bilgilerinizi üçüncü taraflarla paylaşmıyoruz. Ancak
                  aşağıdaki durumlarda paylaşım gerekebilir:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Yasal zorunluluklar gereği</li>
                  <li>
                    Hizmet sağlayıcılarımızla (sadece hizmet sunumu için gerekli
                    olduğunda)
                  </li>
                  <li>Açık rızanız dahilinde</li>
                </ul>
                <p className="mt-4">
                  Tüm üçüncü taraf hizmet sağlayıcılarımız, verilerinizi korumak
                  için sözleşmesel olarak yükümlüdür.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Çerezler (Cookies)
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Web sitemiz, kullanıcı deneyimini iyileştirmek için çerezler
                  kullanır. Çerezler, tarayıcınız tarafından bilgisayarınızda
                  saklanan küçük metin dosyalarıdır.
                </p>
                <p>Çerezleri şu amaçlarla kullanırız:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Web sitesi tercihlerinizi hatırlamak</li>
                  <li>Site trafiğini analiz etmek</li>
                  <li>Kullanıcı deneyimini kişiselleştirmek</li>
                </ul>
                <p className="mt-4">
                  Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz,
                  ancak bu durumda bazı site özellikleri düzgün çalışmayabilir.
                </p>
              </div>
            </div>

            {/* User Rights */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Haklarınız
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Kişisel verilerinizle ilgili aşağıdaki haklara sahipsiniz:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Verilerinize erişim talep etme</li>
                  <li>Verilerinizin düzeltilmesini isteme</li>
                  <li>Verilerinizin silinmesini talep etme</li>
                  <li>Veri işlemeye itiraz etme</li>
                  <li>Verilerinizin taşınabilirliğini talep etme</li>
                </ul>
                <p className="mt-4">
                  Bu haklarınızı kullanmak için bizimle iletişime
                  geçebilirsiniz:
                  <a
                    href="mailto:uzelemehmet@gmail.com"
                    className="text-emerald-600 hover:text-emerald-700 font-semibold ml-1"
                  >
                    uzelemehmet@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Çocukların Gizliliği
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Hizmetlerimiz 18 yaş altındaki kişilere yönelik değildir.
                  Bilerek 18 yaş altındaki kişilerden kişisel bilgi
                  toplamıyoruz. Eğer bir ebeveyn veya vasi iseniz ve çocuğunuzun
                  bize kişisel bilgi sağladığını fark ederseniz, lütfen bizimle
                  iletişime geçin.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Politika Değişiklikleri
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Önemli
                  değişiklikler olduğunda, web sitemizde duyuru yapacağız.
                  Politikayı düzenli olarak gözden geçirmenizi öneririz.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-emerald-50 p-8 rounded-xl border border-emerald-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                İletişim
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Gizlilik politikamız hakkında sorularınız veya endişeleriniz
                  varsa, lütfen bizimle iletişime geçin:
                </p>
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold">E-posta:</span>
                    <a
                      href="mailto:uzelemehmet@gmail.com"
                      className="text-emerald-600 hover:text-emerald-700 ml-2"
                    >
                      uzelemehmet@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">Telefon:</span>
                    <a
                      href="tel:+905550343852"
                      className="text-emerald-600 hover:text-emerald-700 ml-2"
                    >
                      +90 555 034 3852
                    </a>
                  </p>
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
