import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-sanarea-charcoal text-sanarea-cream">
      <div className="container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src={logo}
              alt="SANARÉA"
              className="h-8 w-auto mb-6 brightness-0 invert"
            />
            <p className="font-sans text-sm leading-relaxed opacity-70">
              Premium hijab untuk muslimah modern. Keanggunan dalam setiap
              lapisan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs tracking-luxury uppercase mb-6 opacity-50">
              Explore
            </h4>
            <ul className="space-y-3">
              {["Shop", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="font-sans text-sm opacity-70 hover:opacity-100 transition-opacity link-underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-luxury uppercase mb-6 opacity-50">
              Bantuan
            </h4>
            <ul className="space-y-3">
              {["FAQ", "Cara Order", "Pengiriman", "Pengembalian"].map((item) => (
                <li key={item}>
                  <span className="font-sans text-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer link-underline">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-luxury uppercase mb-6 opacity-50">
              Hubungi Kami
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 font-sans text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Phone size={16} />
                  <span>+62 812 3456 7890</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@sanarea.com"
                  className="flex items-center space-x-3 font-sans text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Mail size={16} />
                  <span>hello@sanarea.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/sanarea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 font-sans text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Instagram size={16} />
                  <span>@sanarea</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-sanarea-cream/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="font-sans text-xs opacity-50">
              © 2025 SANARÉA. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <span className="font-sans text-xs opacity-50 hover:opacity-70 cursor-pointer">
                Privacy Policy
              </span>
              <span className="font-sans text-xs opacity-50 hover:opacity-70 cursor-pointer">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
