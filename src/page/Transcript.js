import { useState } from "react";
import previewImg from "../images/Transcript.png";
import ContactCard from "../component/contactCard.js";

export default function Transcript() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="
      relative
      overflow-hidden
      px-5 py-16
      flex justify-center
      bg-[radial-gradient(circle_at_right_center,rgba(30,58,138,0.45),transparent_60%),radial-gradient(circle_at_left_center,rgba(14,165,233,0.25),transparent_60%)]
    "
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-300 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>

      <div className="w-full max-w-[1200px]">
        <h1
          className="
          text-center
          text-3xl md:text-4xl lg:text-[42px]
          font-bold
          mb-14
          bg-gradient-to-r
          from-[#0f172a] to-[#1e3a8a]
          bg-clip-text
          text-transparent
          animate-gradientMove
          bg-[length:200%_200%]
        "
        >
          Academic Transcript
        </h1>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          
          {/* LEFT : PREVIEW */}
          <div className="lg:sticky lg:top-[100px] animate-fadeInLeft">
            <div
              className="
              bg-white/90
              backdrop-blur-md
              rounded-[30px]
              p-8
              text-center
              shadow-[0_20px_45px_rgba(0,0,0,0.12)]
              flex flex-col items-center gap-4
              transition
              hover:-translate-y-2
              duration-500
            "
            >
              <img
                src={previewImg}
                alt="Transcript Preview"
                onClick={() => setOpen(true)}
                className="
                w-full max-w-[320px]
                rounded-[18px]
                cursor-pointer
                transition
                hover:scale-[1.05]
                hover:shadow-xl
                duration-500
                "
              />

              <span className="text-blue-600 font-medium text-sm animate-bounceSlow">
                👉 Click to view full transcript
              </span>

              <a
                href="/Transcript.pdf"
                download="Chutipas-Transcript.pdf"
                className="
                mt-3
                inline-block
                px-8 py-3
                rounded-full
                text-white
                font-medium
                bg-gradient-to-r
                from-[#0f172a] to-[#1e3a8a]
                hover:scale-105
                hover:shadow-xl
                transition
                duration-300
                "
              >
                ⬇ Download PDF
              </a>
            </div>
          </div>

          {/* RIGHT : INFO */}
          <div className="flex flex-col gap-6 animate-fadeInRight">
            
            {[
              {
                title: "University",
                value:
                  "King Mongkut’s University of Technology North Bangkok",
              },
              {
                title: "Faculty / Major",
                value: "Electronic Computer Technology",
              },
              {
                title: "GPA",
                value: "3.67",
              },
              {
                title: "Academic Status",
                value: "Undergraduate Student",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                transcript-card
                "
              >
                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
          fixed inset-0
          bg-black/70
          z-50
          flex justify-center items-start
          overflow-y-auto
          px-5 py-16
          animate-fadeIn
          "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
            bg-white
            rounded-[20px]
            p-5
            max-w-[900px]
            w-full
            shadow-[0_20px_50px_rgba(0,0,0,0.3)]
            animate-zoomIn
            "
          >
            <img
              src={previewImg}
              alt="Transcript Full"
              className="w-full rounded-[14px]"
            />
            <p className="text-center mt-3 text-sm text-gray-500">
              👉 Click outside to close
            </p>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>
        {`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes bounceSlow {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-fadeInLeft { animation: fadeInLeft 1s ease forwards; }
        .animate-fadeInRight { animation: fadeInRight 1s ease forwards; }
        .animate-fadeIn { animation: fadeIn 0.4s ease forwards; }
        .animate-zoomIn { animation: zoomIn 0.4s ease forwards; }
        .animate-bounceSlow { animation: bounceSlow 2.5s infinite; }
        .animate-gradientMove { animation: gradientMove 6s ease infinite; }

        .transcript-card {
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(6px);
          padding: 1.75rem;
          border-radius: 22px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transition: 0.4s ease;
        }

        .transcript-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
      `}
      </style>
    </section>
  );
}
