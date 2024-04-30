import { useEffect, useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { FaCaretDown, FaHome } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import useSticky from "../../hooks/useSticky";
import Logo from "../../assets/logo1.png";

function Navbar() {
  const { sticky } = useSticky();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const [showMenu, setShowMenu] = useState(false);
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);
  const toggleMe = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <header
        className={`header__sticky ${
          sticky ? "header-sticky" : ""
        } left-0 right-0 bg-navbar text-white border-b-[1px] border-primary/50`}
      >
        <nav className="container flex items-center justify-between h-[80px] py-4  ">
          {/* Logo selection */}
          <div className="md:text-3xl text-white">
            <a href="#" className={`${sticky ? "block" : "hidden"}`}>
              <img
                src={Logo}
                alt=""
                className="sticky-logo"
              />
            </a>
            <a href="#" className={`${!sticky ? "block" : "hidden"}`}>
              <FaHome size={30} />
            </a>
          </div>
          {/* Desktop menu selection */}
          <div className="hidden md:block font-bold">
            <ul className="flex top-12 left-0 right-0  items-center gap-10">
              <li className=" group relative cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[72px]">
                  Home{""}
                  <span>
                    <FaCaretDown
                      className=" transition-all 
                        duration-200 group-hover:rotate-180"
                    />
                  </span>
                </a>
                {/* dropdown section */}
                <div
                  className="absolute -left-9 z-[99999]
                 hidden w-[150px] bg-white p-2 
                 shadow-md text-black group-hover:block"
                >
                  <ul className="space-y-3">
                    <li className="p-2 hover:bg-hover hover:text-white">
                      Faites un don {/* dropdown section */}
                    </li>
                    <li className="p-2 hover:bg-hover hover:text-white">
                      About us
                    </li>
                    <li className="p-2 hover:bg-hover hover:text-white">
                      Privacy policy
                    </li>
                  </ul>
                </div>
              </li>
              <li className=" group cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[72px]">
                  Urgences sanitaire{" "}
                  <span>
                    <FaCaretDown
                      className=" transition-all 
                        duration-200 group-hover:rotate-180"
                    />
                  </span>
                </a>
                {/* dropdown full width section */}
                <div
                  className="absolute left-0 z-[99999] hidden w-full rounded-b-3xl
                 bg-white p-2 t ext-black shadow-md group-hover:block"
                >
                  <div className="grid grid-cols-3 gap-5">
                    <div className=" overflow-hidden">
                      <img
                        src="https://picsum.photos/200"
                        alt="not found"
                        className="max-h-[300px] w-full rounded-b-3xl object-fill"
                      />
                    </div>
                    <div className="col-span-2">
                      <h1 className="text-xl font-semibold pb-3 text-black">
                        Best Selling
                      </h1>
                      <p className=" text-sm text-slate-600">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Officia unde voluptatibus possimus obcaecati nisi
                        temporibus ullam eligendi adipisci. Ea, consectetur.
                        Sequi, eligendi doloribus, consequuntur, molestias vel
                        delectus quo consequatur aut magni natus esse sapiente
                        eum necessitatibus repellendus nisi veritatis saepe.
                        <div className=" grid grid-cols-3 mt-4">
                          <div>
                            <h1 className="pb-1 text-xl font-semibold">
                              Developement
                            </h1>
                            <ul className="space-y-2">
                              <li
                                className="cursor-pointer text-black/80
                              hover:text-primary"
                              >
                                Web Developement
                              </li>
                              <li
                                className="cursor-pointer text-black/80
                              hover:text-primary"
                              >
                                Mobile Developement
                              </li>
                              <li
                                className="cursor-pointer text-black/80
                              hover:text-primary"
                              >
                                Software Developement
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h1 className="pb-1 text-xl font-semibold">
                              Developement
                            </h1>
                            <ul className="space-y-2">
                              <li
                                className="cursor-pointer text-black/80
                              hover:text-primary"
                              >
                                Web Developement
                              </li>
                              <li
                                className="cursor-pointer text-black/80
                              hover:text-primary"
                              >
                                Mobile Developement
                              </li>
                              <li
                                className="cursor-pointer text-black/80
                              hover:text-primary"
                              >
                                Software Developement
                              </li>
                            </ul>
                          </div>
                          <div>
                            <img
                              src="https://picsum.photos/180"
                              alt="not found"
                            />
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className=" group cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[72px]">
                  Centre des médias{" "}
                  <span>
                    <FaCaretDown
                      className=" transition-all 
                        duration-200 group-hover:rotate-180"
                    />
                  </span>
                </a>
                {/* dropdown full width section */}
                <div
                  className="absolute left-0 z-[99999] hidden w-full rounded-b-3xl
                 bg-white p-2 t ext-black shadow-md group-hover:block"
                >
                  <div className="grid grid-cols-3 gap-5">
                    <div className=" overflow-hidden">
                      <img
                        src="https://picsum.photos/200"
                        alt="not found"
                        className="max-h-[300px] w-full rounded-b-3xl object-fill"
                      />
                    </div>
                    <div className="col-span-2">
                      <h1 className="text-xl font-semibold pb-3 text-black">
                        Comminiqué de presse
                      </h1>
                      <p className=" text-sm text-slate-600">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Officia unde voluptatibus possimus obcaecati nisi
                        temporibus ullam eligendi adipisci. Ea, consectetur.
                        Sequi, eligendi doloribus, consequuntur, molestias vel
                        delectus quo consequatur aut magni natus esse sapiente
                        eum necessitatibus repellendus nisi veritatis saepe.
                        <div className=" grid grid-cols-3 mt-4">
                          <div>
                            <h1 className="pb-1 text-xl font-semibold">
                              Developement
                            </h1>
                            <ul className="space-y-2">
                              <li
                                className="cursor-pointer text-black/80
                              hover:text-primary"
                              >
                                Web Developement
                              </li>
                              <li
                                className="cursor-pointer text-black/80
                              hover:text-primary"
                              >
                                Mobile Developement
                              </li>
                              <li
                                className="cursor-pointer text-black/80
                              hover:text-primary"
                              >
                                Software Developement
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h1 className="pb-1 text-xl font-semibold">
                              Developement
                            </h1>
                            <ul className="space-y-2">
                              <li
                                className="cursor-pointer text-black/80
                              hover:text-primary"
                              >
                                Web Developement
                              </li>
                              <li
                                className="cursor-pointer text-black/80
                              hover:text-primary"
                              >
                                Mobile Developement
                              </li>
                              <li
                                className="cursor-pointer text-black/80
                              hover:text-primary"
                              >
                                Software Developement
                              </li>
                            </ul>
                          </div>
                          <div>
                            <img
                              src="https://picsum.photos/180"
                              alt="not found"
                            />
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              
              <li className=" group cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[72px]">
                  Notre action{" "}
                  <span>
                    <FaCaretDown
                      className=" transition-all 
                        duration-200 group-hover:rotate-180"
                    />
                  </span>
                </a>
                {/* dropdown full width section */}
                <div
                  className="absolute left-0 z-[99999] hidden w-full rounded-b-3xl
                 bg-white p-2 t ext-black shadow-md group-hover:block"
                >
                  <div className="grid grid-cols-3 gap-5">
                    <div className=" overflow-hidden">
                      <img
                        src="https://picsum.photos/200"
                        alt="not found"
                        className="max-h-[300px] w-full rounded-b-3xl object-fill"
                      />
                    </div>
                    <div className="col-span-2">
                      <h1 className="text-xl font-semibold pb-3 text-black">
                        Best Selling
                      </h1>
                      <p className=" text-sm text-slate-600">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Officia unde voluptatibus possimus obcaecati nisi
                        temporibus ullam eligendi adipisci. Ea, consectetur.
                        Sequi, eligendi doloribus, consequuntur, molestias vel
                        delectus quo consequatur aut magni natus esse sapiente
                        eum necessitatibus repellendus nisi veritatis saepe.
                        <div className=" grid grid-cols-3 mt-4">
                          <div>
                            <h1 className="pb-1 text-xl font-semibold">
                              Developement
                            </h1>
                            <ul className="space-y-2">
                              <li
                                className="cursor-pointer text-black/80
                              hover:text-primary"
                              >
                                Web Developement
                              </li>
                              <li
                                className="cursor-pointer text-black/80
                              hover:text-primary"
                              >
                                Mobile Developement
                              </li>
                              <li
                                className="cursor-pointer text-black/80
                              hover:text-primary"
                              >
                                Software Developement
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h1 className="pb-1 text-xl font-semibold">
                              Developement
                            </h1>
                            <ul className="space-y-2">
                              <li
                                className="cursor-pointer text-black/80
                              hover:text-primary"
                              >
                                Web Developement
                              </li>
                              <li
                                className="cursor-pointer text-black/80
                              hover:text-primary"
                              >
                                Mobile Developement
                              </li>
                              <li
                                className="cursor-pointer text-black/80
                              hover:text-primary"
                              >
                                Software Developement
                              </li>
                            </ul>
                          </div>
                          <div>
                            <img
                              src="https://picsum.photos/180"
                              alt="not found"
                            />
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </li>

              <li className=" group cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[72px]">
                  À Propos{" "}
                  <span>
                    <FaCaretDown
                      className=" transition-all 
                        duration-200 group-hover:rotate-180"
                    />
                  </span>
                </a>
                {/* dropdown full width section */}
                <div
                  className="absolute left-0 z-[99999] hidden w-full rounded-b-3xl
                 bg-white p-2 t ext-black shadow-md group-hover:block"
                >
                  <div className="grid grid-cols-3 gap-5">
                    <div className=" overflow-hidden">
                      <img
                        src="https://picsum.photos/200"
                        alt="not found"
                        className="max-h-[300px] w-full rounded-b-3xl object-fill"
                      />
                    </div>
                    <div className="col-span-2">
                      <h1 className="text-xl font-semibold pb-3 text-black">
                        Best Selling
                      </h1>
                      <p className=" text-sm text-slate-600">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Officia unde voluptatibus possimus obcaecati nisi
                        temporibus ullam eligendi adipisci. Ea, consectetur.
                        Sequi, eligendi doloribus, consequuntur, molestias vel
                        delectus quo consequatur aut magni natus esse sapiente
                        eum necessitatibus repellendus nisi veritatis saepe.
                        <div className=" grid grid-cols-3 mt-4">
                          <div>
                            <h1 className="pb-1 text-xl font-semibold">
                              Developement
                            </h1>
                            <ul className="space-y-2">
                              <li
                                className="cursor-pointer text-black/80
                              hover:text-primary"
                              >
                                Web Developement
                              </li>
                              <li
                                className="cursor-pointer text-black/80
                              hover:text-primary"
                              >
                                Mobile Developement
                              </li>
                              <li
                                className="cursor-pointer text-black/80
                              hover:text-primary"
                              >
                                Software Developement
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h1 className="pb-1 text-xl font-semibold">
                              Developement
                            </h1>
                            <ul className="space-y-2">
                              <li
                                className="cursor-pointer text-black/80
                              hover:text-primary"
                              >
                                Web Developement
                              </li>
                              <li
                                className="cursor-pointer text-black/80
                              hover:text-primary"
                              >
                                Mobile Developement
                              </li>
                              <li
                                className="cursor-pointer text-black/80
                              hover:text-primary"
                              >
                                Software Developement
                              </li>
                            </ul>
                          </div>
                          <div>
                            <img
                              src="https://picsum.photos/180"
                              alt="not found"
                            />
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <button
                  className="h-[40px] w-[150px] rounded-full 
                              bg-hover hover:bg-principal/90"
                >
                  Faire un don
                </button>
              </li>
              <li className=" group relative cursor-pointer">
                <a
                  href="#"
                  className="flex items-center gap-[20px] h-[72px] text-white font-bold"
                >
                  Choisir la langue
                  <span>
                    <FaCaretDown
                      className=" transition-all 
                      duration-200 group-hover:rotate-180"
                    />
                  </span>
                </a>
                {/* dropdown section */}
                <div className="absolute -center-9 z-[99999] hidden w-[150px] bg-white p-2 shadow-md text-black group-hover:block">
                  <ul className="space-y-3">
                    <li className="p-2 hover:bg-hover hover:text-white cursor-pointer">
                      Français {/* dropdown section */}
                    </li>
                    <li className="p-2 hover:bg-hover hover:text-white cursor-pointer">
                      Anglais
                    </li>
                  </ul>
                </div>
              </li>
              {/* Light and dark mode switcher */}
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl cursor-pointer"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl cursor-pointer"
                  onClick={() => setTheme("dark")}
                />
              )}
            </ul>
          </div>
          {/* Mobile menu header */}
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
              <BiSolidSun
                className="text-2xl"
                onClick={() => setTheme("light")}
              />
            ) : (
              <BiSolidMoon
                className="text-2xl"
                onClick={() => setTheme("dark")}
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMe}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMe}
                className=" cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav>
      </header>
      {/* Mobile menu section  dropdown */}
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
}

export default Navbar;
