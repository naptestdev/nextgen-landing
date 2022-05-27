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
        <div className="w-full h-0 pb-[56.25%] relative">
          {loading ? (
            <div className="absolute inset-0 h-full w-full bg-gray-300 animate-pulse"></div>
          ) : (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${data.project.youtubeVideoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>

        {!loading && (
          <div className="mt-6">
            <h1 className="text-3xl">{data.project.title}</h1>
            <p className="text-gray-500 text">
              {dayjs(data.project.createdAt).format("DD/MM/YYYY, H:mmA")}
            </p>
            <p className="text-lg">{data.project.description}</p>
          </div>
        )}
      </div>

      {loading ? (
        <div className="hidden md:block flex-shrink-0 w-[300px] bg-gray-300 animate-pulse h-[300px]"></div>
      ) : (
        <div className="flex-shrink-0 w-[300px] bg-gray-100 p-5">
          <h1 className="text-xl">Thông tin dự án</h1>
          <div className="flex gap-2 mt-3">
            {data?.project.facebookLink && (
              <a
                href={data.project.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 flex justify-center items-center border bg-white border-gray-400 rounded"
              >
                <img
                  className="h-8 w-8"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
                  alt=""
                />
              </a>
            )}
            {data?.project.demoLink && (
              <a
                href={data.project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 flex justify-center items-center border bg-white border-gray-400 rounded"
              >
                <img
                  className="h-8 w-8"
                  src="https://cdn-icons-png.flaticon.com/512/154/154843.png"
                  alt=""
                />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
