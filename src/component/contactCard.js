export default function ContactCard({
  icon,
  title,
  value,
  link,
  onClick,
}) {
  const baseStyle = `
    bg-white
    p-8
    rounded-[22px]
    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
    transition
    hover:-translate-y-2
    cursor-pointer
    flex
    flex-col
    items-center
    gap-2
  `;

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyle}
      >
        <div className="text-4xl">{icon}</div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-500 text-sm">{value}</p>
      </a>
    );
  }

  return (
    <div onClick={onClick} className={baseStyle}>
      <div className="text-4xl">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-500 text-sm">{value}</p>
    </div>
  );
}
