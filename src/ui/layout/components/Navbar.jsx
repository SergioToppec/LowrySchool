import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaTimes } from "react-icons/fa";
import { FaArrowRightToBracket, FaBars } from "react-icons/fa6";
import LowryLogo from "@/assets/icons/LowrySchoolLogo.svg";

export default function Navbar() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavigation = (path) => {
    setSelected(path);
    navigate(path);
    setIsMenuOpen(false); // Cerrar menú móvil al navegar
  };

  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Alumnos", path: "/alumnos" },
    { name: "Profesores", path: "/profesores" },
    { name: "Grupos", path: "/grupos" },
    { name: "Reportes", path: "/reportes" },
    { name: "Facturas", path: "/facturas" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar para escritorio */}
      <nav
        className={`hidden lg:flex items-center justify-between h-20 px-8 sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? "shadow-lg" : "shadow-md"
        }`}
      >
        {/* Logo */}
        <img
          src={LowryLogo}
          alt="Lowry School"
          className="w-40 cursor-pointer hover:opacity-90 transition-opacity mr-4"
          onClick={() => handleNavigation("/")}
        />

        {/* Menú */}
        <ul className="flex gap-8 text-rojoFuerte font-semibold">
          {menuItems.map((item) => (
            <li key={item.path}>
              <button
                onClick={() => handleNavigation(item.path)}
                className={`relative px-2 py-1 hover:text-rojoFuerte/90 transition-colors ${
                  selected === item.path
                    ? "text-rojoFuerte font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-rojoFuerte after:animate-underline"
                    : "text-rojoFuerte/80"
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 border-l border-rojoFuerte/30 pl-6">
          <FaUserCircle
            size={32}
            className="text-rojoFuerte/80 hover:text-rojoFuerte cursor-pointer transition-colors"
          />
          <div className="flex flex-col text-sm leading-tight">
            <span className="font-semibold text-rojoFuerte">¡Hola!</span>
            <span className="text-gray-600">Identifícate</span>
          </div>
          <button
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-melon text-rojoFuerte rounded-full font-medium hover:bg-melon/90 transition-all hover:shadow-md"
            onClick={() => handleNavigation("/login")}
          >
            <FaArrowRightToBracket />
            Iniciar sesión
          </button>
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 bg-melon text-rojoFuerte rounded-full font-medium hover:bg-melon/90 transition-all"
            onClick={() => handleNavigation("/login")}
          >
            <FaArrowRightToBracket />
          </button>
        </div>
      </nav>

      {/* Navbar móvil */}
      <nav
        className={`lg:hidden sticky top-0 z-50 bg-white ${
          isScrolled ? "shadow-lg" : "shadow-md"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4">
          <img
            src={LowryLogo}
            alt="Lowry School"
            className="w-32 cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => handleNavigation("/")}
          />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-rojoFuerte p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <FaBars size={24} />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sidebar móvil */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] max-w-xs bg-white z-50 shadow-md transition-transform duration-300 transform rounded-br-[160px] flex flex-col ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Encabezado */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <img src={LowryLogo} alt="Lowry School" className="w-32" />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-rojoFuerte p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Menú navegación */}
        <ul className="flex flex-col px-6 py-8 mt-20 space-y-6 text-lg font-semibold text-rojoFuerte">
          {menuItems.map((item) => (
            <li key={item.path}>
              <button
                onClick={() => handleNavigation(item.path)}
                className={`w-full border-b-[1px] border-gray-800 text-left hover:text-rojoFuerte/80 ${
                  selected === item.path ? "text-rojoFuerte font-bold" : ""
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="flex flex-col mt-auto mb-6 p-4 text-sm text-gray-600">
          <div className="flex items-center gap-4 mb-4">
            <FaUserCircle size={50} className="text-rojoFuerte/80" />
            <div>
              <p className="text-xl  font-semibold text-rojoFuerte">¡Hola!</p>
              <p className="text-lg text-gray-600">Identifícate</p>
            </div>
          </div>
          <button
            className="w-auto max-w-44 flex items-center justify-center gap-2 px-4 py-3 bg-melon text-lg text-rojoFuerte rounded-full font-medium hover:bg-melon/90 transition"
            onClick={() => {
              handleNavigation("/login");
              setIsMenuOpen(false);
            }}
          >
            <FaArrowRightToBracket className="font-semibold" />
            Iniciar sesión
          </button>
        </div>
      </div>
    </>
  );
}
