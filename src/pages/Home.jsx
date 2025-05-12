import React from "react";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

// Import ikon
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { MdLocationOn, MdLocalPhone, MdEmail } from "react-icons/md";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Produk Kami Section */}
      <section className="container mx-auto my-6 px-4 py-8">
        <div className="bg-gray-900 text-white py-4 rounded-t-xl shadow-md">
          <h2 className="text-2xl font-bold text-center">Produk Kami</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-gray-200 p-6 rounded-b-xl shadow-md">
          {/* Cake Marmer */}
          <ProductCard
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0k0KL3ekshJoX40_aGO_E_U6ygnoroxhri-q1qZwBRc--0FdhWbro_RzvrU1whOqtabM&usqp=CAU"
            name="Cake Marmer"
            details={[
              { size: "Diameter : 24 cm", price: "Rp. 75.000" },
              { size: "(24 x 24 x 3 cm)", price: "Rp. 80.000" },
              { size: "(10 x 22 x 3 cm)", price: "Rp. 40.000" },
            ]}
          />

          {/* Bolu Gulung Pelangi */}
          <ProductCard
            image="https://img-global.cpcdn.com/recipes/f089aa328e1da01b/400x400cq70/photo.jpg"
            name="Bolu Gulung Pelangi"
            details={[
              { size: "Diameter : 24 cm", price: "Rp. 70.000" },
              { size: "(24 x 24 x 3 cm)", price: "Rp. 150.000" },
              { size: "(20 x 20 cm)", price: "Rp. 115.000" },
            ]}
          />

          <ProductCard
            image="https://img-global.cpcdn.com/recipes/f089aa328e1da01b/400x400cq70/photo.jpg"
            name="Bolu Gulung Pelangi"
            details={[
              { size: "Diameter : 24 cm", price: "Rp. 70.000" },
              { size: "(24 x 24 x 3 cm)", price: "Rp. 150.000" },
              { size: "(20 x 20 cm)", price: "Rp. 115.000" },
            ]}
          />
        </div>

        <div className="text-center mt-8">
          <Link to="/product">
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
              Lihat Lebih Banyak
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 mt-auto text-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Tentang Kami */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Lapis Legit Kedaton
              </h3>
              <p className="text-gray-400 mb-4">
                Menyediakan berbagai macam kue basah berkualitas, lezat, dan
                terjangkau. Dibuat dengan bahan pilihan dan penuh cinta.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaWhatsapp size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaTiktok size={20} />
                </a>
              </div>
            </div>

            {/* Kontak */}
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold mb-4">Kontak Kami</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <MdLocationOn className="mr-2 mt-1" /> Jl. Raya Kue Nikmat
                  No.123, Jakarta
                </li>
                <li className="flex items-center">
                  <MdLocalPhone className="mr-2" /> +62 812-3456-7890
                </li>
                <li className="flex items-center">
                  <MdEmail className="mr-2" /> toko@toko-kue.id
                </li>
              </ul>
            </div>

            {/* Jam Operasional */}
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold mb-4">Jam Operasional</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <span className="font-medium">Senin - Sabtu:</span> 08:00 -
                  18:00
                </li>
                <li>
                  <span className="font-medium">Minggu:</span> Libur
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Lapis Legit Kedaton. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
