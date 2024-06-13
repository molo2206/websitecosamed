
import { Link, useLocation } from "react-router-dom";

const BreadCumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div style={{ display: "flex" }} className="">
      {location.pathname === "/" ? null : <Link to="/" className="cursor-pointer border p-2 gap-6 text-xl text-[#2E4053] items-center">Home</Link>}
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return (
          <div key={index} className="cursor-pointer border p-2 gap-6 text-xl text-[#2E4053] items-center">
            {last ? (
              <span key={to}>&nbsp;&gt; {value}</span>
            ) : (
              <span key={to}>
                &nbsp;&gt; <Link to={to}>{value}</Link>
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BreadCumbs;
