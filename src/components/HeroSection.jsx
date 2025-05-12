// src/components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url("https://asset.kompas.com/crops/yQCTmtzJX0IXwuOxuDVnLYePOBU=/0x30:1000x697/1200x800/data/photo/2024/01/27/65b3fabed069b.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-4xl font-bold mb-4">SELAMAT DATANG DI LAPIS LEGIT KEDATON</h1>
        <button className="bg-black text-white px-6 py-3 rounded-md mt-4 hover:bg-gray-800">
          Pesan Sekarang
        </button>
      </div>
    </section>
  );
};

export default HeroSection;