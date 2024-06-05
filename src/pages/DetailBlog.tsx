import { Link, useParams } from "react-router-dom";
import useAsync from "../hooks/useAsync";
import BlogServices from "../services/BlogsServices";
import { showingTranslateValue } from "../utils/heleprs";
import { useAuthContext } from "../context";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Input from "../components/form/Input";
import Button from "../components/form/Button";
import BlogDetailLoad from "../components/blogs/BlogDetailLoad";
import Blogs from "../components/blogs/Blogs";

const DetailBlog = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { lang } = useAuthContext();
  const { data, loading } = useAsync(() => BlogServices.oneBlog(id),id);
  return (
    <>
      {loading ? (
        Array.from(Array(20).keys()).map(() => <BlogDetailLoad />)
      ) : (
        <div className="container dark:bg-slate-900 w-full dark:text-white py-1 ">
          <p className="text-md py-3 font-semibold">
            Page d'accueil/blog/detail/
            {showingTranslateValue(data?.translations, lang)?.title}
          </p>
          <p className="text-sm py-3">
            <p className=" font-semibold text-lg text-principal ">
              {showingTranslateValue(data?.category?.translations, lang)?.name}
            </p>
          </p>
          <div className="overflow-hidden">
            <img
              src={data.image}
              alt=""
              className="mx-auto w-full 
            object-cover transition duration-700 "
            />
          </div>
          <div className=" py-2">
            <p
              className="  font-montserrat text-lg"
              dangerouslySetInnerHTML={{
                __html: showingTranslateValue(data?.translations, lang)
                  ?.documentation,
              }}
            ></p>
            <div className="  pb-14 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 row">
                <div className="col-span-2 col-lg-8 col-md-8 px-4">
                  <h1 className=" text-2xl font-semibold mb-10">
                    {showingTranslateValue(data?.translations, lang)?.title}
                  </h1>
                  <div
                    className="text-lg font-montserrat"
                    dangerouslySetInnerHTML={{
                      __html: showingTranslateValue(data?.translations, lang)
                        ?.description,
                    }}
                  ></div>
                </div>
                <div className="col-span-1 md:col-lg-4 col-md-4 gap-3 px-4 py-8">
                  <div className="px-4 py-8  bg-principal ">
                    <h1 className=" mb-3 text-justify text-1xl font-bold sm:text-left sm:text-2xl">
                      {t("Share_on")}
                    </h1>
                    <div className=" flex flex-col gap-3 ">
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
                    </div>
                  </div>
                  <div className="p-4 shadow-2xl border border-lg">
                    <div className="overflow-hidden h-[250px]">
                      <h1 className=" text-xl font-montserrat font-semibold">
                        {t("Stay_inform")}
                      </h1>
                      <form className="mt-8 space-y-6 mb-8">
                        <div className="space-y-px rounded-md items-center">
                          <Input
                            type={"text"}
                            label={"Email"}
                            placeholder={t("Enter_email")}
                          />
                        </div>
                        <Button loading={false} label={t("Becom_member")} />
                        <div className="justify-center items-center">
                          <div className="mb-2">
                            <p className="text-sm font-montserrat text-slate-700 dark:text-slate-600 text-justify">
                              <Link
                                to="/privacy-policy"
                                className="text-principal font-bold"
                                target="_blank"
                              ></Link>
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="px-4 py-8  bg-principal text-white border border-lg">
                    <h1 className=" mb-3 text-justify text-1xl font-bold sm:text-left sm:text-2xl">
                      {t("Reiceve_news")}
                    </h1>
                  </div>
                  <div className="p-4 shadow-2xl border border-lg py-10">
                    <div className="overflow-hidden h-[150px] py-12">
                      <Button loading={false} label={t("Contact")} />
                    </div>
                  </div>
                  <div className="px-4 py-8  bg-principal text-white border border-lg">
                    <h1 className=" mb-3 text-justify text-1xl font-bold sm:text-left sm:text-2xl">
                      {t("Follow_use")}
                    </h1>
                    <div className="flex gap-4 mr-8 items-center">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className=" border-t-2 border-gray-300/50 py-4 text-center"></p>
          <Blogs />
        </div>
      )}
    </>
  );
};

export default DetailBlog;
