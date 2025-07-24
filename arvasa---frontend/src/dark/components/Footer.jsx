import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div
      className="hidden md:block w-full px-4 pb-12 flex flex-col gap-12 items-center"
      style={{
        background: 'linear-gradient(to right, #A82E4F, #8C2841)',
      }}
    >
      <footer className="grid mx-auto p-[50px] grid-cols-[repeat(auto-fit,_minmax(200px,_2fr))] place-items-center md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl px-4">
        {/* Logo & Text */}
        <div className="flex flex-col items-start gap-6">
          <a href="#" className="flex flex-col sm:flex-row items-center gap-2">
            <img src="/images/logo_shape.png" className="w-24" alt="logo" />
            <img src="/images/logo_text.png" className="w-32" alt="text logo" />
          </a>
          <p className="text-white font-semibold text-sm sm:text-base">
            Empowering individuals to own, lease, and monetize real estate through innovation and transparency.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4 relative">
          <h1 className="text-white font-bold text-lg">Quick links</h1>
          <span className="bg-[#D4AF37] w-1/2 h-[5px] absolute top-7"></span>
          <Link to={"/"} className="text-white text-sm hover:text-gray-300">Home</Link>
          <Link to={"/about"} className="text-white text-sm hover:text-gray-300">About us</Link>
          <Link to={"services"} className="text-white text-sm hover:text-gray-300">Services</Link>
          <Link to={"/about"} className="text-white text-sm hover:text-gray-300">Our team</Link>
        </div>

        {/* Privacy & Terms */}
        <div className="flex flex-col gap-4 relative">
          <h1 className="text-white font-bold text-lg">Privacy & terms</h1>
          <span className="bg-[#D4AF37] w-1/2 h-[5px] absolute top-7"></span>
          <Link to={"/termsandconditions"} className="text-white text-sm hover:text-gray-300">Terms and Conditions</Link>
          <Link to={"/privacypolicy"} className="text-white text-sm hover:text-gray-300">Privacy Policy</Link>
          <Link to={"/refundpolicy"} className="text-white text-sm hover:text-gray-300">Refund and Cancellation Policy</Link>
          <Link to={"/securitypolicy"} className="text-white text-sm hover:text-gray-300">Security</Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4 relative">
          <h1 className="text-white font-bold text-lg">Contact us</h1>
          <span className="bg-[#D4AF37] w-1/3 h-[5px] absolute top-7"></span>
          <p className="text-white text-sm">3 Flr, off Windsar Sq Opp,</p>
          <p className="text-white text-sm">Vishal Megamart Kolar Rd, Kolar Road,</p>
          <p className="text-white text-sm">Huzur, Bhopal- 462042, Madhya Pradesh.
          </p>
          <a className="text-white text-sm hover:text-gray-300" href="#">theaarvasa@gmail.com</a>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 text-center text-white text-sm px-4">
        <p>© Aarvasa Innovations Pvt. Ltd.
          | All rights reserved</p>
        <p>GSTIN - 23AAKCT9224E1ZD</p>
        <p>CIN - U68200MP2025PTC076282</p>
      </div>
    </div>
  );
};

export default Footer;
