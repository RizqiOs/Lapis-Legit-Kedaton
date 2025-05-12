import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa'; // Ikon "Lihat"

const ProductCard = ({ image, name, details }) => {
  const [showModal, setShowModal] = useState(false);

  // Fungsi untuk membuka modal
  const openModal = () => {
    setShowModal(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Card Produk */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <img src={image} alt={name} className="w-full h-48 object-cover" />

        <div className="p-4 flex items-center justify-center text-xl font-bold">
          {name}
        </div>

        {/* Tombol Lihat */}
        <div className="bg-gray-100 p-2 text-center">
          <button
            onClick={openModal}
            className="bg-amber-700 text-white px-4 py-1 rounded text-sm font-semibold hover:bg-amber-800 transition-colors"
          >
            <FaEye className="inline mr-1" /> Lihat
          </button>
        </div>
      </div>

      {/* Modal untuk menampilkan detail produk */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={closeModal}
          ></div>
          <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">{name}</h2>

            {/* Tabel Daftar Harga */}
            <table className="w-full">
              <tbody>
                {details.map((detail, index) => (
                  <tr key={index}>
                    <td className="px-4 py-2 font-medium text-left">{detail.size}</td>
                    <td className="px-4 py-2 text-right font-medium">{detail.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-4 text-right">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;