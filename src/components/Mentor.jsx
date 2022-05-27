import { Swiper, SwiperSlide } from "swiper/react";
import { useMemo, useState } from "react";

import ImageView from "./ImageView";
import { MENTORS } from "../shared/constants";
import { Navigation } from "swiper";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Speakers() {
  const [swiper, setSwiper] = useState(null);

  const [imagePreview, setImagePreview] = useState(null);

  const isMinWidth1500 = useMediaQuery("(min-width: 1500px)");
  const isMinWidth900 = useMediaQuery("(min-width: 900px)");

  const slidesPerView = useMemo(
    () => (isMinWidth1500 ? 3 : isMinWidth900 ? 2 : 1),
    [isMinWidth1500, isMinWidth900]
  );

  return (
    <div className="mb-20 mt-20">
      <ImageView
        imagePreview={imagePreview}
        setImagePreview={setImagePreview}
      />

      <div className="flex flex-col items-center gap-4 mb-10">
        <h1 className="text-4xl font-bold text-center">Student Stories</h1>
        <p className="text-xl text-center max-w-[420px] leading-5">
          You aren't alone in your journey! We spotlight the highs, the lows,
          and the awkward in-betweens of people just like you.
        </p>
      </div>

      <div className="flex justify-center px-[7vw] md:px-[5vw] relative">
        <div className="w-full max-w-[1500px]">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={slidesPerView}
            slidesPerGroup={1}
            onSwiper={(swiper) => setSwiper(swiper)}
            loop
          >
            {MENTORS.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-0 pb-[56.25%] relative">
                  <img
                    onClick={() => setImagePreview(item)}
                    className="absolute inset-0 w-full h-full object-cover cursor-pointer hover:brightness-[80%] transition duration-300"
                    src={item}
                    alt=""
                  />
                </div>
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
