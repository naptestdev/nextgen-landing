export default function BottomSection() {
  return (
    <div className="relative h-[500px] w-full flex flex-col justify-center items-center gap-10">
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-75"
        src="https://downloads.creativelive.com/homepage/rotating1.jpg"
        alt=""
      />
      <h1 className="text-white text-3xl md:text-5xl mx-4 max-w-[600px] text-center z-10">
        There's a reason you're full time with your creativity.
      </h1>
      <button className="bg-blue-700 hover:bg-blue-600 transition duration-200 px-7 py-3 mt-6 uppercase text-xl text-white z-10">
        Get Started
      </button>
    </div>
  );
}
