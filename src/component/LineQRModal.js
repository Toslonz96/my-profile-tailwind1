import qrImg from "../images/Qrline.jpg";

export default function LineQRModal({ onClose }) {
  return (
    <div
      onClick={onClose}
      className="
      fixed inset-0
      bg-black/60
      backdrop-blur-sm
      flex items-center justify-center
      z-50
      px-4
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
        bg-white
        rounded-[20px]
        p-8
        text-center
        shadow-[0_20px_50px_rgba(0,0,0,0.25)]
        animate-[fadeIn_0.25s_ease]
        "
      >
        <h3 className="text-xl font-semibold mb-4">
          Scan Line QR Code
        </h3>

        <img
          src={qrImg}
          alt="Line QR"
          className="w-[220px] mx-auto mb-6"
        />

        <button
          onClick={onClose}
          className="
          px-6 py-2
          rounded-full
          bg-gradient-to-r
          from-[#7b8cff]
          to-[#ff5fa2]
          text-white
          hover:opacity-90
          transition
          "
        >
          Close
        </button>
      </div>
    </div>
  );
}
