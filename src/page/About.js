import InfoCard from "../component/Infocard";
import profile from "../images/me.png";

export default function About() {
  return (
    <div
      className="
      relative
      overflow-hidden
      min-h-[calc(100vh-80px)]
      flex
      flex-col lg:flex-row
      items-center
      gap-12 lg:gap-20
      px-6 lg:px-20
      py-16
      bg-[radial-gradient(circle_at_right_center,rgba(123,124,255,0.25),transparent_60%),radial-gradient(circle_at_left_center,rgba(255,93,162,0.25),transparent_60%)]
    "
    >
      {/* Animated Glow Background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>

      {/* LEFT SIDE */}
      <div
        className="
        flex-1
        bg-white/85
        backdrop-blur-md
        p-10 lg:p-12
        rounded-[28px]
        shadow-[0_20px_40px_rgba(0,0,0,0.08)]
        max-w-[620px]
        transition-all
        duration-1000
        animate-fadeInLeft
      "
      >
        <h1
          className="
          text-3xl lg:text-[42px]
          mb-5
          font-bold
          bg-gradient-to-r from-[#ff5fa2] to-[#7b8cff]
          bg-clip-text
          text-transparent
          animate-gradientMove
          bg-[length:200%_200%]
        "
        >
          About Me
        </h1>

        <span className="block mt-4 text-gray-600 leading-relaxed font-medium">
          I’m a student at King Mongkut’s University of Technology North
          Bangkok. I want to be a Software Developer in the future. I like
          working with programs and fixing problems in applications. I try to
          improve my programming skills all the time. I am looking for an
          internship to get real experience and learn more about software
          development.
        </span>

        {/* INFO GRID */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="hover:-translate-y-2 transition duration-300">
            <InfoCard title="Frontend Focus" value="React / HTML / CSS" />
          </div>
          <div className="hover:-translate-y-2 transition duration-300">
            <InfoCard title="Experience" value="web design & development" />
          </div>
          <div className="hover:-translate-y-2 transition duration-300">
            <InfoCard title="Design Style" value="Minimal & Clean" />
          </div>
          <div className="hover:-translate-y-2 transition duration-300">
            <InfoCard title="Mindset" value="Always learning" />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex justify-center items-center animate-fadeInRight">
        <img
          src={profile}
          alt="profile"
          className="
          w-[80%] lg:w-[70%]
          rounded-[26px]
          shadow-[0_20px_40px_rgba(0,0,0,0.15)]
          animate-float
          hover:scale-105
          transition duration-500
        "
        />
      </div>

      {/* Custom Animations */}
      <style>
        {`
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out forwards;
        }

        .animate-gradientMove {
          animation: gradientMove 6s ease infinite;
        }
      `}
      </style>
    </div>
  );
}
