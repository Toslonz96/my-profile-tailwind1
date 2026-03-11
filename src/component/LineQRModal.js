import Qr from "../images/Qrline.jpg";

export default function LineQRModal({ onClose }) {
  return (
    <div
      className="
        fixed inset-0
        flex items-center justify-center
        bg-black/70
        backdrop-blur-sm
        z-50
        px-5 py-16
        animate-fadeIn
        
      "
    >
      <div
        className="
          relative
          bg-white
          rounded-2xl
          p-8
          w-[90%] max-w-sm
          text-center
          shadow-2xl
          animate-fadeIn
          backdrop-blur-md
          transition-all
          duration-500
          hover:-translate-y-3
          hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]
          hover:scale-[1.02]
        "
      >
        <button
          onClick={onClose}
          className="
            absolute top-3 right-4
            text-gray-400
            hover:text-black
            text-xl
          "
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">
          Scan Line QR Code
        </h2>

        <img
          src={Qr}
          alt="Line QR Code"
          className="mx-auto w-48 h-48 object-contain mb-4"
        />

        <p className="text-gray-500">
          Add me on Line by scanning this QR code.
        </p>
      </div>
    </div>
  );
}
