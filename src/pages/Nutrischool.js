import React, { useState } from "react";
import Navbar from "../components/NavbarLogin.js";
import bgImage from "../assets/background.png";
import bgHero from "../assets/hero_bg3.png";
import AskCita from "../components/AskCita.js";
import iconNutrischool from "../assets/nutrischool.png";
import iconNutrischool2 from "../assets/nutrischool22.png";
import { Calendar, Clock, User } from "lucide-react";


// Gambar pelatihan
import pelatihan1 from "../assets/pelatihan1.jpg";
import pelatihan2 from "../assets/pelatihan2.jpg";
import pelatihan3 from "../assets/pelatihan3.jpg";
import pelatihan4 from "../assets/pelatihan4.jpg";

// Icon untuk tab aktif
import iconSPPG from "../assets/sppg.png";
import iconGuru from "../assets/guru.png";
import iconKader from "../assets/kader.png";
import bgCard from "../assets/bg_card.png";

// Hero Section
const HeroSection = () => {
  return (
    <div
      className="relative w-full h-80 md:h-[350px] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative flex items-start gap-5 px-10 md:px-20 z-10 mt-6 ml-10">
        <img
          src={iconNutrischool}
          alt="Welcome Icon"
          className="w-28 h-28 md:w-32 md:h-32 object-contain"
        />

        <h1 className="text-[#006D69] font-bold text-lg md:text-3xl leading-tight mt-14">
          <span>NutriSchool</span>
        </h1>

        <img
          src={iconNutrischool2}
          alt="Welcome Icon"
          className="w-12 h-12 md:w-12 md:h-12 object-contain mt-6"
        />
      </div>
    </div>
  );
};


// Data Pelatihan
const trainings = [
  {
    id: 1,
    title: "PELATIHAN HACCP - PART 1",
    date: "Sabtu, 6 September 2025",
    time: "10.00 - 12.00 WIB",
    speaker: "Putri Aurora, S.Gz., M.Sc.",
    image: pelatihan1,
    badge: "Part 1",
  },
  {
    id: 2,
    title: "PELATIHAN HACCP - PART 2",
    date: "Minggu, 7 September 2025",
    time: "10.00 - 12.00 WIB",
    speaker: "Putri Aurora, S.Gz., M.Sc.",
    image: pelatihan2,
    badge: "Part 2",
  },
  {
    id: 3,
    title: "PELATIHAN INOVASI MENU LOKAL",
    date: "Sabtu, 13 September 2025",
    time: "10.00 - 12.00 WIB",
    speaker: "Budi Santoso, S.Gz., M.Gz.",
    image: pelatihan3,
    badge: "",
  },
  {
    id: 4,
    title: "PELATIHAN PENJAMAH MAKANAN",
    date: "Minggu, 14 September 2025",
    time: "10.00 - 12.00 WIB",
    speaker: "Siti Aisyah, S.Gz., M.Gz.",
    image: pelatihan4,
    badge: "",
  },
];

const TrainingCard = ({ training }) => {
  return (
    <div className="relative rounded-2xl shadow-md overflow-hidden w-full h-full">
      {/* Background IMG */}
      <img
        src={bgCard}
        alt="Card Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="relative">
          <img
            src={training.image}
            alt={training.title}
            className="w-full h-36 object-cover"
          />
        </div>

        <div className="p-4">
          <h2 className="font-bold text-gray-800 text-sm mb-3">
            {training.title}
          </h2>

          {/* Info Section dengan jarak antar baris */}
          <div className="flex flex-col space-y-2">
            <p className="text-gray-600 text-xs flex items-center gap-2">
              <Calendar size={16} className="text-yellow-400" />
              {training.date}
            </p>
            <p className="text-gray-600 text-xs flex items-center gap-2">
              <Clock size={16} className="text-yellow-400" />
              {training.time}
            </p>
            <p className="text-gray-600 text-xs flex items-center gap-2">
              <User size={16} className="text-yellow-400" />
              {training.speaker}
            </p>
          </div>
        <button
        className="mt-4 w-40 h-10 mx-auto block bg-gradient-to-r from-[#009B8E] to-[#00C2A8] text-white py-1 rounded-3xl font-semibold text-sm relative"
        style={{
            boxShadow: "inset 0 2px 4px rgba(255, 215, 0, 0.8), inset 0 -2px 4px rgba(0,0,0,0.4)",
        }}
        >
        Lihat Detail
        </button>
        </div>
      </div>
    </div>
  );
};

// Section SPPG
const SPPGSection = () => {
  const [activeTab, setActiveTab] = useState("daring");

  return (
    <div className="bg-white rounded-3xl shadow-md p-6 md:p-10 ">
      {/* Sub Tabs */}
      <div className="flex gap-2 mb-6">
        {["daring", "luring", "sertifikasi"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full font-semibold text-sm ${
              activeTab === tab
                ? "bg-yellow-400 text-gray-800"
                : "bg-white border border-gray-300 text-gray-600"
            }`}
          >
            {tab === "daring"
              ? "Pelatihan Daring"
              : tab === "luring"
              ? "Pelatihan Luring"
              : "Sertifikasi"}
          </button>
        ))}
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {trainings.map((training) => (
          <TrainingCard key={training.id} training={training} />
        ))}
      </div>
    </div>
  );
};

// Main Tabs (SPPG / Guru / Kader)
const MainSection = () => {
  const [activeMainTab, setActiveMainTab] = useState("sppg");

  const mainTabs = [
    { key: "sppg", label: "SPPG", icon: iconSPPG },
    { key: "guru", label: "Guru", icon: iconGuru },
    { key: "kader", label: "Kader", icon: iconKader },
  ];

  return (
    <div className="px-6 md:px-12 mt-10 mt-[-25px]">
      {/* Main Tabs */}
      <div className="px-4 md:px-8">
        <div className="grid grid-cols-3 gap-x-5 w-full">
          {mainTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveMainTab(tab.key)}
              className={`relative flex items-center justify-center py-4 rounded-t-2xl font-bold text-base transition-all duration-200 w-full h-12 ${
                activeMainTab === tab.key
                  ? "bg-[#009B8E] text-white"
                  : "bg-[#FFF5D9] text-[#009B8E]"
              }`}
              style={{
                boxShadow: "inset 0 9px 6px rgba(255,255,255,0.8)", // inner shadow putih
              }}
            >
              {/* Logo di kiri hanya untuk tab aktif */}
              {activeMainTab === tab.key && (
                <img
                  src={tab.icon}
                  alt={`${tab.label} Icon`}
                  className="w-16 h-16 absolute -left-6 top-1/2 transform -translate-y-1/2 rounded-full border-2 border-white bg-[#A0E3E0] shadow-md"
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {activeMainTab === "sppg" && <SPPGSection />}
      {activeMainTab !== "sppg" && (
        <div className="bg-white rounded-3xl shadow-md p-10 text-gray-500 text-center mt-0">
          Konten untuk tab "{activeMainTab}" belum tersedia.
        </div>
      )}
    </div>
  );
};

// Main Page
const Nutrischool = () => {
  return (
    <div
      className="overflow-x-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <HeroSection />
      <Navbar />
      <MainSection />
      <AskCita />
    </div>
  );
};

export default Nutrischool;
