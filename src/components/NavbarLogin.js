import {
  FaBars,
  FaSearch,
} from "react-icons/fa";
import logo from "../assets/logo.png";
import profilePic from "../assets/profile.png";

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
        <span className="font-bold text-3xl text-[#04847F]">NutriCita</span>

        {/* Pembatas lebih rapi */}
        <div className="h-8 border-l-2 border-[#04847F] mx-2"></div>

        <p className="text-lg italic font-semibold whitespace-nowrap text-[#04847F]">
            Gizi Merata, Indonesia Sejahtera
        </p>
        </div>


        {/* Kanan: Teks slogan + Search bar + Tombol bahasa + User */}
        <div className="flex items-center gap-6">

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

            {/* Foto Profil + Nama User */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <img
              src={profilePic}
              alt="User Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="font-semibold text-gray-800">Sarah Fitjani</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;