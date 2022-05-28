import { joinQueryStrings, paginationRange } from "../shared/utils";

import Footer from "../components/Footer";
import { GET_ALL_PROJECTS } from "../graphql/queries";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import dayjs from "dayjs";
import { useQuery } from "@apollo/client";
import { useSearchQuery } from "../hooks/useSearchQuery";

export default function Projects() {
  const search = useSearchQuery();

  const page = search.page || "1";
  const projectType = search.type || null;
  const query = search.q || null;

  const { data, error, loading } = useQuery(GET_ALL_PROJECTS, {
    variables: {
      skip: (+page - 1) * 8,
      ...(projectType ? { projectType_in: [projectType] } : {}),
      ...(query ? { _search: query } : {}),
    },
  });

  if (error) return <div>Error</div>;

  return (
    <div>
      <Search />

      <div className="mx-[3vw]">
        <div className="my-8">
          <h1 className="text-3xl">Sản phẩm học viên</h1>
          {!!query && (
            <h1 className="text-2xl">Kết quả tìm kiếm cho: {query}</h1>
          )}

          <div className="flex gap-2 flex-wrap text-primary text-xl mt-3">
            <h1>Danh mục: </h1>
            <Link
              to={`/projects?${joinQueryStrings({
                page,
                type: null,
                q: query,
              })}`}
              className={
                projectType === null ? "underline underline-offset-4" : ""
              }
            >
              Tất cả
            </Link>
            {[
              // {
              //   name: "Scratch",
              //   id: "scratch",
              // },
              {
                name: "Game",
                id: "game",
              },
              // {
              //   name: "App",
              //   id: "app",
              // },
              {
                name: "Web",
                id: "web",
              },
              // {
              //   name: "Computer Science",
              //   id: "cs",
              // },
            ].map((item) => (
              <Link
                className={
                  projectType === item.id ? "underline underline-offset-4" : ""
                }
                to={`/projects?${joinQueryStrings({
                  page,
                  type: item.id,
                  q: query,
                })}`}
                key={item.id}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div
          className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-8"
          style={{ gridAutoRows: "1fr" }}
        >
          {loading
            ? new Array(8).fill("").map((_, index) => (
                <div className="h-0 pb-[56.25%] relative" key={index}>
                  <div className="absolute inset-0 w-full h-full bg-gray-300 animate-pulse"></div>
                </div>
              ))
            : data.projectsConnection.edges.map(({ node: item }) => (
                <Link to={`/projects/${item.id}`} key={item.id}>
                  <div className="h-0 pb-[56.25%] relative">
                    <img
                      className="absolute inset-0 w-full h-full object-cover"
                      src={item.image.url}
                      alt=""
                    />
                  </div>
                  <div className="m-2">
                    <h1 className="text-lg">{item.title}</h1>
                    <p className="text-gray-500">
                      {dayjs(item.createdAt).format("DD/MM/YYYY, H:mmA")}
                    </p>
                  </div>
                </Link>
              ))}
        </div>
      </div>

      <div className="flex gap-3 justify-center flex-wrap items-center mx-[3vw] mt-6 min-h-[36px]">
        {!loading && (
          <>
            <Link
              to={`/projects?${joinQueryStrings({
                page: +page - 1,
                type: projectType,
                q: query,
              })}`}
              className={`${
                !data.projectsConnection.pageInfo.hasPreviousPage
                  ? "cursor-default pointer-events-none !text-gray-500"
                  : ""
              } w-8 h-8 text-lg text-white border rounded border-gray-300 flex justify-center items-center`}
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  className={
                    !data.projectsConnection.pageInfo.hasPreviousPage
                      ? "fill-gray-300"
                      : "fill-gray-500"
                  }
                  d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z"
                />
              </svg>
            </Link>
            {paginationRange({
              total: Math.ceil(data.projectsConnection.aggregate.count / 8),
              page: +page,
            }).map((item) =>
              item === "..." ? (
                <span>...</span>
              ) : (
                <Link
                  to={`/projects?${joinQueryStrings({
                    page: +item,
                    type: projectType,
                    q: query,
                  })}`}
                  className={`${
                    +page === item
                      ? "bg-primary text-white"
                      : "text-gray-700 border border-gray-300"
                  } w-8 h-8 text-lg rounded flex justify-center items-center`}
                >
                  {item}
                </Link>
              )
            )}
            <Link
              to={`/projects?${joinQueryStrings({
                page: +page + 1,
                type: projectType,
                q: query,
              })}`}
              className={`${
                !data.projectsConnection.pageInfo.hasNextPage
                  ? "cursor-default pointer-events-none !text-gray-500"
                  : ""
              } w-8 h-8 text-lg text-white border rounded border-gray-300 flex justify-center items-center`}
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  className={
                    !data.projectsConnection.pageInfo.hasNextPage
                      ? "fill-gray-300"
                      : "fill-gray-500"
                  }
                  d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"
                />
              </svg>
            </Link>
          </>
        )}
      </div>

      <div className="mt-6">
        <Footer />
      </div>
    </div>
  );
}
