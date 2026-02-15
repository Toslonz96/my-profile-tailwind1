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
      min-h-screen
      px-6 md:px-10 lg:px-[10%]
      py-24
      bg-gradient-to-br
      from-purple-100
      via-sky-100
      to-cyan-50
      text-center
    "
    >
      <h1
        className="
        text-3xl md:text-4xl lg:text-[48px]
        font-bold
        bg-gradient-to-r
        from-purple-500
        to-pink-500
        bg-clip-text
        text-transparent
      "
      >
        Projects & Works
      </h1>

      <p className="mt-3 text-slate-500">
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
            bg-white
            p-8
            rounded-[20px]
            text-left
            shadow-[0_20px_40px_rgba(0,0,0,0.08)]
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)]
          "
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
              text-pink-500
              font-semibold
              hover:underline
            "
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
