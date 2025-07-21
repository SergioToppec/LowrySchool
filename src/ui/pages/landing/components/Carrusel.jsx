import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importar íconos
import image1 from "@/assets/images/image1.png";

export default function Carrusel() {
  const images = [image1];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-screen h-[350px]">
      <img
        src={images[currentIndex]}
        alt={`Imagen ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200"
      >
        <FaChevronLeft className="text-gray-600" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-200"
      >
        <FaChevronRight className="text-gray-600" />
      </button>
    </div>
  );
}