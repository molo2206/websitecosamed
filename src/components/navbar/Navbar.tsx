import { useEffect, useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { FaCaretDown, FaHome } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import useSticky from "../../hooks/useSticky";
import Logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";
import { GoProject } from "react-icons/go";
import { MdContactMail } from "react-icons/md";
import { BiDonateHeart } from "react-icons/bi";
import { CiMoneyCheck1 } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
import { PiNewspaperClippingFill } from "react-icons/pi";
import { CiVideoOn } from "react-icons/ci";
import { FaPodcast } from "react-icons/fa6";
import { FaBlog } from "react-icons/fa";
import { BsCalendar2Event } from "react-icons/bs";
import { BiSolidReport } from "react-icons/bi";
import { MdLocalOffer } from "react-icons/md";
import { IoIosDocument } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useAuthContext } from "../../context";

function Navbar() {
  const { handleLanguageChange, lang } = useAuthContext();
  const { t } = useTranslation();
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
        <nav className="container flex items-center justify-between h-[80px] py-4 ">
          {/* Logo selection */}
          <div className=" text-white ">
            <a href="#" className={`${sticky ? "block" : "hidden"}`}>
              <Link to="/" onClick={() => window.scrollTo}>
                <img
                  src={Logo}
                  alt=""
                  className="sticky-logo sm:w-60   sm:h-70"
                />
              </Link>
            </a>
            <a href="#" className={`${!sticky ? "block" : "hidden"}`}>
              <Link to="/" onClick={() => window.scrollTo}>
                <FaHome size={30} />
              </Link>
            </a>
          </div>
          {/* Desktop menu selection */}
          <div className="hidden md:block font-bold font-montserrat">
            <ul className="flex top-12 left-0 right-0  items-center gap-10 font-montserrat">
              <li className="group cursor-pointer ">
                <a href="#" className="flex items-center gap-[2px] h-[72px] ">
                  {t("Themes")}
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
                    <div className=" overflow-hidden py-8">
                      <img
                        src="https://picsum.photos/200"
                        alt="not found"
                        className="max-h-[500px] w-full rounded-b-3xl object-fill"
                      />
                    </div>
                    <div className="col-span-2">
                      <p className=" text-sm">
                        <div className=" grid grid-cols-4 mt-6">
                          <div>
                            <h1 className=" pb-1 hover:text-gray-700 text-principal text-xl font-semibold ">
                              <Link
                                to="/data-loading/newsletters"
                                onClick={() => window.scroll}
                              >
                                {t("Healthnews")}
                              </Link>
                            </h1>
                          </div>
                          <div>
                            <h1 className=" pb-1 hover:text-gray-700 text-principal text-xl font-semibold ">
                              <Link
                                to="/data-loading/reports"
                                onClick={() => window.scroll}
                              >
                                {t("Attack")}
                              </Link>
                            </h1>
                          </div>
                          <div>
                            <h1 className=" pb-1 hover:text-gray-700 text-principal text-xl font-semibold ">
                              <Link
                                to="/data-loading/jobopenings"
                                onClick={() => window.scroll}
                              >
                                {t("Blanket")}
                              </Link>
                            </h1>
                          </div>
                          <div>
                            <h1 className=" pb-1 hover:text-gray-700 text-principal text-xl font-semibold ">
                              <Link
                                to="/data-loading/othersdoc"
                                onClick={() => window.scroll}
                              >
                                {t("Developpement")}
                              </Link>
                            </h1>
                          </div>
                          <div>
                            <h1 className=" pb-1 hover:text-gray-700 text-principal text-xl font-semibold ">
                              <Link
                                to="/data-loading/othersdoc"
                                onClick={() => window.scroll}
                              >
                                {t("Ebola")}
                              </Link>
                            </h1>
                          </div>
                          <div>
                            <h1 className=" pb-1 hover:text-gray-700 text-principal text-xl font-semibold ">
                              <Link
                                to="/data-loading/othersdoc"
                                onClick={() => window.scroll}
                              >
                                {t("Covid")}
                              </Link>
                            </h1>
                          </div>
                          <div>
                            <h1 className=" pb-1 hover:text-gray-700 text-principal text-xl font-semibold ">
                              <Link
                                to="/data-loading/othersdoc"
                                onClick={() => window.scroll}
                              >
                                {t("Health")}
                              </Link>
                            </h1>
                          </div>
                          <div>
                            <h1 className=" pb-1 hover:text-gray-700 text-principal text-xl font-semibold ">
                              <Link
                                to="/data-loading/othersdoc"
                                onClick={() => window.scroll}
                              >
                                {t("Disease")}
                              </Link>
                            </h1>
                          </div>
                          <div>
                            <h1 className=" pb-1 hover:text-gray-700 text-principal text-xl font-semibold ">
                              <Link
                                to="/data-loading/othersdoc"
                                onClick={() => window.scroll}
                              >
                                {t("Clinical")}
                              </Link>
                            </h1>
                          </div>
                          <div>
                            <h1 className=" pb-1 hover:text-gray-700 text-principal text-xl font-semibold ">
                              <Link
                                to="/data-loading/othersdoc"
                                onClick={() => window.scroll}
                              >
                                {t("Monitoring")}
                              </Link>
                            </h1>
                          </div>
                          <div>
                            <h1 className=" pb-1 hover:text-gray-700 text-principal text-xl font-semibold ">
                              <Link
                                to="/data-loading/othersdoc"
                                onClick={() => window.scroll}
                              >
                                {t("Mental")}
                              </Link>
                            </h1>
                          </div>
                          <div>
                            <h1 className=" pb-1 hover:text-gray-700 text-principal text-xl font-semibold ">
                              <Link
                                to="/data-loading/othersdoc"
                                onClick={() => window.scroll}
                              >
                                {t("PublicHealth")}
                              </Link>
                            </h1>
                          </div>
                          <div>
                            <h1 className=" pb-1 hover:text-gray-700 text-principal text-xl font-semibold ">
                              <Link
                                to="/data-loading/othersdoc"
                                onClick={() => window.scroll}
                              >
                                {t("Surveillance")}
                              </Link>
                            </h1>
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="group cursor-pointer ">
                <a href="#" className="flex items-center gap-[2px] h-[72px] ">
                  {t("Emergency")}
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
                      <div className=" grid grid-cols-4 mt-4">
                        <div>
                          <h1 className=" pb-1 hover:text-gray-700 text-principal text-xl font-semibold ">
                            <Link
                              to="/data-loading/newsletters"
                              onClick={() => window.scroll}
                            >
                              <FaBlog size={40} />
                              {t("Newsletters")}
                            </Link>
                          </h1>
                        </div>
                        <div>
                          <h1 className=" pb-1 hover:text-gray-700 text-principal text-xl font-semibold ">
                            <Link
                              to="/data-loading/reports"
                              onClick={() => window.scroll}
                            >
                              <BiSolidReport size={40} />
                              {t("Reports")}
                            </Link>
                          </h1>
                        </div>
                        <div>
                          <h1 className=" pb-1 hover:text-gray-700 text-principal text-xl font-semibold ">
                            <Link
                              to="/data-loading/jobopenings"
                              onClick={() => window.scroll}
                            >
                              <MdLocalOffer size={40} />
                              {t("Jobs")}
                            </Link>
                          </h1>
                        </div>
                        <div>
                          <h1 className=" pb-1 hover:text-gray-700 text-principal text-xl font-semibold ">
                            <Link
                              to="/data-loading/othersdoc"
                              onClick={() => window.scroll}
                            >
                              <IoIosDocument size={40} />
                              {t("Other")}
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
                    </div>
                  </div>
                </div>
              </li>
              <li className=" group cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[72px] ">
                  {t("Newsroom")}
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
                      <div className="grid grid-cols-5 mt-5">
                        <div>
                          <h1 className=" pb-1 hover:text-gray-700 text-principal text-xl font-semibold ">
                            <Link to="" onClick={() => window.scroll(0, 0)}>
                              <PiNewspaperClippingFill size={40} />
                              {t("Press")}
                            </Link>
                          </h1>
                        </div>
                        <div>
                          <h1 className=" pb-1 hover:text-gray-700 text-principal text-xl font-semibold ">
                            <Link
                              to="/data-loading/videos"
                              onClick={() => window.scroll}
                            >
                              <CiVideoOn size={40} />
                              {t("Videos")}
                            </Link>
                          </h1>
                        </div>
                        <div>
                          <h1 className=" pb-1 hover:text-gray-700 text-principal text-xl font-semibold ">
                            <Link
                              to="/data-loading/podcast"
                              onClick={() => window.scroll}
                            >
                              <FaPodcast size={40} />
                              {t("Podcast")}
                            </Link>
                          </h1>
                        </div>
                        <div>
                          <h1 className=" pb-1 hover:text-gray-700 text-principal text-xl font-semibold ">
                            <Link
                              to="/data-loading/blogs"
                              onClick={() => window.scroll}
                            >
                              <FaBlog size={40} />
                              {t("Blog")}
                            </Link>
                          </h1>
                        </div>
                        <div>
                          <h1 className=" pb-1 hover:text-gray-700 text-principal text-xl font-semibold ">
                            <Link to="" onClick={() => window.scroll(0, 0)}>
                              <BsCalendar2Event size={40} />
                              {t("Events")}
                            </Link>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className=" group cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[72px] ">
                  {t("Ouractions")}
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
                      <div className=" grid grid-cols-3 mt-4">
                        <div>
                          <h1 className=" pb-1 hover:text-gray-700 text-xl text-principal font-semibold ">
                            <GoProject size={40} className="" />
                            {t("Ongoing")}
                          </h1>
                        </div>
                        <div>
                          <h1 className=" pb-1 hover:text-gray-700 text-xl text-principal font-semibold ">
                            <GoProject size={40} className="" />
                            {t("Completed")}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className=" group cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[72px] ">
                  {t("AboutUs")}
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
                      <h1 className="text-xl font-semibold pb-3 ">À propos</h1>
                      <p className=" text-sm ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Officia unde voluptatibus possimus obcaecati nisi
                        temporibus ullam eligendi adipisci. Ea, consectetur.
                        Sequi, eligendi doloribus, consequuntur, molestias vel
                        delectus quo consequatur aut magni natus esse sapiente
                        eum necessitatibus repellendus nisi veritatis saepe.
                        <div className=" grid grid-cols-4 mt-4 ">
                          <div>
                            <h1 className=" pb-1 hover:text-gray-700 text-xl text-principal font-semibold cursor-pointer ">
                              <Link
                                to="/contact"
                                onClick={() => window.scrollTo(0, 0)}
                              >
                                <MdContactMail size={40} />
                                Contactez-nous
                              </Link>
                            </h1>
                          </div>
                          <div>
                            <h1 className=" pb-1 hover:text-gray-700 text-xl text-principal font-semibold ">
                              <Link to="" onClick={() => window.scroll(0, 0)}>
                                <BiDonateHeart size={40} />
                                Partenariats
                              </Link>
                            </h1>
                          </div>
                          <div>
                            <h1 className=" pb-1 hover:text-gray-700 text-xl text-principal font-semibold ">
                              <Link to="" onClick={() => window.scroll(0, 0)}>
                                <CiMoneyCheck1 size={40} />
                                Financement
                              </Link>
                            </h1>
                          </div>
                          <div>
                            <h1 className=" pb-1 hover:text-gray-700 text-xl text-principal font-semibold ">
                              <Link to="" onClick={() => window.scroll(0, 0)}>
                                <MdManageAccounts size={40} />
                                Gouvernance
                              </Link>
                            </h1>
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/community/donate" onClick={() => window.scroll}>
                  <button
                    className="h-[40px] w-[180px] rounded-lg 
                              bg-white text-principal font-semibold text-center"
                  >
                    {t("Donate")}
                  </button>
                </Link>
              </li>
              <li className=" group relative cursor-pointer">
                <a
                  href="#"
                  className="flex items-center gap-[20px] h-[72px] text-white font-bold "
                >
                  {lang === "en" ? "Anglais" : "Français"}
                  <span>
                    <FaCaretDown
                      className=" transition-all 
                      duration-200 group-hover:rotate-180"
                    />
                  </span>
                </a>
                {/* dropdown section */}
                <div className="absolute -center-9 z-[99999] hidden w-[150px] rounded-lg bg-white p-2 shadow-md text-black group-hover:block">
                  <ul className="space-y-3">
                    <li
                      role="button"
                      onClick={() => handleLanguageChange("fr")}
                      className="p-2  hover:text-principal cursor-pointer"
                    >
                      Français
                    </li>
                    <li
                      role="button"
                      onClick={() => handleLanguageChange("en")}
                      className="p-2  hover:text-principal cursor-pointer"
                    >
                      Anglais
                    </li>
                  </ul>
                </div>
              </li>
              {/* Light and dark mode switcher */}
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl cursor-pointer "
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl cursor-pointer "
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
