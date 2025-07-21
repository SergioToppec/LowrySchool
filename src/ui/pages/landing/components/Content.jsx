import image from "@/assets/images/image.png";

export default function Content() {
  return (
    <div className="relative flex flex-col md:flex-row items-center bg-gradient-to-r from-[#FEEBDD] to-[#FDE4C5] overflow-hidden px-4 md:px-0 py-12 md:py-0">
      {/* Texto */}
      <div className="w-full md:w-1/2 z-10 px-4 md:px-16 mb-8 md:mb-0">
        <h1 className="text-rojoFuerte text-5xl md:text-6xl font-bold mb-6 md:mb-10 leading-tight">¿Quiénes somos?</h1>
        <h2 className="text-rojoFuerte text-3xl md:text-4xl font-semibold mb-6 md:mb-9">Somos Lowry School</h2>
        <p className="text-gray-800 text-xl md:text-2xl font-medium leading-relaxed">
          Colegio visionario Bilingüe en Cancún, con educación Preescolar (Kinder), Primaria y Secundaria, contamos con instalaciones de la más alta calidad donde utilizamos métodos académicos de vanguardia para formar niños líderes y productivos.
        </p>
      </div>

      {/* Imagen con clip-path */}
      <div
        className="w-full md:w-1/2 h-[400px] md:h-[650px] relative"
        style={{
          clipPath: "polygon(20% 0, 100% 0, 100% 100%, 20% 100%, 0% 50%)",
          WebkitClipPath: "polygon(20% 0, 100% 0, 100% 100%, 20% 100%, 0% 50%)",
        }}
      >
        <img
          src={image}
          alt="Lowry School"
          className="w-full h-full object-cover"
          style={{
            objectPosition: "center top",
          }}
        />
      </div>
    </div>
  );
}
