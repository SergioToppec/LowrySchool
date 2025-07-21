import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaUser } from "react-icons/fa";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);

    Swal.fire({
      title: "Registro exitoso",
      text: "Tu cuenta ha sido creada correctamente.",
      icon: "success",
      confirmButtonText: "Ir al inicio",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* Input de nombre completo con ícono */}
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="fullName"
            placeholder="Nombre completo"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rojoFuerte"
          />
        </div>

        {/* Input de correo electrónico con ícono */}
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rojoFuerte"
          />
        </div>

        {/* Input de contraseña con ícono y botón para mostrar/ocultar */}
        <div className="relative">
          <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleChange}
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
          Registrar
        </button>
      </form>

      <p className="mt-4 text-sm text-gray-600">
        ¿Ya tienes una cuenta?{" "}
        <a href="/login" className="text-rojoFuerte hover:underline">
          Inicia sesión
        </a>
      </p>
    </div>
  );
}