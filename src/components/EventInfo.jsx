export default function EventInfo() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full max-w-[1500px] mx-[4vw] my-10 lg:my-0 lg:min-h-screen flex items-center flex-col lg:flex-row gap-6">
          <div className="m-4 flex-1">
            <h1 className="text-3xl font-bold">
              Mỗi đứa trẻ đều có thể trở thành “người lãnh đạo” trong tương lai
              nếu được phát hiện tố nhất và rèn luyện từ sớm.
            </h1>
            <ul className="my-6 text-xl font-light list-disc ml-10 leading-10">
              <li>
                Giúp trẻ học cách lắng nghe, phân tích và hỏi lại, phản biện
                những quan điểm khác nhau trong mỗi tình huống.
              </li>
              <li>
                Khuyến khích con tham gia các hoạt động ngoại khoá, teamwork,
                tập thể và có sự phân vai cụ thể. Qua các hoạt động này trẻ sẽ
                biết cách và dần tự tin để dẫn dắt không chỉ các bạn cùng độ
                tuổi mà có thể là cả người lớn.
              </li>
              <li>
                Dạy con cách đặt ra mục tiêu trong cuộc sống, học tập và rèn
                luyện cho con tính kiên trì, nỗ lực, có một kế hoạch cụ thể để
                hoàn thành mục tiêu đặt ra.
              </li>
            </ul>
          </div>
          <div className="m-4 flex-1">
            <img
              className="object-cover w-full h-auto"
              src="/info-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-[1500px] mx-[4vw] my-10 lg:my-0 lg:min-h-screen flex items-center flex-col-reverse lg:flex-row gap-6">
          <div className="m-4 flex-1">
            <img
              className="object-cover w-full h-auto"
              src="/info-2.png"
              alt=""
            />
          </div>
          <div className="m-4 flex-1">
            <h1 className="text-3xl font-bold">
              Kỹ năng lãnh đạo sẽ là tiền đề giúp trẻ sống một cuộc đời có mục
              đích, biết hoạch định ra các mục tiêu để phấn đấu và cố gắng đạt
              được, không chỉ trong công việc hay sự nghiệp.
            </h1>
            <ul className="my-6 text-xl font-light list-disc ml-10 leading-10">
              <li>
                Nói với con rằng những sai lầm là một phần tất yếu của cuộc sống
                và sai lầm có thể sẽ luôn xảy ra. Hãy biết chấp nhận những điều
                không thuận lợi xảy ra và rút ra bài học cho mỗi sai lầm hay
                thất bại.
              </li>
              <li>
                Trao cho con quyền quyết định, lựa chọn. Hãy bắt đầu bằng những
                quyết định đơn giản như lên danh sách những món đồ dùng học tập
                cần mua, tự sắp xếp căn phòng của mình, lập kế hoạch chi tiêu số
                tiền mà con có,...
              </li>
              <li>
                Giúp con luôn duy trì một thái độ lạc quan, tích cực ngay cả khi
                gặp khó khăn, không bao giờ bỏ cuộc.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
