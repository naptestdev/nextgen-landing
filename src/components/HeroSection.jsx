export default function HeroSection() {
  return (
    <div>
      <div className="relative h-[500px] flex items-center">
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none brightness-[80%]"
          src="https://mindx.edu.vn/static/videos/banner-video.mp4"
          muted
          playsInline
          autoPlay
          loop
        ></video>
        <div className="px-[5vw] max-w-[700px] w-screen z-10 text-white flex flex-col items-start gap-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Vườn ươm khởi nghiệp công nghệ 2022
          </h1>
          <p className="text-xl">
            Sự kiện dành cho các bạn nhỏ học viên MindX trên toàn quốc trong độ
            tuổi từ 10 - 18, có ước mơ, sáng chế, sản phẩm hoặc kinh doanh ở bất
            kỳ quy mô nào trong lĩnh vực công nghệ.
          </p>
          <a
            href="https://mindx.vn/register/care?from=/students"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:brightness-125 transition duration-200 px-5 py-2 md:px-7 md:py-3 uppercase text-xl text-white"
          >
            Tìm hiểu thêm
          </a>
        </div>
      </div>
    </div>
  );
}
