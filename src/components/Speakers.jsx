import { Swiper, SwiperSlide } from "swiper/react";
import { useMemo, useState } from "react";

import { Autoplay } from "swiper";
import ImageView from "./ImageView";
import { SPEAKERS } from "../shared/constants";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Mentor() {
  const [swiper, setSwiper] = useState(null);

  const [imagePreview, setImagePreview] = useState(null);

  const isMinWidth1500 = useMediaQuery("(min-width: 1500px)");
  const isMinWidth900 = useMediaQuery("(min-width: 900px)");
  const isMinWidth750 = useMediaQuery("(min-width: 750px)");

  const slidesHeight = useMemo(
    () =>
      isMinWidth1500 ? 700 : isMinWidth900 ? 500 : isMinWidth750 ? 450 : 400,
    [isMinWidth1500, isMinWidth900, isMinWidth750]
  );

  return (
    <div>
      <ImageView
        imagePreview={imagePreview}
        setImagePreview={setImagePreview}
      />

      <div className="flex flex-col items-center gap-4 mb-10 mt-5 md:mt-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mx-3">
          |NextGen| Giới thiệu diễn giả
        </h1>
        <p className="text-xl text-center max-w-[700px] leading-5 mx-3">
          Các chuyên gia trong lĩnh vực khởi nghiệp khác nhau từ công nghệ, kinh
          doanh sẽ hướng dẫn các bạn học viên theo mỗi chủ đề nhất định như
          thiết kế mô hình kinh doanh, marketing, chăm sóc khách hàng, gọi
          vốn,....
        </p>
      </div>

      <div className="relative flex justify-center px-[7vw] md:px-[5vw]">
        <div className="w-full max-w-[1500px]">
          <Swiper
            modules={[Autoplay]}
            navigation
            spaceBetween={35}
            slidesPerView="auto"
            loop
            autoplay={{ delay: 5000 }}
            onSwiper={(swiper) => setSwiper(swiper)}
          >
            {SPEAKERS.map((item, index) => (
              <SwiperSlide className="!w-max" key={index}>
                <img
                  src={item}
                  onClick={() => setImagePreview(item)}
                  className="w-auto cursor-pointer hover:brightness-[80%] transition duration-300"
                  style={{ height: slidesHeight }}
                  alt=""
                ></img>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button
          onClick={() => swiper?.slidePrev()}
          className="absolute top-1/2 left-[1vw] md:left-[2vw] -translate-y-1/2"
        >
          <svg
            className="w-6 h-10 object-cover"
            fill="#000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z" />
          </svg>
        </button>
        <button
          onClick={() => swiper?.slideNext()}
          className="absolute top-1/2 right-[1vw] md:right-[2vw] -translate-y-1/2"
        >
          <svg
            className="w-6 h-10 object-cover"
            fill="#000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
