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
  FaChevronLeft,
  FaChevronRight,
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
import imgGaleriUtama from "../assets/galeri1.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png"; 
import galeri1 from "../assets/galeri2.png";
import galeri2 from "../assets/galeri3.png";
import galeri3 from "../assets/galeri4.png"; 
import askCitaRobot from "../assets/askcita.png";

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
      "Pemerintah Fokus Rekrut Masyarakat Miskin dan Ekstrem untuk Pekerja SPPG sebagai Langkah Cegah Kemiskinan",
    image: bgBerita,
    tag: "NutriCita Updates",
  },
  {
    title:
      "Pemerintah Fokus Rekrut Masyarakat Miskin dan Ekstrem untuk Pekerja SPPG sebagai Langkah Cegah Kemiskinan",
    image: bgBerita,
    tag: "NutriCita Updates",
  },
];

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full px-4 py-2 shadow-xl z-50"
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
      className="relative w-full overflow-hidden flex flex-col text-white pt-10"
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
    {
      title: "Program Gizi Berkelanjutan",
      img: card3,
      color: "#FCEFBB",
    },
  ];

  const sliderRef = React.useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true, 
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1, 
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flex flex-col lg:flex-row items-stretch mx-40 my-6 gap-6">
      {/* Kiri */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2">
        {/* Kiri atas - Dashboard Capaian */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex gap-3">
          {/* Kiri - Judul */}
          <div className="w-1/3 flex justify-center items-center h-full">
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
            className="w-1/3 rounded-lg p-3 flex flex-col"
            style={{ color: "#3D3D3D" }}
          >
            <div className="flex-1">
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
                  <p className="font-semibold text-[#04847F]">
                    SPPG <br />
                    yang beroperasi
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-extrabold text-red-600">202</p>
                  <p className="font-semibold text-red-600">
                    SPPG yang <br /> belum beroperasi
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img
                src={petaSPPG}
                alt="Peta SPPG"
                className="max-h-36 object-contain"
              />
            </div>
          </div>

          {/* Kanan - Jumlah Penerima Manfaat */}
          <div
            className="w-1/3 rounded-lg p-3 flex flex-col"
            style={{ color: "#3D3D3D" }}
          >
            <div className="flex-1">
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
            <div className="flex-1 flex items-center justify-center">
              <img
                src={petaPM}
                alt="Peta Penerima Manfaat"
                className="max-h-36 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Kiri bawah - Carousel */}
        <div className="relative flex items-center h-full">
          {/* Panah Kiri */}
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="absolute left-[-4px] z-10 bg-yellow-400 p-2 rounded-full hover:bg-yellow-500"
          >
            <FaChevronLeft />
          </button>

          <div className="w-full px-12">
            <Slider ref={sliderRef} {...sliderSettings}>
              {cards.map((card, idx) => (
                <div key={idx} className="">
                  {" "}
                  {/* px diperbesar agar gap antar-card lebih lega */}
                  <div
                    className="rounded-lg shadow-lg w-[150px] overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                    style={{ backgroundColor: card.color }}
                  >
                    <div
                      className="px-2"
                      style={{ backgroundColor: "#FCEFBB" }}
                    >
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-full h-20 object-contain"
                      />
                    </div>
                    <div className="pb-2 px-2">
                      <p className="text-xs font-semibold line-clamp-2">
                        {card.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Panah Kanan */}
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="absolute right-[-4px] z-10 bg-yellow-400 p-2 rounded-full hover:bg-yellow-500"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Kanan */}
      <div className="w-full lg:w-1/2">
        {/* Judul */}
        <h2
          className="text-lg font-bold text-center mb-4"
          style={{ color: "#3B3B3B" }}
        >
          NutriCita Gallery
        </h2>

        {/* Container isi dengan background */}
        <div
          className="w-full rounded-lg overflow-hidden relative" // relative biar bulatan bisa absolute
          style={{
            background: "linear-gradient(to bottom, #3ecacb, #006D69)", // gradient latar
            boxShadow:
              "0 10px 25px rgba(0, 0, 0, 0.4), inset 0 4px 10px rgba(255,255,255,0.2)",
          }}
        >
          {/* Bulatan kiri bawah */}
          <div
            className="absolute -bottom-40 -left-10 w-64 h-64 rounded-full"
            style={{
              background:
                "radial-gradient(circle at top left, #7BD0A2, #00706C)",
            }}
          ></div>

          {/* Bulatan kanan atas */}
          <div
            className="absolute -top-1 -right-20 w-64 h-64 rounded-full"
            style={{
              background:
                "radial-gradient(circle at top left, #7BD0A2, #007975)",
            }}
          ></div>

          {/* Gambar utama 1:1 */}
          <div className="flex items-center justify-center relative z-10">
            <img
              src={imgGaleriUtama}
              alt="Gambar Galeri Utama"
              className="w-auto h-auto object-cover px-5 pt-5 pb-2"
            />
          </div>

          {/* List zona */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-3 relative z-10">
            {/* Card Zona */}
            <div className="bg-[#8CD9D6] rounded-2xl overflow-hidden flex flex-col">
              <img
                src={galeri1}
                alt="Zona Dokumentasi Historis MBG"
                className="w-full h-auto object-cover px-2 pt-2"
              />
              <div
                className="p-2 text-center font-bold text-sm"
                style={{ color: "#3B3B3B" }}
              >
                Zona Dokumentasi Historis MBG
              </div>
            </div>

            {/* Card Zona */}
            <div className="bg-[#8CD9D6] rounded-2xl overflow-hidden flex flex-col">
              <img
                src={galeri2}
                alt="Zona Jelajah SPPG"
                className="w-full h-auto object-cover px-2 pt-2"
              />
              <div
                className="p-2 text-center font-bold text-sm"
                style={{ color: "#3B3B3B" }}
              >
                Zona Jelajah SPPG
              </div>
            </div>

            {/* Card Zona */}
            <div className="bg-[#8CD9D6] rounded-2xl overflow-hidden flex flex-col">
              <img
                src={galeri3}
                alt="Zona Riset dan Inovasi MBG"
                className="w-full h-auto object-cover px-2 pt-2"
              />
              <div
                className="p-2 text-center font-bold text-sm"
                style={{ color: "#3B3B3B" }}
              >
                Zona Riset dan Inovasi MBG
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AskCitaButton = () => {
  return (
    <button
      className="fixed bottom-6 right-2 p-0 bg-transparent z-50"
      style={{ border: "none" }}
      onClick={() => {
        console.log("AskCita Bot clicked!");
      }}
    >
      <img
        src={askCitaRobot}
        alt="AskCita Bot"
        className="w-48 h-48 object-contain"
      />
    </button>
  );
};

const Homepage = () => {
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

export default Homepage;
