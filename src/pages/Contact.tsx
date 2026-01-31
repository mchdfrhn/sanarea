import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageCircle, Instagram, Mail, MapPin, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Bagaimana cara order?",
    answer:
      "Anda bisa langsung klik tombol WhatsApp di halaman produk atau hubungi kami melalui WhatsApp di +62 812 3456 7890. Tim kami akan membantu proses pemesanan Anda.",
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

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-sans text-xs tracking-luxury uppercase text-muted-foreground mb-4 block animate-fade-in">
              Get in Touch
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in-up">
              Contact <span className="italic">Us</span>
            </h1>
            <p className="font-sans text-lg text-muted-foreground animate-fade-in-delay-1">
              Kami selalu siap membantu Anda
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-16 md:pb-24">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-8 text-center group hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-background rounded-full group-hover:bg-sanarea-beige transition-colors">
                <MessageCircle size={24} className="text-sanarea-brown" />
              </div>
              <h3 className="font-serif text-lg mb-2">WhatsApp</h3>
              <p className="font-sans text-sm text-muted-foreground">
                +62 812 3456 7890
              </p>
              <span className="inline-block mt-4 font-sans text-xs tracking-wider uppercase text-sanarea-brown">
                Chat Now →
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/sanarea"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-8 text-center group hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-background rounded-full group-hover:bg-sanarea-beige transition-colors">
                <Instagram size={24} className="text-sanarea-brown" />
              </div>
              <h3 className="font-serif text-lg mb-2">Instagram</h3>
              <p className="font-sans text-sm text-muted-foreground">
                @sanarea
              </p>
              <span className="inline-block mt-4 font-sans text-xs tracking-wider uppercase text-sanarea-brown">
                Follow Us →
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:hello@sanarea.com"
              className="bg-card p-8 text-center group hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-background rounded-full group-hover:bg-sanarea-beige transition-colors">
                <Mail size={24} className="text-sanarea-brown" />
              </div>
              <h3 className="font-serif text-lg mb-2">Email</h3>
              <p className="font-sans text-sm text-muted-foreground">
                hello@sanarea.com
              </p>
              <span className="inline-block mt-4 font-sans text-xs tracking-wider uppercase text-sanarea-brown">
                Send Email →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-secondary/30">
        <div className="container-padding">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-sans text-xs tracking-luxury uppercase text-muted-foreground mb-4 block">
                FAQ
              </span>
              <h2 className="font-serif text-3xl md:text-4xl">
                Pertanyaan <span className="italic">Umum</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-background overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-sans text-base pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index ? "max-h-48" : "max-h-0"
                    }`}
                  >
                    <p className="px-6 pb-6 font-sans text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
            href="https://wa.me/6281234567890"
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
