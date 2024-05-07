import Layout from "../components/navbar/Layout";
import Footer from "../components/footer/Footer";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className=" dark:bg-gray-900">
      <Layout />
      <section className="py-16 ">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16 px-8 pt-6 pb-8 mb-4">
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
              <form
                action=""
                className="bg-white shadow-md rounded
                 px-8 pt-6 pb-8 mb-4 dark:bg-slate-900 border border-slate-400 dark:text-slate-400"
              >
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Message
                  </label>
                  <textarea rows={10}
                    className="shadow appearance-none border rounded w-full py-2 px-3
                     text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    name="message"
                    type="text"
                    placeholder="Your message"
                  ></textarea>
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
