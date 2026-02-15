import InfoCard from "../component/Infocard";
import profile from "../images/me.png";

export default function About() {
  return (
    <div
      className="
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
          <InfoCard title="Frontend Focus" value="React / HTML / CSS" />
          <InfoCard title="Experience" value="web design & development" />
          <InfoCard title="Design Style" value="Minimal & Clean" />
          <InfoCard title="Mindset" value="Always learning" />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={profile}
          alt="profile"
          className="
          w-[80%] lg:w-[70%]
          rounded-[26px]
          shadow-[0_20px_40px_rgba(0,0,0,0.15)]
          animate-float
        "
        />
      </div>
    </div>
  );
}
