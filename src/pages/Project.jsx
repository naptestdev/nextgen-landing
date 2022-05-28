import { GET_PROJECT_BY_ID } from "../graphql/queries";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

export default function Project() {
  const { id } = useParams();

  const { data, error, loading } = useQuery(GET_PROJECT_BY_ID, {
    variables: { id },
  });

  if (error) return <div>Error</div>;

  return (
    <div className="mx-[8vw] flex flex-col md:flex-row items-start gap-10 my-10">
      <div className="flex-grow w-full md:w-auto">
        {loading ? (
          <div className="w-full h-0 pb-[56.25%] relative">
            <div className="absolute inset-0 h-full w-full bg-gray-300 animate-pulse"></div>
          </div>
        ) : data.project.youtubeVideoId ? (
          <div className="w-full h-0 pb-[56.25%] relative">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${data.project.youtubeVideoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <img src={data.project.image.url} alt="" className="w-full h-auto" />
        )}

        {!loading && (
          <div className="mt-6">
            <h1 className="text-3xl">{data.project.title}</h1>
            <p className="text-gray-500 text">
              {dayjs(data.project.createdAt).format("DD/MM/YYYY, H:mmA")}
            </p>
            <p className="text-lg whitespace-pre-wrap">
              {data.project.description}
            </p>
          </div>
        )}
      </div>

      {loading ? (
        <div className="hidden md:block flex-shrink-0 w-[300px] bg-gray-300 animate-pulse h-[300px]"></div>
      ) : (
        <div className="flex-shrink-0 w-[300px] bg-gray-100 p-5 flex flex-col gap-3">
          <h1 className="text-xl">Thông tin dự án</h1>
          {data?.project.facebookLink && (
            <a
              href={data.project.facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="h-[45px] px-[15px] w-full text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#2884e0]"
            >
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#ffffff"
                  d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                />
              </svg>
              <span> Facebook học viên</span>
            </a>
          )}
          {data?.project.demoLink && (
            <a
              href={data.project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="h-[45px] px-[15px] w-full text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#0d1116] hover:bg-[#191e25]"
            >
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="#ffffff"
                  d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"
                />
              </svg>
              <span> Trải nghiệm sản phẩm</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
