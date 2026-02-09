import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MessageCircle,
  Instagram,
  Mail,
  MapPin,
  ChevronDown,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const faqs = [
  {
    question: "Bagaimana cara order?",
    answer: `Anda bisa langsung klik tombol WhatsApp di halaman produk atau hubungi kami melalui WhatsApp di ${siteConfig.contact.whatsappDisplay}. Tim kami akan membantu proses pemesanan Anda.`,
  },
  {
    question: "Berapa lama pengiriman?",
    answer:
      "Pengiriman dilakukan 1-2 hari kerja setelah pembayaran dikonfirmasi. Estimasi sampai tergantung lokasi Anda, biasanya 2-5 hari untuk area Jawa dan 5-7 hari untuk luar Jawa.",
  },
  {
    question: "Apakah bisa return/tukar?",
    answer:
      "Ya, kami menerima return/tukar dalam 7 hari setelah barang diterima dengan kondisi produk masih sealed/belum dipakai. Hubungi customer service kami untuk proses pengembalian.",
  },
  {
    question: "Metode pembayaran apa saja?",
    answer:
      "Kami menerima transfer bank (BCA, Mandiri, BRI), e-wallet (GoPay, OVO, DANA), dan COD untuk area tertentu.",
  },
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Added for form submission state

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Terima kasih! Kami akan segera menghubungi Anda."); // Replaced with translated message
      // Optionally clear form
      (e.target as HTMLFormElement).reset();
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16">
        <div className="container-padding">
          <div className="text-center mb-16">
            <span className="font-sans text-xs tracking-luxury uppercase text-muted-foreground mb-4 block animate-fade-in">
              Hubungi Kami
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in-up">
              Kami Senang <span className="italic">Mendengar</span> dari Anda
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 animate-fade-in-delay-1">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl mb-6">Informasi Kontak</h3>
                <div className="space-y-6">
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="bg-background p-3 rounded-full">
                      <Phone size={20} className="text-sanarea-brown" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg mb-1">WhatsApp</h4>
                      <p className="font-sans text-sm text-muted-foreground">
                        {siteConfig.contact.whatsappDisplay} (Chat Only)
                      </p>
                      <p className="font-sans text-xs text-muted-foreground mt-1">
                        Senin - Jumat, 09.00 - 17.00 WIB
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="bg-background p-3 rounded-full">
                      <Mail size={20} className="text-sanarea-brown" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg mb-1">Email</h4>
                      <p className="font-sans text-sm text-muted-foreground">
                        {siteConfig.contact.email}
                      </p>
                    </div>
                  </a>

                  <a
                    href={siteConfig.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="bg-background p-3 rounded-full">
                      <Instagram size={20} className="text-sanarea-brown" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg mb-1">Instagram</h4>
                      <p className="font-sans text-sm text-muted-foreground">
                        {siteConfig.contact.instagramUsername}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl mb-6">Lokasi</h3>
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/30 p-3 rounded-full">
                    <MapPin size={20} className="text-sanarea-brown" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-1">Office</h4>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      Cianjur, Jawa Barat, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <h3 className="font-serif text-xl mb-6">Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="font-sans text-xs tracking-wider uppercase text-muted-foreground"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-background border border-border rounded-none px-4 py-3 focus:outline-none focus:border-sanarea-brown transition-colors"
                    placeholder="Nama Anda"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="font-sans text-xs tracking-wider uppercase text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-background border border-border rounded-none px-4 py-3 focus:outline-none focus:border-sanarea-brown transition-colors"
                    placeholder="email@contoh.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="font-sans text-xs tracking-wider uppercase text-muted-foreground"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-background border border-border rounded-none px-4 py-3 focus:outline-none focus:border-sanarea-brown transition-colors resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-70"
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-secondary/30">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl">
              Tanya Jawab <span className="italic">(FAQ)</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((item, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg cursor-pointer group"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-serif text-lg">{item.question}</h3>
                  <span className="text-sanarea-brown transform transition-transform duration-300 group-hover:rotate-45">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-sans text-sm text-muted-foreground pt-2 border-t border-border mt-2">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-padding text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-6">
            Masih ada pertanyaan?
          </h2>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <MessageCircle size={18} />
            <span>Chat via WhatsApp</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
