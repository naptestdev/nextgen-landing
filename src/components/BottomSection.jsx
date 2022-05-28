export default function BottomSection() {
  return (
    <div className="relative h-[500px] w-full flex flex-col justify-center items-center gap-10">
      <img
        className="absolute inset-0 w-full h-full object-cover brightness-75"
        src="https://downloads.creativelive.com/homepage/rotating1.jpg"
        alt=""
      />
      <h1 className="text-white text-3xl md:text-5xl mx-4 max-w-[600px] text-center z-10">
        We are changing the world with technology
      </h1>
      <a
        href="https://mindx.vn/register/care?from=/students"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary hover:brightness-125 transition duration-200 px-5 py-2 md:px-7 md:py-3 uppercase text-xl text-white z-10"
      >
        Tìm hiểu thêm
      </a>
    </div>
  );
}
