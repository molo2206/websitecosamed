import Layout from "../components/navbar/Layout";
import Footer from "../components/footer/Footer";
import {
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
const ContactUs = () => {
  return (
    <div>
      <Layout />
      <section className=" bg-slate-100 dark:bg-slate-900 dark:text-white">
        <div className=" container flex flex-col items-center justify-center py-10 md:h-[500px]">
          <div className=" grid grid-cols-1 items-center gap-4 md:grid-cols-2">
            {/* text container */}
            <div
              className={`flex flex-col items-start gap-4 text-center 
          md:items-start md:p-8 md:text-left "md:order-last" : ""}`}
            >
              <h1 className="text-2xl md:text-4xl">
                We Build Apps That Get Trending On Appworld
              </h1>
              <p className=" text-sm text-slate-600 dark:text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus nemo nam sunt officiis placeat corporis voluptate
                laboriosam dolorum magni fugit?
              </p>
              <div>
                <ul className=" flex list-inside list-disc flex-col gap-2 md:gap-4">
                  <li className=" font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, totam!
                  </li>
                  <li className=" font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, totam!
                  </li>
                  <li className=" font-medium">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, totam!
                  </li>
                </ul>
              </div>
            </div>
            {/* image container */}
            <div className="flex flex-col items-center">
              <form action=" flexed ">
                <h1>Contactez nous</h1>
                <div className="mb-4">
                  <label
                    className="font-semibold mb-2 text-slate-600 dark:text-slate-400"
                    htmlFor=""
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className=" w-full max-w-md px-4 py-2 rounded-lg border-principal
                 bg-white focus:border-hover"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="font-semibold mb-2 text-slate-600 dark:text-slate-400"
                    htmlFor=""
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    className=" w-full px-3 py-2 rounded-lg
                 bg-white focus:border-hover border-principal"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="font-semibold mb-2 text-slate-600 dark:text-slate-400"
                    htmlFor=""
                  >
                    Your Message
                  </label>
                  <textarea
                    
                    className=" w-full px-3 py-2 rounded-lg bg-white
                    border-principal border-hover"
                    placeholder=""
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-hover font-semibold text-white h-[60px] w-[150px]
               px-4 py-2 rounded-lg hover:pink-600 focus:outline-white"
                  >
                    Send Message
                  </button>
                </div>
                <br />
                <div className="flex gap-3 mr-6 items-center">
                  <a href="" className=" duration-200 hover:scale-105">
                    <FaWhatsapp className=" text-3xl" />
                  </a>
                  <a href="" className=" duration-200 hover:scale-105">
                    <FaTelegram className=" text-3xl" />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
