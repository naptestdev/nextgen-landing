import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Search() {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim())
      navigate(`/projects?q=${encodeURIComponent(inputValue.trim())}`);
  };

  return (
    <div className="bg-[url(/hero-section.jpeg)] h-[200px] bg-cover bg-no-repeat bg-center flex justify-center items-center">
      <form
        onSubmit={handleFormSubmit}
        className="flex items-stretch w-full max-w-[500px]"
      >
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow py-3 px-4 placeholder:text-emerald outline-none focus:shadow-[0_0_0_4px_#0099994D] transition duration-300"
          type="text"
          placeholder="Search..."
        />
        <button
          type="submit"
          className="flex-shrink bg-emerald w-20 flex justify-center items-center hover:brightness-[115%] transition duration-300"
        >
          <svg
            className="h-4 w-4"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
