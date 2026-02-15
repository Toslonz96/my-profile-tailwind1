import { Link } from "react-router-dom";
import profile from "../images/studens.jpg";

export default function Home() {
  return (
    <section
      className="
      relative
      overflow-hidden
      min-h-[calc(100vh-80px)]
      grid
      lg:grid-cols-[1fr_1.2fr]
      items-center
      px-6 lg:px-20
      bg-[radial-gradient(circle_at_right_center,rgba(30,58,138,0.45),transparent_60%),radial-gradient(circle_at_left_center,rgba(14,165,233,0.25),transparent_60%)]
    "
    >
      {/* Animated Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

      {/* LEFT SIDE (IMAGE) */}
      <div className="flex justify-center items-center mt-10 lg:mt-0">
        <div
          className="
          relative
          w-[280px] h-[280px]
          lg:w-[420px] lg:h-[420px]
          rounded-full
          bg-gradient-to-br from-[#0f172a] to-[#1e3a8a]
          p-2
          shadow-2xl
          animate-float
        "
        >
          <img
            src={profile}
            alt="profile"
            className="w-full h-full rounded-full object-cover bg-white"
          />

          {/* Shadow */}
          <div
            className="
            absolute
            bottom-[-35px]
            left-1/2
            w-[60%]
            h-[25px]
            bg-[radial-gradient(ellipse,rgba(0,0,0,0.25),transparent_70%)]
            blur-md
            -translate-x-1/2
          "
          />
        </div>
      </div>

      {/* RIGHT SIDE (TEXT) */}
      <div
        className="
        bg-white/90
        backdrop-blur-md
        p-10 lg:p-12
        rounded-[28px]
        shadow-xl
        max-w-[650px]
        my-10
        transition-all
        duration-1000
        ease-out
        animate-fadeInUp
      "
      >
        <h1 className="text-4xl lg:text-[56px] leading-tight font-semibold">
          Hi, I'm <br />

          <span className="bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] bg-clip-text text-transparent font-bold">
            Chutipas
          </span>
          <br />

          <span className="text-[#1e3a8a] font-bold">
            Apiwatpaitoon
          </span>
        </h1>

        <span
          className="
          inline-block
          my-6
          px-4 py-1.5
          rounded-full
          bg-[#eef1ff]
          font-medium
          animate-bounceSlow
        "
        >
          💻 Software Developer
        </span>

        <p className="max-w-[520px] mb-8 text-gray-600 leading-relaxed">
          I’m chutipas, a student at King Mongkut’s University of Technology North
          Bangkok. I want to be a Software Developer in the future. I like to
          learn new things and take on challenges that help me grow both
          personally and professionally.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/about"
            className="
            px-7 py-3
            rounded-full
            font-semibold
            text-white
            bg-gradient-to-r from-[#0f172a] to-[#1e3a8a]
            shadow-lg
            hover:scale-110
            hover:shadow-2xl
            transition-all
            duration-300
          "
          >
            About Me
          </Link>

          <Link
            to="/contact"
            className="
            px-7 py-3
            rounded-full
            font-semibold
            border-2 border-[#1e3a8a]
            text-[#1e3a8a]
            hover:bg-[#1e3a8a]
            hover:text-white
            hover:scale-110
            transition-all
            duration-300
          "
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceSlow {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-bounceSlow {
          animation: bounceSlow 2.5s infinite;
        }
      `}
      </style>
    </section>
  );
}
