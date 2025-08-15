import React from "react";
import Navbar from "../components/Navbar.js";
import AskCitaButton from "../components/AskCita.js";

import {
  FaHome,
  FaUser,
  FaCheckCircle,
  FaHeart,
  FaYoutube,
  FaLink,
  FaPhone,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import bgImage from "../assets/background.png";
import bgBerita from "../assets/bg_berita.png";
import petaSPPG from "../assets/peta_sppg.png";
import petaPM from "../assets/peta_penerima_manfaat.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";

const menuItems = [
  { label: "Beranda", icon: <FaHome /> },
  { label: "Profil", icon: <FaUser /> },
  { label: "Informasi Publik", icon: <FaCheckCircle /> },
  { label: "Layanan", icon: <FaHeart /> },
  { label: "Media", icon: <FaYoutube /> },
  { label: "Tautan", icon: <FaLink /> },
  { label: "Kontak", icon: <FaPhone /> },
];

const newsData = [
  {
    title:
      "Pemerintah Fokus Rekrut Masyarakat Miskin dan Ekstrem untuk Pekerja SPPG sebagai Langkah Cegah Kemiskinan",
    image: bgBerita,
    tag: "NutriCita Updates",
    link: "/updates",
  },
  {
    title:
      "Pemerintah Fokus Rekrut Masyarakat Miskin dan Ekstrem untuk Pekerja SPPG sebagai Langkah Cegah Kemiskinan",
    image: bgBerita,
    tag: "NutriCita Updates",
    link: "/updates",
  },
  {
    title:
      "Pemerintah Fokus Rekrut Masyarakat Miskin dan Ekstrem untuk Pekerja SPPG sebagai Langkah Cegah Kemiskinan",
    image: bgBerita,
    tag: "NutriCita Updates",
    link: "/updates",
  },
];

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div
      className="relative w-full overflow-hidden flex flex-col text-white pt-10"
      style={{
        background: "linear-gradient(to right, #00A9A2, #d6f6f3)", // gradient utama
      }}
    >
      {/* Kotak Kiri Bawah */}
      <div
        className="absolute -bottom-10 left-10 w-48 h-48 rounded-2xl"
        style={{
          background: "linear-gradient(to right, #d6f6f3, #03847eff)",
          opacity: 0.4,
        }}
      ></div>

      {/* Kotak Kanan Atas */}
      <div
        className="absolute top-28 right-10 w-48 h-48 rounded-2xl"
        style={{
          background: "linear-gradient(to right, #d6f6f3, #006863ff)",
          opacity: 0.4,
        }}
      ></div>

      <div className="mx-40 my-6 relative z-10">
        {/* Bagian Menu Navigasi */}
        <div className="flex items-center space-x-6 py-3">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-2 cursor-pointer hover:opacity-80"
            >
              <div className="bg-teal-700 text-white rounded-full p-2 text-lg flex items-center justify-center">
                {item.icon}
              </div>
              <span
                className="text-sm font-semibold"
                style={{ color: "#3B3B3B" }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Judul NutriCita Updates */}
        <div className="mt-3">
          <h2 className="text-2xl font-extrabold" style={{ color: "#006763" }}>
            NutriCita Updates
          </h2>
        </div>

        {/* Slider Berita */}
        <div className="mt-6">
          <Slider {...settings}>
            {newsData.map((news, idx) => (
              <div key={idx}>
                <Link to={news.link}>
                  <div
                    className="relative w-full h-64 rounded-lg overflow-hidden flex items-center"
                    style={{
                      backgroundImage: `url(${news.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 flex flex-col justify-center p-6 text-white bg-black/40">
                      <h2 className="text-2xl font-bold leading-snug max-w-lg">
                        {news.title}
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const DashboardSection = () => {
  const cards = [
    {
      title: "Pak Nur Salim, Petani Tangguh Penggerak Ekonomi Lokal lewat MBG",
      img: card1,
      color: "#FCEFBB",
    },
    {
      title: "Gizi Seimbang Anak, Fondasi Menuju Generasi Emas 2045",
      img: card2,
      color: "#FCEFBB",
    },
    {
      title: "Integrasi Edukasi Gizi dalam Kurikulum Sekolah",
      img: card3,
      color: "#FCEFBB",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row items-stretch mx-40 my-6 gap-6">
      {/* Kiri */}
      <div className="flex flex-col gap-6 lg:w-[80%]">
        {/* Kiri atas - Dashboard Capaian */}
        <div
          className="rounded-xl shadow-lg p-10 flex gap-3 h-full"
          style={{ backgroundColor: "#F6FFFE" }}
        >
          {/* Kiri - Judul */}
          <div className="w-[12%] flex justify-center items-center h-full">
            <h2 className="text-start leading-snug text-sm">
              <span className="block text-xl font-extrabold text-[#04847F]">
                Dashboard
              </span>
              <span className="block text-2xl font-extrabold text-[#04847F]">
                Capaian
              </span>
              <span className="block text-4xl font-extrabold text-[#04847F]">
                MBG
              </span>
            </h2>
          </div>

          {/* Tengah - Jumlah SPPG */}
          <div
            className="flex-1 rounded-lg py-3 pl-3 flex flex-col item-center justify-center"
            style={{ color: "#3D3D3D" }}
          >
            <div className="items-center justify-center">
              <h3 className="text-base font-bold text-center mb-2">
                Jumlah SPPG yang Berdiri
              </h3>
              <div className="flex items-center justify-center gap-4 mb-3 text-xs">
                <div className="bg-[#D5F4F1] px-3 py-1 text-center">
                  <p className="font-semibold">Total</p>
                  <p className="text-lg font-extrabold">2.522</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-extrabold text-[#04847F]">2.320</p>
                  <p className="font-semibold text-[#04847F]">Beroperasi</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-extrabold text-red-600">202</p>
                  <p className="font-semibold text-red-600">Belum</p>
                </div>
              </div>
            </div>
            <div className="items-center justify-center">
              <img
                src={petaSPPG}
                alt="Peta SPPG"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Kanan - Jumlah Penerima Manfaat */}
          <div
            className="flex-1 rounded-lg p-3 flex flex-col items-center justify-center"
            style={{ color: "#3D3D3D" }}
          >
            <div className="items-center justify-center">
              <h3 className="text-base font-bold text-center mb-2">
                Jumlah Penerima Manfaat
              </h3>
              <div className="bg-[#D5F4F1] px-3 py-1 text-center mb-3">
                <p className="text-xl font-extrabold">7.663.994</p>
                <p className="text-xs font-semibold text-gray-700">
                  Anak | Ibu Hamil | Menyusui | Balita
                </p>
              </div>
            </div>
            <div className="items-center justify-center">
              <img
                src={petaPM}
                alt="Peta Penerima Manfaat"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Kanan = Card Berita */}
      <div className="flex flex-col gap-4 lg:w-[20%] h-full">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="rounded-lg shadow-lg overflow-hidden bg-[#FCEFBB] flex flex-col hover:scale-[1.02] transition-transform flex-1"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-18 object-cover px-3 pt-3"
            />
            <div className="px-3 pb-3 pt-1">
              <p className="text-sm font-semibold">{card.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const NutricitaUpdates = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center pb-2"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />
      <HeroSection />
      <DashboardSection />
      <AskCitaButton />
    </div>
  );
};

export default NutricitaUpdates;
