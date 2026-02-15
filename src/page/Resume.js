import { useState } from "react";
import images from "../images/resume.png";

export default function Resume() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
      px-5 py-16
      flex justify-center
      bg-[radial-gradient(circle_at_right_center,rgba(123,124,255,0.25),transparent_60%),radial-gradient(circle_at_left_center,rgba(255,93,162,0.25),transparent_60%)]
    "
    >
      <div className="w-full max-w-[1200px]">
        <div
          className="
          grid
          gap-12
          lg:grid-cols-[1.1fr_0.9fr]
          items-start
        "
        >
          {/* LEFT */}
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
                src={images}
                alt="Resume Preview"
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

              <p className="text-blue-600 font-medium text-sm">
                👉 Tap to preview
              </p>

              <a
                href="/resume.pdf"
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
                ⬇ Download Resume (PDF)
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">
            <section
              className="
              bg-white
              p-7
              rounded-[22px]
              shadow-[0_10px_25px_rgba(0,0,0,0.08)]
            "
            >
              <h3 className="font-semibold text-lg mb-2">
                🎓 Education
              </h3>
              <p className="text-gray-600 leading-relaxed">
                King Mongkut’s University of Technology North Bangkok
                <br />
                Bachelor’s Degree in Electronic Computer Technology
              </p>
            </section>

            <section
              className="
              bg-white
              p-7
              rounded-[22px]
              shadow-[0_10px_25px_rgba(0,0,0,0.08)]
            "
            >
              <h3 className="font-semibold text-lg mb-3">
                💻 Skills
              </h3>

              <div className="flex flex-wrap gap-2">
                {[
                  "C / C++",
                  "JavaScript",
                  "React",
                  "HTML / CSS",
                  "Tailwind CSS",
                  "LAN / Wi-Fi Setup",
                  "Network (Basic)",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="
                    px-4 py-2
                    rounded-full
                    bg-[#eef4ff]
                    text-sm
                  "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section
              className="
              bg-white
              p-7
              rounded-[22px]
              shadow-[0_10px_25px_rgba(0,0,0,0.08)]
            "
            >
              <h3 className="font-semibold text-lg mb-2">
                🛠 Experience
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>IT Support Internship</li>
                <li>Network Setup & Troubleshooting</li>
                <li>Smart Farm Dashboard</li>
              </ul>
            </section>
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
                src={images}
                alt="Resume Full"
                className="
                w-full
                rounded-[14px]
                cursor-zoom-in
                transition
                hover:scale-[1.05]
                "
              />
              <p className="text-center mt-3 text-sm text-gray-500">
                Click outside to close
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
