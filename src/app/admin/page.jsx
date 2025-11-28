"use client";

import { useState, useEffect } from "react";
import { Users, Mail, Calendar, Phone, DollarSign, MapPin } from "lucide-react";

export default function AdminPage() {
  const [travelInquiries, setTravelInquiries] = useState([]);
  const [contactMessages, setContactMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("travel");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [travelRes, contactRes] = await Promise.all([
        fetch("/api/admin/travel-inquiries"),
        fetch("/api/admin/contact-messages"),
      ]);

      if (travelRes.ok) {
        const travelData = await travelRes.json();
        setTravelInquiries(travelData.inquiries || []);
      }

      if (contactRes.ok) {
        const contactData = await contactRes.json();
        setContactMessages(contactData.messages || []);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateInquiryStatus = async (id, status) => {
    try {
      const response = await fetch("/api/admin/travel-inquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });

      if (response.ok) {
        fetchData();
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Admin Paneli</h1>
            <a
              href="/"
              className="text-emerald-600 hover:text-emerald-700 font-semibold"
            >
              Ana Sayfaya Dön
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold">
                  Seyahat Talepleri
                </p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {travelInquiries.length}
                </p>
              </div>
              <div className="bg-blue-100 p-4 rounded-full">
                <MapPin className="text-blue-600" size={32} />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-semibold">
                  İletişim Mesajları
                </p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {contactMessages.length}
                </p>
              </div>
              <div className="bg-emerald-100 p-4 rounded-full">
                <Mail className="text-emerald-600" size={32} />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab("travel")}
                className={`px-6 py-4 font-semibold ${
                  activeTab === "travel"
                    ? "text-emerald-600 border-b-2 border-emerald-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Seyahat Talepleri ({travelInquiries.length})
              </button>
              <button
                onClick={() => setActiveTab("contact")}
                className={`px-6 py-4 font-semibold ${
                  activeTab === "contact"
                    ? "text-emerald-600 border-b-2 border-emerald-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                İletişim Mesajları ({contactMessages.length})
              </button>
            </div>
          </div>

          <div className="p-6">
            {activeTab === "travel" && (
              <div className="space-y-6">
                {travelInquiries.length === 0 ? (
                  <p className="text-gray-600 text-center py-8">
                    Henüz seyahat talebi bulunmuyor.
                  </p>
                ) : (
                  travelInquiries.map((inquiry) => (
                    <div
                      key={inquiry.id}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {inquiry.full_name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {formatDate(inquiry.created_at)}
                          </p>
                        </div>
                        <select
                          value={inquiry.status}
                          onChange={(e) =>
                            updateInquiryStatus(inquiry.id, e.target.value)
                          }
                          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                        >
                          <option value="new">Yeni</option>
                          <option value="contacted">İletişime Geçildi</option>
                          <option value="in_progress">İşlemde</option>
                          <option value="completed">Tamamlandı</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center text-gray-600">
                          <Mail size={18} className="mr-2" />
                          <span>{inquiry.email}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Phone size={18} className="mr-2" />
                          <span>{inquiry.phone}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Calendar size={18} className="mr-2" />
                          <span>{inquiry.travel_dates}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users size={18} className="mr-2" />
                          <span>{inquiry.number_of_people} kişi</span>
                        </div>
                      </div>

                      {inquiry.interests && (
                        <div className="mb-2">
                          <span className="font-semibold text-gray-700">
                            İlgi Alanları:
                          </span>
                          <span className="text-gray-600 ml-2">
                            {inquiry.interests}
                          </span>
                        </div>
                      )}

                      {inquiry.budget_range && (
                        <div className="mb-2">
                          <span className="font-semibold text-gray-700">
                            Bütçe:
                          </span>
                          <span className="text-gray-600 ml-2">
                            {inquiry.budget_range}
                          </span>
                        </div>
                      )}

                      {inquiry.additional_details && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                          <p className="font-semibold text-gray-700 mb-2">
                            Ek Detaylar:
                          </p>
                          <p className="text-gray-600">
                            {inquiry.additional_details}
                          </p>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}

            {activeTab === "contact" && (
              <div className="space-y-6">
                {contactMessages.length === 0 ? (
                  <p className="text-gray-600 text-center py-8">
                    Henüz iletişim mesajı bulunmuyor.
                  </p>
                ) : (
                  contactMessages.map((message) => (
                    <div
                      key={message.id}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {message.full_name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {formatDate(message.created_at)}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center text-gray-600">
                          <Mail size={18} className="mr-2" />
                          <span>{message.email}</span>
                        </div>
                        {message.phone && (
                          <div className="flex items-center text-gray-600">
                            <Phone size={18} className="mr-2" />
                            <span>{message.phone}</span>
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
                        <span className="font-semibold text-gray-700">
                          Konu:
                        </span>
                        <span className="text-gray-600 ml-2">
                          {message.subject}
                        </span>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="font-semibold text-gray-700 mb-2">
                          Mesaj:
                        </p>
                        <p className="text-gray-600 whitespace-pre-wrap">
                          {message.message}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
