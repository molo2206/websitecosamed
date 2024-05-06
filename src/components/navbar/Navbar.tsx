import { useEffect, useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { FaCaretDown, FaHome } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import useSticky from "../../hooks/useSticky";
import Logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";

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
        <nav className="container flex items-center justify-between h-[80px] py-4   ">
          {/* Logo selection */}
          <div className="md:text-3xl text-white hover:text-hover">
            <a href="#" className={`${sticky ? "block" : "hidden"}`}>
              <Link to="/" onClick={() => window.scrollTo}>
                <img src={Logo} alt="" className="sticky-logo h-[65px] w-[70px]" />
              </Link>
            </a>
            <a href="#" className={`${!sticky ? "block" : "hidden"}`}>
              <Link to="/" onClick={() => window.scrollTo}>
                <FaHome size={30} />
              </Link>
            </a>
          </div>
          {/* Desktop menu selection */}
          <div className="hidden md:block font-bold">
            <ul className="flex top-12 left-0 right-0  items-center gap-10">
              <li className=" group relative cursor-pointer">
                <a
                  href="#"
                  className="flex items-center gap-[2px] h-[72px] hover:text-hover"
                >
                  Thèmes de santé{""}
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
                 hidden w-[250px] bg-white p-2 
                 shadow-md  text-black
                 dark:bg-gray-800 dark:text-white group-hover:block"
                >
                  <ul className="space-y-3">
                    <li className="p-2 hover:bg-hover hover:text-white">
                      Actualité santé {/* dropdown section */}
                    </li>
                    <li className="p-2 hover:bg-hover hover:text-white">
                      Attaques sur le système de santé(SSA)
                    </li>
                    <li className="p-2 hover:bg-hover hover:text-white">
                      Couverture Sanitaire Universelle(CSU)
                    </li>
                    <li className="p-2 hover:bg-hover hover:text-white">
                      Développement Proffessionnel Continue
                    </li>
                    <li className="p-2 hover:bg-hover hover:text-white">
                      Ebola
                    </li>
                    <li className="p-2 hover:bg-hover hover:text-white">
                      Covid
                    </li>
                    <li className="p-2 hover:bg-hover hover:text-white">
                      Education sanitaire
                    </li>
                    <li className="p-2 hover:bg-hover hover:text-white">
                      Maladie transmissible
                    </li>
                    <li className="p-2 hover:bg-hover hover:text-white">
                      Médecine clinique
                    </li>
                    <li className="p-2 hover:bg-hover hover:text-white">
                      Monitoring de la santé (Alert et Gaps)
                    </li>
                    <li className="p-2 hover:bg-hover hover:text-white">
                      Santé mentale
                    </li>
                    <li className="p-2 hover:bg-hover hover:text-white">
                      Santé publique
                    </li>
                    <li className="p-2 hover:bg-hover hover:text-white">
                      Surveillance des maladies
                    </li>
                  </ul>
                </div>
              </li>

              <li className="group cursor-pointer ">
                <a
                  href="#"
                  className="flex items-center gap-[2px] h-[72px] hover:text-hover"
                >
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
                  className="absolute left-0 z-[99999] hidden w-full rounded-b-3xl bg-white text-black
                 dark:bg-gray-800 dark:text-white p-2 t ext-black shadow-md group-hover:block"
                >
                  <div className="grid grid-cols-4 gap-5 ">
                    <div className=" overflow-hidden">
                      <img
                        src="https://picsum.photos/200"
                        alt="not found"
                        className="max-h-[300px] w-full rounded-b-3xl object-fill"
                      />
                    </div>
                    <div className="col-span-2">
                      <h1 className="text-xl font-semibold pb-3  hover:text-hover">
                        Actualités
                      </h1>
                      <p className=" text-sm">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Officia unde voluptatibus possimus obcaecati nisi
                        temporibus ullam eligendi adipisci. Ea, consectetur.
                        Sequi, eligendi doloribus, consequuntur, molestias vel
                        delectus quo consequatur aut magni natus esse sapiente
                        eum necessitatibus repellendus nisi veritatis saepe.
                        <div className=" grid grid-cols-4 mt-4">
                          <div>
                            <h1 className="pb-1 text-principal text-xl font-semibold hover:text-hover">
                              <Link
                                to="/data-loading/newsletters"
                                onClick={() => window.scroll}
                              >
                                Bulletins d'information
                              </Link>
                            </h1>
                          </div>
                          <div>
                            <h1 className="pb-1 text-principal text-xl font-semibold hover:text-hover">
                              <Link
                                to="/data-loading/reports"
                                onClick={() => window.scroll}
                              >
                                Rapport de situation
                              </Link>
                            </h1>
                          </div>
                          <div>
                            <h1 className="pb-1 text-principal text-xl font-semibold hover:text-hover">
                              <Link
                                to="/data-loading/jobopenings"
                                onClick={() => window.scroll}
                              >
                                Offres d'emploi
                              </Link>
                            </h1>
                          </div>
                          <div>
                            <h1 className="pb-1 text-principal text-xl font-semibold hover:text-hover">
                              <Link
                                to="/data-loading/othersdoc"
                                onClick={() => window.scroll}
                              >
                                Autres documents
                              </Link>
                            </h1>
                          </div>
                          {/* <div>
                            <img
                              src="https://picsum.photos/180"
                              alt="not found"
                            />
                          </div> */}
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className=" group cursor-pointer">
                <a
                  href="#"
                  className="flex items-center gap-[2px] h-[72px] hover:text-hover"
                >
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
                  className="absolute left-0 z-[99999] hidden w-full rounded-b-3xl bg-white text-black
                  dark:bg-gray-800 dark:text-white p-2 t ext-black shadow-md group-hover:block"
                >
                  <div className="grid grid-cols-4 mt-4">
                    <div className=" overflow-hidden">
                      <img
                        src="https://picsum.photos/200"
                        alt="not found"
                        className="max-h-[300px] w-full rounded-b-3xl object-fill"
                      />
                    </div>
                    <div className="col-span-2">
                      <h1 className="text-xl font-semibold pb-3">Actualités</h1>
                      <p className=" text-sm ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Officia unde voluptatibus possimus obcaecati nisi
                        temporibus ullam eligendi adipisci. Ea, consectetur.
                        Sequi, eligendi doloribus, consequuntur, molestias vel
                        delectus quo consequatur aut magni natus esse sapiente
                        eum necessitatibus repellendus nisi veritatis saepe.
                        <div className="grid grid-cols-5 mt-5">
                          <div>
                            <h1 className="pb-1 text-principal text-xl font-semibold hover:text-hover">
                              Comminiqué de presse
                            </h1>
                          </div>
                          <div>
                            <h1 className="pb-1 text-principal text-xl font-semibold hover:text-hover">
                              <Link
                                to="/data-loading/videos"
                                onClick={() => window.scroll}
                              >
                                Nos vidéos
                              </Link>
                            </h1>
                          </div>
                          <div>
                            <h1 className="pb-1 text-principal text-xl font-semibold hover:text-hover">
                              <Link
                                to="/data-loading/podcast"
                                onClick={() => window.scroll}
                              >
                                Podcast
                              </Link>
                            </h1>
                          </div>
                          <div>
                            <h1 className="pb-1 text-principal text-xl font-semibold hover:text-hover">
                              <Link
                                to="/data-loading/blogs"
                                onClick={() => window.scroll}
                              >
                                Blog
                              </Link>
                            </h1>
                          </div>
                          <div>
                            <h1 className="pb-1 text-principal text-xl font-semibold hover:text-hover">
                              Evenements
                            </h1>
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className=" group cursor-pointer">
                <a
                  href="#"
                  className="flex items-center gap-[2px] h-[72px] hover:text-hover"
                >
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
                  bg-white text-black 
                  dark:bg-gray-800 dark:text-white p-2 t ext-black shadow-md group-hover:block"
                >
                  <div className="grid grid-cols-3 gap-5">
                    <div className=" overflow-hidden">
                      <img
                        src="https://picsum.photos/200"
                        alt="not found"
                        className="max-h-[300px] w-full rounded-b-3xl object-fill"
                      />
                    </div>
                    <div className="col-span-2 ">
                      <h1 className="text-xl font-semibold pb-3 hover:text-hover">
                        Projet
                      </h1>
                      <p className=" text-sm ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Officia unde voluptatibus possimus obcaecati nisi
                        temporibus ullam eligendi adipisci. Ea, consectetur.
                        Sequi, eligendi doloribus, consequuntur, molestias vel
                        delectus quo consequatur aut magni natus esse sapiente
                        eum necessitatibus repellendus nisi veritatis saepe.
                        <div className=" grid grid-cols-3 mt-4">
                          <div>
                            <h1 className="pb-1 text-xl text-principal font-semibold hover:text-hover">
                              Projet encours
                            </h1>
                            {/* <ul className="space-y-2">
                              <li
                                className="cursor-pointer 
                              hover:text-primary"
                              >
                                xxx
                              </li>
                              <li
                                className="cursor-pointer 
                              hover:text-primary"
                              >
                                xxx
                              </li>
                              <li
                                className="cursor-pointer 
                              hover:text-primary"
                              >
                                xxx
                              </li>
                            </ul> */}
                          </div>
                          <div>
                            <h1 className="pb-1 text-xl text-principal font-semibold hover:text-hover">
                              Projets écoulés
                            </h1>
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </li>

              <li className=" group cursor-pointer">
                <a
                  href="#"
                  className="flex items-center gap-[2px] h-[72px] hover:text-hover"
                >
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
                  bg-white text-black
                  dark:bg-gray-800 dark:text-white p-2 t ext-black shadow-md group-hover:block"
                >
                  <div className="grid grid-cols-3 gap-5">
                    <div className=" overflow-hidden">
                      <img
                        src="https://picsum.photos/200"
                        alt="not found"
                        className="max-h-[300px] w-full rounded-b-3xl object-fill"
                      />
                    </div>
                    <div className="col-span-2 ">
                      <h1 className="text-xl font-semibold pb-3 hover:text-hover">
                        À propos
                      </h1>
                      <p className=" text-sm ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Officia unde voluptatibus possimus obcaecati nisi
                        temporibus ullam eligendi adipisci. Ea, consectetur.
                        Sequi, eligendi doloribus, consequuntur, molestias vel
                        delectus quo consequatur aut magni natus esse sapiente
                        eum necessitatibus repellendus nisi veritatis saepe.
                        <div className=" grid grid-cols-4 mt-4 ">
                          <div>
                            <h1 className="pb-1 text-xl text-principal font-semibold cursor-pointer hover:text-hover">
                              <Link
                                to="/contact"
                                onClick={() => window.scrollTo(0, 0)}
                              >
                                Contactez-nous
                              </Link>
                            </h1>
                          </div>
                          <div>
                            <h1 className="pb-1 text-xl text-principal font-semibold hover:text-hover">
                              Partenariats
                            </h1>
                          </div>
                          <div>
                            <h1 className="pb-1 text-xl text-principal font-semibold hover:text-hover">
                              Financement
                            </h1>
                          </div>
                          <div>
                            <h1 className="pb-1 text-xl text-principal font-semibold hover:text-hover">
                              Gouvernance
                            </h1>
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <button
                  className="h-[40px] w-[180px] rounded-lg 
                              bg-hover hover:bg-hover/90"
                >
                  Faire un don
                </button>
              </li>
              <li className=" group relative cursor-pointer">
                <a
                  href="#"
                  className="flex items-center gap-[20px] h-[72px] text-white font-bold hover:text-hover"
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
                  className="text-2xl cursor-pointer hover:text-hover"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl cursor-pointer hover:text-hover"
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
