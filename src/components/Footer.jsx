export default function Footer() {
  return (
    <div className="bg-[#3E3E3C] flex justify-center py-10">
      <div className="flex flex-col md:flex-row gap-6 md:gap-0 w-full max-w-[1200px] text-white justify-between px-5">
        <div>
          <img
            className="h-20"
            src="https://mindx.edu.vn/images/logo_white.png"
            alt=""
          />
        </div>
        <div className="flex flex-col items-start gap-2 ml-2 md:ml-0">
          <h1 className="font-semibold">Về mindX</h1>
          <a href="/">Blog công nghệ</a>
          <a href="/">Về chúng tôi</a>
          <a href="/">Tuyển dụng</a>
        </div>
        <div className="flex flex-col items-start gap-2 ml-2 md:ml-0">
          <h1 className="font-semibold">Chương trình học</h1>
          <a href="/">Code for kids</a>
          <a href="/">Code for teen</a>
          <a href="/">Code for 18+</a>
        </div>
        <div className="flex flex-col items-start gap-2 ml-2 md:ml-0">
          <h1 className="font-semibold">Hotline</h1>
          <a href="/">012345678</a>
          <a href="/">012345678</a>
          <a href="/">012345678</a>
        </div>
      </div>
    </div>
  );
}
