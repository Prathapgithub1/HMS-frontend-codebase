import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 pt-14 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-semibold text-white tracking-wide">HMS</h2>
          <p className="text-gray-400 mt-3">
            A digital companion for hospitals, helping them treat, manage, and grow with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 cursor-pointer">About</li>
            <li className="hover:text-blue-400 cursor-pointer">Services</li>
            <li className="hover:text-blue-400 cursor-pointer">Doctors</li>
            <li className="hover:text-blue-400 cursor-pointer">Appointments</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 cursor-pointer">Help Center</li>
            <li className="hover:text-blue-400 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-blue-400 cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-blue-400 cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <div className="space-y-3">
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-400" /> +91 98765 43210
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" /> support@hms.com
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-400" /> Hyderabad, Telangana
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600 transition">
              <FaFacebookF />
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600 transition">
              <FaInstagram />
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600 transition">
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} HMS. Crafted with care for better healthcare.
      </div>
    </footer>
  );
};

export default Footer;
