import React from "react";
import Navbar from "../components/NavbarLogin.js";
import AskCita from "../components/AskCita.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgImage from "../assets/background.png";
import bgHero from "../assets/hero_bg2.png";
import iconWelcome from "../assets/iconWelcome.png";
import sppgIcon from "../assets/sppg.png";
import guruIcon from "../assets/guru.png";
import kaderIcon from "../assets/kader.png";
import playIcon from "../assets/play.png";
import NutriSchool1 from '../assets/NutriSchool1.png';
import NutriSchool2 from '../assets/NutriSchool2.png';
import NutriSchool3 from '../assets/NutriSchool3.png';
import NutriLearn1 from '../assets/NutriLearn1.png';
import NutriLearn2 from '../assets/NutriLearn2.png';
import NutriLearn3 from '../assets/NutriLearn3.png';
import foto1 from "../assets/foto1.png";
import foto2 from "../assets/foto2.png";
import foto3 from "../assets/foto3.png";
import foto4 from "../assets/foto4.png";
import foto5 from "../assets/foto5.png";
import foto6 from "../assets/foto6.png";
import modul1 from "../assets/modul1.png";
import modul2 from "../assets/modul2.png";
import modul3 from "../assets/modul3.png";
import tutorialImg from "../assets/tutorial.png";

