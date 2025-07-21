import { useState } from "react";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* Input de correo electrónico con ícono */}
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rojoFuerte"
          />
        </div>

        {/* Input de contraseña con ícono y botón para mostrar/ocultar */}
        <div className="relative">
          <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rojoFuerte"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-rojoFuerte text-white rounded-md hover:bg-rojoFuerte/90 transition"
        >
          Iniciar
        </button>
      </form>

      <p className="mt-4 text-sm text-gray-600">
        ¿No tienes una cuenta?{" "}
        <a href="/register" className="text-rojoFuerte hover:underline">
          Regístrate
        </a>
      </p>
    </div>
  );
}