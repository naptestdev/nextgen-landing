export default function HeroSection() {
  return (
    <div>
      <div className="relative h-[500px] flex items-center">
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          src="https://mindx.edu.vn/static/videos/banner-video.mp4"
          muted
          playsInline
          autoPlay
          loop
        ></video>
        <div className="px-[5vw] max-w-[600px] w-screen z-10 text-white">
          <h1 className="text-5xl md:text-[56px] font-bold">
            Do what you love.
          </h1>
          <p className="text-xl mt-4">
            Learn the skills you need to live your dreams in career, hobby, and
            life.
          </p>
          <button className="bg-blue-700 hover:bg-blue-600 transition duration-200 px-7 py-3 mt-6 uppercase text-xl text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
