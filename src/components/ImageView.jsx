import { useEffect } from "react";

export default function ImageView({ imagePreview, setImagePreview }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setImagePreview(null);
    };
    window.addEventListener("keyup", handler);

    return () => window.removeEventListener("keyup", handler);

    // eslint-disable-next-line
  }, []);

  return (
    <div
      onClick={() => setImagePreview(null)}
      className={`fixed inset-0 w-full h-full bg-[#00000080] z-20 flex justify-center items-center transition-all duration-300 ${
        imagePreview ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <img
        onClick={(e) => e.stopPropagation()}
        key={imagePreview}
        className="max-w-full max-h-full"
        src={imagePreview}
        alt=""
      />
      <button
        onClick={() => setImagePreview(null)}
        className="fixed top-3 right-3 z-30"
      >
        <svg
          className="h-10 w-10"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
        </svg>
      </button>
    </div>
  );
}
