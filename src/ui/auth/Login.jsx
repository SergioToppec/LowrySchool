import LowryLogo from "@/assets/icons/LowrySchoolLogo.svg";
import LoginForm from "@/modules/auth/LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF8F7] px-4">
      {/* Diseño para pantallas grandes */}
      <div className="hidden lg:flex w-full max-w-5xl h-[550px] rounded-xl overflow-hidden shadow-lg bg-amarillo">
        {/* Sección izquierda (Logo) */}
        <div className="w-1/2 flex items-center justify-center">
          <img src={LowryLogo} alt="Lowry School Logo" className="w-72" />
        </div>

        {/* Sección derecha (Formulario con curva) */}
        <div className=" bg-melon flex flex-1 flex-col items-center justify-center rounded-tl-[100px]">
          <h2 className="text-rojoFuerte text-2xl font-semibold mb-6 ">Inicio de sesión</h2>
          <LoginForm />
        </div>
      </div>

      {/* Diseño para móviles */}
      <div className="flex lg:hidden w-full max-w-md h-auto flex-col rounded-xl overflow-hidden shadow-lg bg-[#FEEBDD] p-6">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={LowryLogo} alt="Lowry School Logo" className="w-32" />
        </div>

        {/* Formulario */}
        <h2 className="text-rojoFuerte text-2xl font-semibold text-center mb-6">Inicio de sesión</h2>
        <LoginForm />
      </div>
    </div>
  );
}