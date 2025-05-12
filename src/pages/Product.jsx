// src/pages/Product.js
import React from "react";
import ProductCard from "../components/ProductCard";

// Import ikon dari react-icons
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdLocalPhone } from "react-icons/md";

const products = [
  {
    id: 1,
    name: "Cake Marmer",
    image:
      "https://via.placeholder.com/400x300?text=Cake+Marmer ", // Ganti dengan gambar asli nanti
    details: [
      { size: "Diameter : 24 cm", price: "Rp. 75.000" },
      { size: "(24 x 24 x 3 cm)", price: "Rp. 80.000" },
      { size: "(10 x 22 x 3 cm)", price: "Rp. 40.000" },
    ],
  },
  {
    id: 2,
    name: "Bolu Gulung Pelangi",
    image:
      "https://via.placeholder.com/400x300?text=Bolu+Gulung+Pelangi ", // Ganti dengan gambar asli nanti
    details: [
      { size: "Diameter : 24 cm", price: "Rp. 70.000" },
      { size: "(24 x 24 x 3 cm)", price: "Rp. 150.000" },
      { size: "(20 x 20 cm)", price: "Rp. 115.000" },
    ],
  },
];

const Product = () => {
  // Nomor WhatsApp kamu
  const whatsappNumber = "6285695494895"; // Ganti dengan nomor WhatsApp toko

  // Pesan default (opsional)
  const defaultMessage = "Halo! Saya tertarik dengan kue Anda.";
  const encodedMessage = encodeURIComponent(defaultMessage);
  const whatsappLink = `https://wa.me/ ${whatsappNumber}?text=${encodedMessage}`;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="mb-8 bg-gray-800 text-white p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-center">PRODUK</h1>
        <p className="text-xl font-semibold text-center text-gray-300 mt-2">
          Kue Basah
        </p>
      </header>

      {/* Grid Produk */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 mt-auto text-center">
        {/* Bagian Utama Footer */}
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Tentang Kami */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Toko Kue Enak</h3>
              <p className="text-gray-400 mb-4">
                Menyediakan berbagai macam kue basah berkualitas, lezat, dan terjangkau.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaFacebookF size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaTiktok size={20} />
                </a>
              </div>
            </div>

            {/* Kontak */}
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold mb-4">Kontak Kami</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <MdLocationOn className="mr-2 mt-1" /> Jl. Raya Kue Nikmat No.123, Jakarta
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
                  <span className="font-medium">Senin - Sabtu:</span> 08:00 - 18:00
                </li>
                <li>
                  <span className="font-medium">Minggu:</span> Libur
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Lapis Legit Kedaton. All rights reserved.
        </div>
      </footer>

      {/* Tombol WhatsApp Tetap di Kanan Bawah Layar */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
        aria-label="Hubungi kami via WhatsApp"
      >
        <FaWhatsapp size={30} />
      </a>
    </div>
  );
};

export default Product;