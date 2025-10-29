export default function Footer() {
  return (
    <footer className="bg-[#2b4b54] text-white pt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 px-6">
        {/* Google Map */}
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999100899562!2d2.292292615674049!3d48.85837307928714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdeb6e2f6b7%3A0x8e0e0c6fda34e9f3!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1631561335954!5m2!1sen!2sfr"
          className="w-full h-64 border-0 rounded-lg"
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        {/* Contact + Newsletter */}
        <div className="space-y-3">
          <p>📍 Page when looking at its layout</p>
          <p>📞 Call Now +01 123467890</p>
          <p>📧 demo@gmail.com</p>

          <div className="flex space-x-4 text-xl mt-3">
            <a href="#" className="hover:text-orange-400">🌐</a>
            <a href="#" className="hover:text-orange-400">🐦</a>
            <a href="#" className="hover:text-orange-400">💼</a>
            <a href="#" className="hover:text-orange-400">📷</a>
          </div>

          <div className="flex mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-md text-black focus:outline-none"
            />
            <button className="bg-orange-400 px-4 py-2 rounded-r-md hover:bg-orange-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-300 mt-8 text-sm pb-6">
        <p>Copyright © 2019 All Rights Reserved By. Free HTML Templates</p>
        <p>Distributed By ThemeWagon</p>
      </div>
    </footer>
  );
}
