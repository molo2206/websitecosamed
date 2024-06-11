import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

interface props {
  showMenu?: any;
}
const ResponsiveMenu = ({ showMenu }: props) => {
  return (
    <div
      className={` ${
        showMenu ? "left-0" : "-left-[100%]"
      } h-screen w-[75%] bg-principal fixed top-0 z-50
       transition-all duration-500 pt-24 pb-6 px-8 
       flex justify-between text-white dark:bg-slate-900 dark:text-white`}
    >
      <div>
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            <li>
              <Link to="/" onClick={() => window.scrollTo}>
                <FaHome size={18} />
                Home
              </Link>
            </li>
            <li>
              <a href="" className="">
                Services
              </a>
            </li>
            <li>
              <a href="" className="">
                About us
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* <div className=" footer">
        <h1>©2024 All Rights Reserved</h1>
      </div> */}
    </div>
  );
};

export default ResponsiveMenu;