const HeroSection = () => {
  return (
    <div className="relative w-full mt-10">
      {/* Background image */}
      <div
        className="w-full h-64 md:h-[350px] flex items-center"
        style={{
          backgroundImage: `url(${bgHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Konten Welcome */}
        <div className="flex items-start gap-4 pl-6 md:pl-20 z-10">
          <img
            src={iconWelcome}
            alt="Welcome Icon"
            className="w-20 h-20 md:w-28 md:h-28 object-contain"
          />
          <h1 className="text-[#006D69] font-bold text-lg md:text-3xl leading-tight mt-6">
            <span>Selamat Datang,</span>
            <span className="block">Sarah !</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

const LearningSection = () => {
  const data = [
    {
      role: "SPPG",
      icon: sppgIcon,
      color: "text-[#04847F]",
      borderColor: "border-[#A0E3E0]",
      bulletColor: "text-[#4DB9B4]",
      boxBorderColor: "border-[#A0E3E0]",
      bgColor: "bg-[#90E1E1]",
      nutriSchoolItems: [
        "Hygiene dan Sanitasi",
        "Perencanaan Menu",
        "Keamanan Pangan",
      ],
      nutriLearnItems: [
        "Dokumen SOP dan Kebijakan",
        "Modul Pembelajaran",
        "Video Pembelajaran",
      ],
      nutriSchoolLogo: NutriSchool1,
      nutriLearnLogo: NutriLearn1,
    },
    {
      role: "GURU",
      icon: guruIcon,
      color: "text-[#04847F]",
      borderColor: "border-[#8ED7A3]",
      bulletColor: "text-[#5EBE79]",
      boxBorderColor: "border-[#8ED7A3]",
      bgColor: "bg-[#A2E0B1]",
      nutriSchoolItems: [
        "Pendidikan Gizi",
        "Pengukuran Antropometri",
        "Pedoman Gizi Seimbang",
      ],
      nutriLearnItems: [
        "Dokumen SOP dan Kebijakan",
        "Modul Pembelajaran",
        "Video Pembelajaran",
      ],
      nutriSchoolLogo: NutriSchool2,
      nutriLearnLogo: NutriLearn2,
    },
    {
      role: "KADER",
      icon: kaderIcon,
      color: "text-[#E2A300]",
      borderColor: "border-[#EED426]",
      bulletColor: "text-[#E7CA08]",
      boxBorderColor: "border-[#EED426]",
      bgColor: "bg-[#F8DF36]",
      nutriSchoolItems: [
        "Pendidikan Gizi",
        "Pengukuran Antropometri",
        "Pedoman Gizi Seimbang",
      ],
      nutriLearnItems: [
        "Dokumen SOP dan Kebijakan",
        "Modul Pembelajaran",
        "Video Pembelajaran",
      ],
      nutriSchoolLogo: NutriSchool3,
      nutriLearnLogo: NutriLearn3,
    },
  ];

  return (
    <section className="relative z-50 p-4 sm:p-6 bg-[#F5F5F5] rounded-lg shadow-sm w-full max-w-2xl mt-[-120px]">
      <h2 className="text-lg font-bold mb-6">Ingin Belajar Apa Hari Ini?</h2>

      <div className="space-y-4">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-stretch bg-white shadow-sm rounded-lg overflow-hidden"
          >
            {/* Kiri: Foto profil + Role + Garis */}
            <div className="flex flex-col items-center justify-center w-full md:w-[100px] bg-white relative p-2">
              <div className={`w-16 h-16 flex items-center justify-center rounded-full ${item.bgColor}`}>
                <img src={item.icon} alt={item.role} className="w-10 h-10 object-contain" />
              </div>
              <span className={`mt-1 font-bold text-sm ${item.color}`}>{item.role}</span>
              <div className={`hidden md:block absolute right-0 top-2 bottom-2 border-r-4 ${item.borderColor}`} />
            </div>

            {/* Kanan: 2 Card */}
            <div className="flex flex-1 flex-col md:flex-row gap-3 p-3 bg-white">
              {/* NutriSchool */}
              <div
                className={`flex-1 border-2 ${item.boxBorderColor} rounded-md p-3 relative bg-[#F8DF36]`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <img src={item.nutriSchoolLogo} alt="NutriSchool Logo" className="w-6 h-6 object-contain" />
                  <div>
                    <h3 className="font-bold text-xs">NutriSchool</h3>
                    <p className="text-[10px] text-gray-700">Pusat Pelatihan dan Sertifikasi</p>
                  </div>
                </div>
                <div className="border-b border-black mb-2"></div>
                <ul className="pl-6 text-[10px] space-y-1">
                  {item.nutriSchoolItems.map((point, i) => (
                    <li key={i} className="flex items-start gap-1">
                      <span className={item.bulletColor}>●</span> {point}
                    </li>
                  ))}
                </ul>
                {item.role === "SPPG" && (
                  <img src={playIcon} alt="play" className="w-4 h-4 absolute bottom-2 right-2" />
                )}
              </div>

              {/* NutriLearn */}
              <div
                className={`flex-1 border-2 ${item.boxBorderColor} rounded-md p-3 relative bg-[#F8DF36]`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <img src={item.nutriLearnLogo} alt="NutriLearn Logo" className="w-6 h-6 object-contain" />
                  <div>
                    <h3 className="font-bold text-xs">NutriLearn</h3>
                    <p className="text-[10px] text-gray-700 italic">Learning Management System</p>
                  </div>
                </div>
                <div className="border-b border-black mb-2"></div>
                <ul className="pl-6 text-[10px] space-y-1">
                  {item.nutriLearnItems.map((point, i) => (
                    <li key={i} className="flex items-start gap-1">
                      <span className={item.bulletColor}>●</span> {point}
                    </li>
                  ))}
                </ul>
                {item.role === "SPPG" && (
                  <img src={playIcon} alt="play" className="w-4 h-4 absolute bottom-2 right-2" />
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

const RightSidebar = () => {
  const ArrowLeft = ({ onClick }) => (
    <div
      onClick={onClick}
      className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-[#009688] cursor-pointer hover:opacity-80 transition"
    />
  );

  const ArrowRight = ({ onClick }) => (
    <div
      onClick={onClick}
      className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[10px] border-l-[#009688] cursor-pointer hover:opacity-80 transition"
    />
  );

  const rekomendasiImages = [foto1, foto2, foto3, foto4, foto5, foto6];

  return (
    <div className="w-full max-w-2xl flex flex-col gap-4 mt-[-40px]">
      {/* Bagian Atas - CitaLab */}
      <div className="bg-[#F5F5F5] rounded-lg shadow">
        <h3 className="bg-[#009688] text-white font-bold text-lg rounded-t px-3 py-2 mb-3">
          CitaLab
        </h3>

        <div className="px-4 pb-4">
          <p className="font-semibold mb-2">Artikel Terbaru</p>
          <div className="flex items-center gap-2 mb-4">
            <ArrowLeft />
            <div className="flex-1 bg-gray-100 border border-black rounded px-2 py-1 text-xs leading-snug">
              Program Makan Bergizi Gratis : Analisis Kritis Transformasi Pendidikan Indonesia Menuju Generasi Emas 2045
            </div>
            <ArrowRight />
          </div>

          <div className="flex items-center gap-2">
            <div className="flex flex-col flex-none leading-tight">
              <span className="font-semibold text-sm">Rekomendasi</span>
              <span className="font-semibold text-sm">Kebijakan</span>
            </div>
            <ArrowLeft />
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 flex-1">
              {rekomendasiImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Rekomendasi ${i + 1}`}
                  className="w-full h-20 object-cover rounded hover:opacity-80 transition"
                />
              ))}
            </div>
            <ArrowRight />
          </div>
        </div>
      </div>

      {/* Bagian Bawah */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* NutriSchool */}
        <div className="bg-[#F5F5F5] rounded-lg shadow">
          <h3 className="bg-[#009688] text-white font-bold text-lg rounded-t px-3 py-2 mb-2">
            NutriSchool
          </h3>
          <div className="p-3 pt-0">
            {[
              "Pelatihan Daring",
              "Pelatihan Luring",
              "Sertifikasi HACCP",
              "Sertifikasi Food Hand."
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center bg-[#FCEFBB] px-2 py-2 mb-2 rounded min-h-[45px]"
              >
                <span className="text-sm">{item}</span>
                <div className="flex items-center gap-1 ml-auto">
                  <span className="text-[10px]">Klik Disini</span>
                  <button className="bg-yellow-400 text-xs h-6 px-2 rounded flex items-center hover:bg-yellow-500 transition">
                    <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-black"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NutriLearn */}
        <div className="bg-[#F5F5F5] rounded-lg shadow">
          <h3 className="bg-[#009688] text-white font-bold text-lg rounded-t px-3 py-2 mb-2">
            NutriLearn
          </h3>
          <div className="p-3 pt-0">
            <p className="font-semibold text-sm mb-2">Modul Pembelajaran</p>
            <div className="flex items-center gap-2 mb-4">
              <ArrowLeft />
              <div className="flex gap-2 overflow-x-auto no-scrollbar">
                {[modul1, modul2, modul3].map((imgSrc, idx) => (
                  <img
                    key={idx}
                    src={imgSrc}
                    alt={`Modul ${idx + 1}`}
                    className="w-18 h-20 object-cover rounded hover:opacity-80 transition"
                  />
                ))}
              </div>
              <ArrowRight />
            </div>

            <p className="font-semibold text-sm mb-2">Video Pembelajaran</p>
            <div className="flex items-center gap-2">
              <ArrowLeft />
              <div className="flex gap-2 overflow-x-auto no-scrollbar">
                <img
                  src={tutorialImg}
                  alt="Tutorial Mencuci Sayuran"
                  className="w-48 h-20 rounded hover:opacity-80 transition"
                />
              </div>
              <ArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AfterLogin = () => {
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
      <div className="flex flex-col lg:flex-row justify-center gap-8 mt-6 px-4">
        {/* Kolom Kiri */}
        <LearningSection />

        {/* Kolom Kanan */}
        <RightSidebar />
      </div>
      <AskCita />
    </div>
  );
};

export default AfterLogin;
