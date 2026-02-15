export default function InfoCard({ title, value }) {
  return (
    <div
      className="
      bg-white
      p-5
      rounded-[18px]
      shadow-[0_10px_25px_rgba(0,0,0,0.08)]
      transition
      hover:-translate-y-1.5
      hover:shadow-[0_18px_35px_rgba(123,124,255,0.25)]
    "
    >
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{value}</p>
    </div>
  );
}
