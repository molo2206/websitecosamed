import Layout from "../components/navbar/Layout";
import Footer from "../components/footer/Footer";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className=" dark:bg-gray-900">
      <Layout />
      <section className="py-16">
        <div className="max-w-6xl mx-auto md:p-16 xl:p-20 ">
          <div className="lg:w-2/3 space-y-5 text-center mx-auto">
            <h1
              className="text-gray-800 uppercase tracking-widest
             dark:text-white font-medium text-4xl"
            >
              Get in touch
            </h1>
            <div className="h-0.5 bg-hover w-14 mx-auto"></div>
            <p className="text-gray-400 dark:text-gray-300 text-base leading-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
              omnis nemo sint, ex provident officiis error, rerum tempora, vero
              tempore incidunt fugiat ullam non ipsa illum veritatis. Suscipit
              nostrum ipsa nesciunt eaque.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
            <div>
              <address>
                <div className=" mb-6">
                  <h2 className="text-base font-medium mb-2 dark:text-white">
                    Office Address 1:
                  </h2>
                  <p className="text-gray-400 dark:text-gray-300 text-sm font-medium leading-5">
                    RDC, Nord-Kivu, Goma, Q. Katindo.
                  </p>
                </div>
                <div>
                  <h2 className="text-base font-medium mb-2 dark:text-white">
                    Office Address 2:
                  </h2>
                  <p className="text-gray-400 dark:text-gray-300 text-sm font-medium leading-5">
                    RDC, Nord-Kivu, Goma, Q. Majengo.
                  </p>
                </div>
              </address>
            </div>
            <div className="lg:col-span-2">
              <form action=" flexed ">
                <div className="mb-4">
                  <label
                    className="font-semibold mb-2 text-slate-600 dark:text-slate-400"
                    htmlFor=""
                  >
                    Your name
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder=""
                    className="  w-full px-3 py-2 rounded-lg
                    bg-white border focus:border-hover border-principal"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="font-semibold mb-2  text-slate-600 dark:text-slate-400"
                    htmlFor=""
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    className=" w-full px-3 py-2 rounded-lg  
                 bg-white focus:border-hover border border-principal"
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
                    rows={10}
                    className=" w-full px-3 py-2 rounded-lg  bg-white
                    border border-principal border-hover"
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
