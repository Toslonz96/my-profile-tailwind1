import { useState } from "react";
import previewImg from "../images/Transcript.png";
import ContactCard from "../component/contactCard.js";

export default function Transcript() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="
      px-5 py-16
      flex justify-center
      bg-[radial-gradient(circle_at_right_center,rgba(123,124,255,0.25),transparent_60%),radial-gradient(circle_at_left_center,rgba(255,93,162,0.25),transparent_60%)]
    "
    >
      <div className="w-full max-w-[1200px]">
        <h1
          className="
          text-center
          text-3xl md:text-4xl lg:text-[42px]
          font-bold
          mb-14
        "
        >
          Academic Transcript
        </h1>

        <div
          className="
          grid gap-12
          lg:grid-cols-[1.1fr_0.9fr]
          items-start
        "
        >
          {/* LEFT : PREVIEW */}
          <div className="lg:sticky lg:top-[100px]">
            <div
              className="
              bg-white
              rounded-[30px]
              p-8
              text-center
              shadow-[0_20px_45px_rgba(0,0,0,0.12)]
              flex flex-col items-center gap-4
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
                hover:scale-[1.03]
                hover:shadow-lg
                "
              />

              <span className="text-blue-600 font-medium text-sm">
                👉 Click to view full transcript
              </span>

              <a
                href="/Transcript.pdf"
                download
                className="
                mt-3
                inline-block
                px-8 py-3
                rounded-full
                text-white
                font-medium
                bg-gradient-to-r
                from-[#ff5fa2]
                to-[#7b8cff]
                hover:opacity-90
                transition
                "
              >
                ⬇ Download PDF
              </a>
            </div>
          </div>

          {/* RIGHT : INFO */}
          <div className="flex flex-col gap-6">
            <div className="bg-white p-7 rounded-[22px] shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <h3 className="font-semibold text-lg mb-2">
                University
              </h3>
              <p className="text-gray-600">
                King Mongkut’s University of Technology North Bangkok
              </p>
            </div>

            <div className="bg-white p-7 rounded-[22px] shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <h3 className="font-semibold text-lg mb-2">
                Faculty / Major
              </h3>
              <p className="text-gray-600">
                Electronic Computer Technology
              </p>
            </div>

            <div className="bg-white p-7 rounded-[22px] shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <h3 className="font-semibold text-lg mb-2">
                GPA
              </h3>
              <p className="text-gray-600">
                3.67
              </p>
            </div>

            <div className="bg-white p-7 rounded-[22px] shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
              <h3 className="font-semibold text-lg mb-2">
                Academic Status
              </h3>
              <p className="text-gray-600">
                Undergraduate Student
              </p>
            </div>
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
            "
          >
            <img
              src={previewImg}
              alt="Transcript Full"
              className="
              w-full
              rounded-[14px]
              cursor-zoom-in
              transition
              hover:scale-[1.05]
              "
            />
            <p className="text-center mt-3 text-sm text-gray-500">
              👉 Click outside to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
