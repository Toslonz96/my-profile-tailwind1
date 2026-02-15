import { useState } from "react";
import ContactCard from "../component/contactCard";
import LineQRModal from "../component/LineQRModal";

export default function Contact() {
  const [showQR, setShowQR] = useState(false);

  return (
    <section
      id="contact"
      className="
        min-h-screen
        flex flex-col justify-center
        px-6 py-24
        text-center
        bg-[radial-gradient(circle_at_right_center,rgba(123,124,255,0.35),transparent_60%),radial-gradient(circle_at_left_center,rgba(255,93,162,0.35),transparent_60%)]
      "
    >
      <h1
        className="
          text-4xl md:text-5xl font-bold mb-4
          bg-gradient-to-r
          from-[#ff5fa2]
          to-[#7b8cff]
          bg-clip-text text-transparent
        "
      >
        Contact Me
      </h1>

      <p className="text-gray-600 text-lg mb-16">
        Feel free to reach out through any of the platforms below.
      </p>

      <div
        className="
          grid gap-10
          max-w-6xl
          mx-auto
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        <ContactCard
          icon="📧"
          title="Email"
          value="toto_chutiphat@hotmail.com"
          link="mailto:toto_chutiphat@hotmail.com"
        />

        <ContactCard
          icon="🐙"
          title="GitHub"
          value="Toslonz96"
          link="https://github.com/Toslonz96"
        />

        <ContactCard
          icon="📘"
          title="Facebook"
          value="chutiphat apiwatpaitoon"
          link="https://www.facebook.com/chutiphat.apiwatpaitoon"
        />

        <ContactCard
          icon="💬"
          title="Line"
          value="Scan QR Code"
          onClick={() => setShowQR(true)}
        />
      </div>

      {showQR && <LineQRModal onClose={() => setShowQR(false)} />}
    </section>
  );
}
