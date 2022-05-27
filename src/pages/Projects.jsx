import Footer from "../components/Footer";
import { GET_ALL_PROJECTS } from "../graphql/queries";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import dayjs from "dayjs";
import { joinQueryStrings } from "../shared/utils";
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

          <div className="flex gap-2 flex-wrap text-blue-500 text-xl mt-3">
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
              {
                name: "Scratch",
                id: "scratch",
              },
              {
                name: "Game",
                id: "game",
              },
              {
                name: "App",
                id: "app",
              },
              {
                name: "Web",
                id: "web",
              },
              {
                name: "Computer Science",
                id: "cs",
              },
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

      <div className="flex gap-3 justify-between flex-wrap items-center mx-[3vw] mt-6 min-h-[36px]">
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
                  ? "cursor-default pointer-events-none !bg-blue-300"
                  : ""
              } bg-blue-600 hover:bg-blue-500 transition duration-200 px-3 py-1 text-lg text-white`}
            >
              Trang trước
            </Link>
            <p className="text-xl">
              Trang {page} trên{" "}
              {Math.ceil(data.projectsConnection.aggregate.count / 8)}
            </p>
            <Link
              to={`/projects?${joinQueryStrings({
                page: +page + 1,
                type: projectType,
                q: query,
              })}`}
              className={`${
                !data.projectsConnection.pageInfo.hasNextPage
                  ? "cursor-default pointer-events-none !bg-blue-300"
                  : ""
              }
            bg-blue-600 hover:bg-blue-500 transition duration-200 px-3 py-1 text-lg text-white`}
            >
              Trang sau
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
