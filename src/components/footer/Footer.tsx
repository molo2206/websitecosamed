import {useState} from "react";
import Logo from "../../assets/logo1.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import FooterLinks from "./FooterLinks";
import { Link } from "react-router-dom";

const Footer = () => {
  function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    return `${year}`;
  }
  const [currentDate, setCurrentDate] = useState(getDate());

  const importantLinks = [
    {
      name: "Mission",
    },
    {
      name: "Vision",
    },
    {
      name: "Gouvernance",
    },
    {
      name: "Norme de gestion",
    },
    {
      name: "Histoire",
    },
    {
      name: "Finances",
    },
    {
      name: "Publications",
    },
    {
      name: "Histoire",
    },
    {
      name: "Declaration de confidentialité",
    },
    {
      name: "Contactez-nous",
    },
  ];
  const Links = [
    {
      name: "République démocratique du congo(Nord-kivu et Sud-kivu)",
    },
  ];
  return (
    <>
      <footer className="text-white rounded-t-3xl bg-gradient-to-r bg-principal font-montserrat">
        <div className=" container mx-auto  p-4">
          {/* Footer Contain section */}
          <div className="grid py-2 md:grid-cols-3 header__sticky font-montserrat">
            <div className="px-2 py-4">
              <p className="font-montserrat text-xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
                eum alias cumque minima modi mollitia, dolor laudantium ratione
                repellendus quod impedit possimus maxime facere aspernatur fugit
                suscipit inventore libero harum in quibusdam veritatis ad qui
                perspiciatis velit. Odit, aspernatur accus amus? {""}
              </p>
              <br />
              <div className=" flex items-center gap-3">
                <FaLocationArrow />
                <p>Noida,Uttar Pradesh</p>
              </div>
              <div className=" flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p>+42 346 767 3837</p>
              </div>
            </div>
            <div className=" grid grid-cols-2 sm:grid-cols-3 md:pl-10 col-span-2">
              <div className="px-4 py-8">
                <h1 className=" mb-3 text-justify text-1xl font-bold sm:text-left sm:text-2xl">
                  Qui sommes nous
                </h1>
                <ul className=" flex flex-col gap-3">
                  <FooterLinks links={importantLinks} />
                </ul>
              </div>
              <div className="px-4 py-8">
                <h1 className=" mb-3 text-justify text-1xl font-bold sm:text-left sm:text-2xl">
                  Où nous trouver
                </h1>
                <ul className=" flex flex-col gap-3">
                  <FooterLinks links={Links} />
                </ul>
              </div>

              <div className="px-4 py-8">
                <h1 className=" mb-3 text-justify text-1xl font-bold sm:text-left sm:text-2xl">
                  Réseaux sociaux
                </h1>
                <div className=" flex flex-col gap-3">
                  <h1>Subscribe to out newsletter</h1>
                  {/* <input
                    type="text"
                    placeholder="Enter your email"
                    className="rounded-full px-3 py-1 text-black
                     focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  /> */}
                  <div className="flex gap-3 mr-6 items-center">
                    <a href="" className=" duration-200 hover:scale-105">
                      <FaInstagram className=" text-3xl" />
                    </a>
                    <a href="" className=" duration-200 hover:scale-105">
                      <FaFacebook className=" text-3xl" />
                    </a>
                    <a href="" className=" duration-200 hover:scale-105">
                      <FaLinkedinIn className=" text-3xl" />
                    </a>
                  </div>
                  <button
                    className="h-[50px] w-[250px] rounded-lg font-bold bg-white
                   duration-200 hover:scale-105 text-principal"
                  >
                    <Link to="/community/join" onClick={() => window.scroll}>
                      Rejoindre la Communauté
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*    Footer copyright section */}
          <div className=" bottom-footer">
            <div className="md:inline-flex my-10 md:ml-10 shadow rounded-sm w-full  justify-center">
              <img
                src={Logo}
                alt="Logo"
                className=" object-center sticky-logo  sm:w-60 "
              />
            </div>
          </div>
          <div className=" bottom-footer">
            <p className=" border-t-2 border-gray-300/50 py-8 text-center">
              Politique de confidentialité © {currentDate}.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
