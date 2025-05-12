import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Hubungi Kami</h1>
          <p className="mt-2">Silakan isi form atau kunjungi kantor kami.</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Kirim Pesan</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Nama Anda"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email Anda"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tulis pesan Anda..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Lokasi Kami</h2>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
              {/* Ganti src dengan link Google Maps Embed sesuai lokasi Anda */}
              <iframe
                title="Google Maps Lokasi"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://www.google.com/maps/embed?pb= !1m18!1m12!1m3!1d3966.965112716257!2d106.82821691431275!3d-6.120147262178174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e891b7aaaf%3A0x30abe9cde59a7adb!2sMonas%2C%20Jakarta!5e0!3m2!1sid!2sid!4v1698762949001!5m2!1sid!2sid"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Lapis Legit Kedaton. Semua Hak Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;