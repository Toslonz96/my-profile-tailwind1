export default function ContactCard({
  icon,
  title,
  value,
  link,
  onClick,
}) {
  const Wrapper = link ? "a" : "button";

  return (
    <Wrapper
      href={link}
      onClick={onClick}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      className="
        group
        flex flex-col items-center justify-center
        p-8
        rounded-2xl
        bg-white/40
        backdrop-blur-lg
        border border-white/30
        shadow-lg
        transition-all duration-300
        hover:-translate-y-3
        hover:shadow-2xl
        hover:bg-white/60
      "
    >
      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="text-xl font-semibold mb-2 text-gray-800">
        {title}
      </h3>

      <p className="text-gray-600 group-hover:text-indigo-600 transition">
        {value}
      </p>
    </Wrapper>
  );
}
