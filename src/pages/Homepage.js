import React from "react";
import {
  FaBars,
  FaSearch,
  FaUserCircle,
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
import logo from "../assets/logo.png";   
import bgImage from "../assets/background.png";
import bgHero from "../assets/hero_bg.png";
import bgBerita from "../assets/bg_berita.png"
import petaSPPG from "../assets/peta_sppg.jpg"
import petaPM from "../assets/peta_penerima_manfaat.jpg";

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
  },
  {
    title:
      "",
    image: "https://via.placeholder.com/800x400",
    tag: "",
  },
  {
    title:
      "",
    image: "https://via.placeholder.com/800x400",
    tag: "",
  },
];

const Navbar = () => {
  return (
    <nav
      className="px-4 py-2 shadow-xl"
      style={{
        backgroundColor: "#F8DF36",
        color: "#04847F",
        boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Wrapper isi navbar */}
      <div className="mx-10 flex items-center justify-between rounded-lg">
        {/* Kiri: Menu + Logo */}
        <div className="flex items-center space-x-3">
          <FaBars className="text-2xl cursor-pointer" />
          <img
            src={logo}
            alt="NutriCita Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="font-bold text-3xl">NutriCita</span>
        </div>

        {/* Kanan: Teks slogan + Search bar + Tombol bahasa + User */}
        <div className="flex items-center gap-6">
          <p className="text-2xl italic font-semibold whitespace-nowrap">
            Gizi Merata, Indonesia Sejahtera
          </p>

          <div className="flex items-center bg-white rounded-full px-3 py-1 w-64">
            <FaSearch className="mr-2" style={{ color: "#04847F" }} />
            <input
              type="text"
              placeholder="Cari.."
              className="flex-grow outline-none text-sm"
              style={{ color: "#04847F" }}
            />
          </div>

          <button className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
            ID ▼
          </button>

          <FaUserCircle className="text-white text-3xl cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

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
      className="relative w-full overflow-hidden flex flex-col text-white"
      style={{
        backgroundImage: `url(${bgHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-40 my-6">
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

        {/* Tulisan Berjalan */}
        <div
          className="mt-3 flex items-center rounded"
          style={{ backgroundColor: "#FCEFBB", color: "#3B3B3B" }}
        >
          <div
            className="px-4 py-2 font-bold"
            style={{ backgroundColor: "#F8DF36" }}
          >
            Informasi Terkini
          </div>
          <marquee
            className="px-4 font-semibold text-sm"
            style={{ backgroundColor: "#FCEFBB" }}
          >
            Hingga saat ini, jumlah SPPG yang beroperasi mencapai 2.000+ SPPG |
            Program Makan Bergizi Gratis menjangkau Sekolah Rakyat | Dapur MBG
            Dibangun di Sangatta Utama Kutim dengan Target 3.000 Penerima Per
            Hari
          </marquee>
        </div>

        {/* Slider Berita */}
        <div className="mt-6">
          <Slider {...settings}>
            {newsData.map((news, idx) => (
              <div key={idx}>
                <div
                  className="relative w-full h-64 rounded-lg overflow-hidden flex items-center"
                  style={{
                    backgroundImage: `url(${news.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 flex flex-col justify-center p-6 text-white bg-black/40">
                    <p className="text-sm mb-2">{news.tag}</p>
                    <h2 className="text-2xl font-bold leading-snug max-w-lg">
                      {news.title}
                    </h2>
                  </div>
                </div>
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
      img: "https://via.placeholder.com/200x120",
      color: "#F8DF36",
    },
    {
      title: "Gizi Seimbang Anak, Fondasi Menuju Generasi Emas 2045",
      img: "https://via.placeholder.com/200x120",
      color: "#FFD699",
    },
    {
      title: "Integrasi Edukasi Gizi dalam Kurikulum Sekolah",
      img: "https://via.placeholder.com/200x120",
      color: "#FFF2B2",
    },
    {
      title: "Inovasi Pangan Lokal Tingkatkan Gizi Masyarakat",
      img: "https://via.placeholder.com/200x120",
      color: "#FCEBB2",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row mx-10 my-10 gap-6">
      {/* Kiri */}
      <div className="flex flex-col gap-6 w-full lg:w-2/3">
        {/* Kiri atas - Dashboard Capaian */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex items-stretch gap-6">
          {/* Kiri - Judul */}
          <div className="w-1/4 flex justify-center items-center h-full">
            <h2 className="text-start leading-snug">
              <span className="block text-2xl font-extrabold text-[#04847F]">
                Dashboard
              </span>
              <span className="block text-3xl font-extrabold text-[#04847F]">
                Capaian
              </span>
              <span className="block text-5xl font-extrabold text-[#04847F]">
                MBG
              </span>
            </h2>
          </div>

          {/* Tengah - Jumlah SPPG */}
          <div className="w-1/2 rounded-lg p-4 flex flex-col">
            <div>
              <h3 className="text-lg font-bold text-center mb-2">
                Jumlah SPPG yang Berdiri
              </h3>
              <div className="flex items-center justify-center gap-6 mb-3">
                <div className="bg-[#D5F4F1] px-4 py-2 text-center">
                  <p className="text-sm font-semibold">Total</p>
                  <p className="text-2xl font-extrabold">2.522</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-[#04847F]">
                    2.320
                  </p>
                  <p className="text-xs font-semibold text-[#04847F]">
                    SPPG yang <br /> beroperasi
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-extrabold text-red-600">202</p>
                  <p className="text-xs font-semibold text-red-600">
                    SPPG yang <br /> belum beroperasi
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img
                src={petaSPPG}
                alt="Peta SPPG"
                className="max-h-48 object-contain"
              />
            </div>
          </div>

          {/* Kanan - Jumlah Penerima Manfaat */}
          <div className="w-1/2 rounded-lg p-4 flex flex-col">
            <div>
              <h3 className="text-lg font-bold text-center mb-2">
                Jumlah Penerima Manfaat
              </h3>
              <div className="bg-[#D5F4F1] px-4 py-2 text-center mb-3">
                <p className="text-3xl font-extrabold">7.663.994</p>
                <p className="text-xs font-semibold text-gray-700">
                  Anak Sekolah | Ibu Hamil | Ibu Menyusui | Balita
                </p>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img
                src={petaPM}
                alt="Peta Penerima Manfaat"
                className="max-h-48 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Kiri bawah - Kartu */}
        <div className="flex flex-wrap gap-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-lg shadow-lg w-[200px] overflow-hidden cursor-pointer hover:scale-105 transition-transform"
              style={{ backgroundColor: card.color }}
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-28 object-cover"
              />
              <div className="p-3">
                <p className="text-sm font-semibold">{card.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kanan - NutriCita Gallery */}
      <div className="bg-white rounded-xl shadow-lg p-6 w-full lg:w-1/3">
        <h2 className="text-lg font-bold text-green-800 mb-4">
          NutriCita Gallery
        </h2>
        <div className="bg-gray-200 h-40 flex items-center justify-center mb-4">
          [Gambar Galeri Utama]
        </div>
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-gray-100 p-3 rounded-lg">
            Zona Dokumentasi Historis MBG
          </div>
          <div className="bg-gray-100 p-3 rounded-lg">Zona Jelajah SPPG</div>
          <div className="bg-gray-100 p-3 rounded-lg">
            Zona Riset dan Inovasi MBG
          </div>
        </div>
      </div>
    </div>
  );
};


const AskCitaButton = () => {
  return (
    <button className="fixed bottom-6 right-6 bg-green-700 text-white px-4 py-2 rounded-full shadow-lg">
      🤖 AskCita Bot
    </button>
  );
};

const Homepage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <HeroSection />
      <DashboardSection />
      <AskCitaButton />
    </div>
  );
};

export default Homepage;
