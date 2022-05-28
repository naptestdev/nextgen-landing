import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="h-16 px-3 py-2 flex items-center justify-between">
      <div>
        <Link to="/">
          <img className="h-16 w-auto" src="/logo.png" alt="" />
        </Link>
      </div>
      <div className="flex items-center gap-3 text-xl">
        <Link
          className={`relative after:absolute after:left-0 after:top-[110%] after:w-full after:h-[3px] after:bg-primary after:rounded-md after:transition after:opacity-0 ${
            location.pathname === "/" ? "after:!opacity-100" : ""
          }`}
          to="/"
        >
          Trang chủ
        </Link>
        <Link
          className={`relative after:absolute after:left-0 after:top-[110%] after:w-full after:h-[3px] after:bg-primary after:rounded-md after:transition after:opacity-0 ${
            location.pathname === "/projects" ? "after:!opacity-100" : ""
          }`}
          to="/projects"
        >
          Sản phẩm
        </Link>
      </div>
    </div>
  );
}
