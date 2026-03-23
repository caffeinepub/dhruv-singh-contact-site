import {
  Cake,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { SiX } from "react-icons/si";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-xs"
      data-ocid="header.panel"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Monogram */}
        <span
          className="text-2xl font-extrabold tracking-tight"
          style={{ color: "#2F8E9B" }}
        >
          DS
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["home", "contact", "social", "location"].map((id) => (
            <button
              type="button"
              key={id}
              onClick={() => scrollTo(id)}
              className="relative text-sm font-medium capitalize tracking-wide text-slate-dark hover:text-teal transition-colors group"
              data-ocid={`nav.${id}.link`}
            >
              {id === "home"
                ? "Home"
                : id === "contact"
                  ? "Contact"
                  : id === "social"
                    ? "Social"
                    : "Location"}
              <span
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full transition-all"
                style={{
                  backgroundColor: "#2F8E9B",
                  opacity: id === "home" ? 1 : 0,
                }}
              />
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-slate-dark hover:bg-gray-100 transition"
          onClick={() => setMenuOpen((v) => !v)}
          data-ocid="nav.menu.toggle"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4"
        >
          {["home", "contact", "social", "location"].map((id) => (
            <button
              type="button"
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm font-medium capitalize text-slate-dark hover:text-teal text-left transition-colors"
              data-ocid={`nav.${id}.link`}
            >
              {id === "home"
                ? "Home"
                : id === "contact"
                  ? "Contact"
                  : id === "social"
                    ? "Social"
                    : "Location"}
            </button>
          ))}
        </motion.div>
      )}
    </header>
  );
}

function HeroSection() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1F2A30 0%, #263840 40%, #1a3540 70%, #1F2A30 100%)",
      }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #2F8E9B 0%, transparent 50%), radial-gradient(circle at 80% 20%, #2F8E9B 0%, transparent 40%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-5"
        >
          <p className="text-white/80 text-lg font-medium tracking-widest uppercase">
            Hi, I'm
          </p>
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tight tracking-wide uppercase"
            style={{ color: "#2F8E9B" }}
          >
            DHRUV SINGH.
          </h1>
          <p className="text-white text-xl font-semibold">
            Dedicated Student &amp; Tech Enthusiast.
          </p>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <MapPin size={15} />
            <span>Nehtaur, Bijnor, Uttar Pradesh, India</span>
          </div>
          <div className="mt-2">
            <button
              type="button"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-white text-sm tracking-wide transition-all hover:scale-105 active:scale-95 shadow-lg"
              style={{ backgroundColor: "#2F8E9B" }}
              data-ocid="hero.primary_button"
            >
              Get in Touch
            </button>
          </div>
        </motion.div>

        {/* Right — avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div
            className="w-52 h-52 md:w-64 md:h-64 rounded-full flex items-center justify-center text-6xl md:text-7xl font-extrabold text-white shadow-2xl ring-4"
            style={{
              background: "linear-gradient(135deg, #2F8E9B 0%, #236D78 100%)",
              boxShadow:
                "0 0 0 6px rgba(47,142,155,0.25), 0 20px 60px rgba(0,0,0,0.4)",
            }}
          >
            DS
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface ContactCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  index: number;
  singleLine?: boolean;
}

function ContactCard({
  icon,
  label,
  value,
  href,
  index,
  singleLine,
}: ContactCardProps) {
  const content = (
    <div
      className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-card hover:shadow-lg transition-shadow duration-300 group"
      data-ocid={`contact.item.${index}`}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
        style={{ backgroundColor: "#2F8E9B" }}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "#6B7680" }}
        >
          {label}
        </p>
        <p
          className={`mt-1 text-sm font-medium leading-snug ${singleLine ? "truncate" : "break-all"}`}
          style={{ color: "#1F2A30" }}
        >
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block hover:no-underline">
        {content}
      </a>
    );
  }
  return content;
}

function ContactSection() {
  const cards = [
    {
      icon: <Cake size={22} />,
      label: "Date of Birth",
      value: "09 September 2010",
    },
    {
      icon: <Mail size={22} />,
      label: "Email",
      value: "dhruvsinghdhs999@gmail.com",
      href: "mailto:dhruvsinghdhs999@gmail.com",
    },
    {
      icon: <Phone size={22} />,
      label: "Phone / WhatsApp",
      value: "+91 93680 73935",
      href: "tel:+919368073935",
    },
    {
      icon: <GraduationCap size={22} />,
      label: "School",
      value: "S.M.S. Senior Secondary School, Nehtaur, Bijnor",
      singleLine: true,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-6"
      style={{ backgroundColor: "#F3F5F7" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl font-extrabold uppercase tracking-widest"
            style={{ color: "#1F2A30" }}
          >
            Get in Touch
          </h2>
          <div
            className="mx-auto mt-3 h-1 w-12 rounded-full"
            style={{ backgroundColor: "#2F8E9B" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <ContactCard {...card} index={i + 1} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialSection() {
  return (
    <section id="social" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl font-extrabold uppercase tracking-widest"
            style={{ color: "#1F2A30" }}
          >
            Connect Online
          </h2>
          <div
            className="mx-auto mt-3 h-1 w-12 rounded-full"
            style={{ backgroundColor: "#2F8E9B" }}
          />
        </motion.div>

        <div className="flex justify-center">
          <motion.a
            href="https://x.com/DhruvSingh34967"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-4 group"
            data-ocid="social.x.link"
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-card transition-transform group-hover:scale-105"
              style={{ backgroundColor: "#1F2A30" }}
            >
              <SiX size={36} />
            </div>
            <div className="text-center">
              <p className="font-bold text-base" style={{ color: "#1F2A30" }}>
                @DhruvSingh34967
              </p>
              <p className="text-sm" style={{ color: "#6B7680" }}>
                Follow on X
              </p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section
      id="location"
      className="py-20 px-6"
      style={{ backgroundColor: "#F3F5F7" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl font-extrabold uppercase tracking-widest"
            style={{ color: "#1F2A30" }}
          >
            My Location
          </h2>
          <div
            className="mx-auto mt-3 h-1 w-12 rounded-full"
            style={{ backgroundColor: "#2F8E9B" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl overflow-hidden shadow-card"
        >
          <iframe
            title="Nehtaur location map"
            src="https://maps.google.com/maps?q=Nehtaur,Bijnor,Uttar+Pradesh,India&output=embed"
            width="100%"
            height="400"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            data-ocid="location.map_marker"
          />
        </motion.div>

        <p
          className="text-center mt-4 text-sm font-medium flex items-center justify-center gap-2"
          style={{ color: "#6B7680" }}
        >
          <MapPin size={15} style={{ color: "#2F8E9B" }} />
          Nehtaur, Bijnor, Uttar Pradesh, India — Pin Code: 246733
        </p>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(window.location.hostname);
  return (
    <footer
      className="py-8 px-6 text-center"
      style={{ backgroundColor: "#2F3438" }}
      data-ocid="footer.panel"
    >
      <p className="text-sm" style={{ color: "#C9D0D6" }}>
        © {year} Dhruv Singh. All rights reserved. &nbsp;|&nbsp; Built with ❤️
        using{" "}
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-80 transition-opacity"
          style={{ color: "#2F8E9B" }}
        >
          caffeine.ai
        </a>
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ContactSection />
        <SocialSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
