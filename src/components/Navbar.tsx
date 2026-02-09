import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuLinksContainerRef = useRef<HTMLDivElement>(null);

  /* Entry animation removed to fix visibility issues */
  /* useGSAP commented out */

  // Mobile Menu Animation
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      gsap.fromTo(
        menuLinksContainerRef.current?.children || [],
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.2, // increased delay slightly to wait for panel slide
        },
      );
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Koleksi", path: "/shop" },
    { name: "Tentang Kami", path: "/about" },
    { name: "Kontak", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed w-full z-50 transition-all duration-300 border-b ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled || isOpen
            ? "bg-white/80 backdrop-blur-md shadow-sm border-white/20"
            : "bg-transparent border-transparent"
        } ${isScrolled ? "py-4" : "py-6"}`}
      >
        <div className="container-padding">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link ref={logoRef} to="/" className="flex-shrink-0 z-[60]">
              <span className="font-serif text-2xl md:text-3xl font-medium tracking-luxury uppercase text-foreground">
                Sanaréa
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div
              ref={linksContainerRef}
              className="hidden md:flex items-center space-x-12"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-sans text-sm tracking-premium uppercase transition-opacity duration-300 link-underline ${
                    isActive(link.path)
                      ? "opacity-100"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div ref={ctaRef} className="hidden md:flex items-center space-x-6">
              <Link
                to="/shop"
                className="flex items-center space-x-2 text-sm font-sans tracking-wider uppercase opacity-80 hover:opacity-100 transition-opacity"
              >
                <ShoppingBag size={18} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 z-[60] relative text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        ref={menuRef}
        className={`md:hidden fixed inset-0 top-0 bg-white/80 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ paddingTop: "100px" }}
      >
        <div
          ref={menuLinksContainerRef}
          className="flex flex-col items-center justify-start h-full space-y-6 px-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`font-serif text-2xl tracking-wide transition-opacity py-2 ${
                isActive(link.path)
                  ? "opacity-100 border-b-2 border-foreground"
                  : "opacity-0 hover:opacity-100"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8 w-full flex justify-center">
            <Link
              to="/shop"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full max-w-xs text-center"
            >
              Belanja Sekarang
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
