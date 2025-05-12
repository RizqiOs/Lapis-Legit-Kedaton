import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-amber-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Tentang Lapis Legit Kedaton</h1>
          <p className="mt-3 text-lg">Sejak tahun 2005, menghadirkan rasa tradisional yang lezat dan berkualitas.</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Tentang Kami */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-6">Kami Membuat Lapis Legit Terbaik</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed">
              Lapis Legit Kedaton berdiri sejak tahun 2005 dengan tujuan untuk melestarikan kue tradisional Indonesia,
              terutama Lapis Legit yang dikenal sebagai kue kebanggaan masyarakat Nusantara. Setiap lapisan dibuat
              dengan penuh cinta dan ketelitian, menggunakan resep turun temurun yang telah diuji dan disempurnakan.
            </p>
          </div>
        </section>

        {/* Visi & Misi */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-amber-700">Visi</h3>
            <p>
              Menjadi merek lapis legit terpercaya dan terkenal di seluruh Indonesia dengan menjaga cita rasa autentik dan kualitas bahan terbaik.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3 text-amber-700">Misi</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Menggunakan bahan-bahan premium tanpa pengawet buatan.</li>
              <li>Menjaga keaslian resep turun temurun.</li>
              <li>Memberikan pelayanan terbaik kepada pelanggan.</li>
              <li>Mengembangkan bisnis secara berkelanjutan dan profesional.</li>
            </ul>
          </div>
        </section>

        {/* Keunggulan */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Kenapa Memilih Lapis Legit Kedaton?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow text-center">
              <div className="text-4xl text-amber-500 mb-3">🍯</div>
              <h4 className="font-semibold text-lg mb-2">Bahan Berkualitas</h4>
              <p>Kami hanya menggunakan mentega asli, telur segar, dan gula berkualitas tinggi.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow text-center">
              <div className="text-4xl text-amber-500 mb-3">👩‍🍳</div>
              <h4 className="font-semibold text-lg mb-2">Dibuat Secara Tradisional</h4>
              <p>Teknik pemanggangan manual memberikan aroma dan tekstur yang unik.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow text-center">
              <div className="text-4xl text-amber-500 mb-3">📦</div>
              <h4 className="font-semibold text-lg mb-2">Packing Aman & Eksklusif</h4>
              <p>Kemasan menarik dan aman untuk oleh-oleh atau hadiah spesial.</p>
            </div>
          </div>
        </section>

        {/* Tim atau Lokasi (Opsional) */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Dapur Kami</h2>
          <p className="mb-4">
            Produk kami dibuat di dapur bersih dan higienis yang berlokasi di Yogyakarta.
            Proses produksi dilakukan oleh tim ahli yang sudah berpengalaman bertahun-tahun.
          </p>
          <div className="w-full h-64 rounded overflow-hidden shadow-inner">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80 "
              alt="Dapur Lapis Legit Kedaton"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Lapis Legit Kedaton. Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;