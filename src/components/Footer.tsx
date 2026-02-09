import { Link } from "react-router-dom";
import { Instagram, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer className="bg-sanarea-charcoal text-sanarea-cream">
      <div className="container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-luxury uppercase mb-6">
              {siteConfig.brand.name}
            </h2>
            <p className="font-sans text-sm leading-relaxed opacity-70">
              Premium hijab untuk muslimah modern. Keanggunan dalam setiap
              lapisan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs tracking-luxury uppercase mb-6 opacity-50">
              Jelajahi
            </h4>
            <ul className="space-y-3">
              {["Koleksi", "Tentang Kami", "Kontak"].map((item, index) => (
                <li key={item}>
                  <Link
                    to={["/shop", "/about", "/contact"][index]}
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
              {["FAQ", "Cara Order", "Pengiriman", "Pengembalian"].map(
                (item) => (
                  <li key={item}>
                    <span className="font-sans text-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer link-underline">
                      {item}
                    </span>
                  </li>
                ),
              )}
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
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 font-sans text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Phone size={16} />
                  <span>{siteConfig.contact.whatsappDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center space-x-3 font-sans text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Mail size={16} />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 font-sans text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Instagram size={16} />
                  <span>{siteConfig.contact.instagramUsername}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-sanarea-cream/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="font-sans text-xs opacity-50">
              © {new Date().getFullYear()} {siteConfig.brand.name}. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <span className="font-sans text-xs opacity-50 hover:opacity-70 cursor-pointer">
                Kebijakan Privasi
              </span>
              <span className="font-sans text-xs opacity-50 hover:opacity-70 cursor-pointer">
                Syarat & Ketentuan
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
