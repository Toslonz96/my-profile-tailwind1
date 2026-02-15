export default function LineQRModal({ onClose }) {
  return (
    <div
      className="
        fixed inset-0
        flex items-center justify-center
        bg-black/70
        backdrop-blur-sm
        z-50
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
          src="/line-qr.png" // เปลี่ยนเป็น path รูป QR ของคุณ
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
