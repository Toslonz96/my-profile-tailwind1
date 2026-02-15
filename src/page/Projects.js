const projects = [
  {
    title: "Assistant Chatbot for chicken farm",
    desc: "react vite and tailwindcss-based chatbot for farm management.",
    icon: "🐔",
    tags: ["React", "Vite", "Tailwind CSS", "Chatbot"],
    github: "https://github.com/Toslonz96/smart-farm-chatbot",
  },
  {
    title: "Quiz App",
    desc: "react-based quiz application with multiple categories and scoring system.",
    icon: "❓",
    tags: ["React", "JavaScript", "CSS", "Firebase"],
    github: "https://github.com/Toslonz96/quiz-app.git",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with React, animations and clean UI.",
    icon: "💻",
    tags: ["React", "Framer Motion", "UI/UX"],
    github: "https://github.com/Toslonz96/myprofile.git",
  },
];

export default function Projects() {
  return (
    <section
      className="
      relative
      overflow-hidden
      min-h-screen
      px-6 md:px-10 lg:px-[10%]
      py-24
      text-center
      bg-gradient-to-br
      from-purple-100
      via-sky-100
      to-cyan-50
    "
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>

      <h1
        className="
        text-3xl md:text-4xl lg:text-[48px]
        font-bold
        bg-gradient-to-r
        from-[#0f172a] to-[#1e3a8a]
        to-pink-500
        bg-clip-text
        text-transparent
        animate-gradientMove
        bg-[length:200%_200%]
      "
      >
        Projects & Works
      </h1>

      <p className="mt-3 text-slate-500 animate-fadeInUp">
        Selected works & personal projects
      </p>

      <div
        className="
        mt-16
        grid
        gap-8 md:gap-10
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
      "
      >
        {projects.map((item, index) => (
          <div
            key={index}
            className="
            bg-white/80
            backdrop-blur-md
            p-8
            rounded-[22px]
            text-left
            shadow-[0_20px_40px_rgba(0,0,0,0.08)]
            transition-all
            duration-500
            hover:-translate-y-3
            hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]
            hover:scale-[1.02]
            animate-fadeInUp
          "
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div
              className="
              w-[50px] h-[50px]
              rounded-[14px]
              bg-gradient-to-br
              from-purple-200
              to-sky-200
              flex
              items-center
              justify-center
              text-2xl
              mb-5
              transition
              duration-300
              group-hover:rotate-6
            "
            >
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-slate-600 text-sm mb-5">
              {item.desc}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="
                  text-xs
                  px-3 py-1
                  bg-blue-50
                  text-blue-600
                  rounded-full
                  transition
                  duration-300
                  hover:bg-blue-500
                  hover:text-white
                "
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={item.github}
              target="_blank"
              rel="noreferrer"
              className="
              inline-block
              text-pink-500
              font-semibold
              relative
              group
            "
            >
              <span className="group-hover:mr-2 transition-all duration-300">
                View on GitHub
              </span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        ))}
      </div>

      {/* Custom Animations */}
      <style>
        {`
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

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }

        .animate-gradientMove {
          animation: gradientMove 6s ease infinite;
        }
      `}
      </style>
    </section>
  );
}
