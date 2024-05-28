import { Link, useParams } from "react-router-dom";
import useAsync from "../hooks/useAsync";
import BlogServices from "../services/BlogsServices";
import { showingTranslateValue } from "../utils/heleprs";
import { useAuthContext } from "../context";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Input from "../components/form/Input";
import Button from "../components/form/Button";
import { CiCalendar } from "react-icons/ci";
import { LuUser } from "react-icons/lu";

const DetailBlog = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { lang } = useAuthContext();
  const { data, loading } = useAsync(() => BlogServices.oneBlog(id));
  console.log(data);
  return (
    <div className="container dark:bg-slate-900 w-full dark:text-white py-1 ">
      <p className="text-md py-3 font-semibold">
        Page d'accueil/blog/detail/
        {showingTranslateValue(data?.translations, lang)?.title}
      </p>
      <p className="text-sm py-3">
        <p className=" font-semibold text-lg text-principal dark:text-white">
          {showingTranslateValue(data?.category?.translations, lang)?.name}
        </p>
      </p>
      <div className=" h-[550px] overflow-hidden">
        <img
          src={data.image}
          alt=""
          className="mx-auto h-[550px] w-full 
          object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
        />
      </div>
      <div className="">
        <div className=" container pb-14">
          <div className="grid grid-cols-3 row">
            <div className="col-span-2 col-lg-8 col-md-8">
              <h1 className=" text-2xl font-semibold mb-10">
                {showingTranslateValue(data?.translations, lang)?.title}
              </h1>

              <div
                className="text-md"
                dangerouslySetInnerHTML={{
                  __html: showingTranslateValue(data?.translations, lang)
                    ?.description,
                }}
              ></div>
              <p className=" border-t-2 border-gray-300/50 py-4 text-center"></p>
            </div>
            <div className="col-span-1 col-lg-4 col-md-4 gap-3 py-10 ">
              <div className="px-4 py-8  bg-principal text-white">
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
              <div className="p-4 shadow-2xl">
                <div className="overflow-hidden h-[350px]">
                  <h1 className=" text-xl font-montserrat font-semibold">
                    {t("Stay_inform")}
                  </h1>
                  <form className="mt-8 space-y-6 mb-8">
                    <div className="space-y-px rounded-md items-center">
                      <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-1 gap-4">
                        <Input
                          type={"text"}
                          label={"Email"}
                          placeholder={t("Enter_email")}
                        />
                      </div>
                    </div>
                    <Button loading={false} label={t("Becom_member")} />
                    <div className="justify-center items-center">
                      <div className="mb-2">
                        <p className="text-sm font-montserrat text-slate-700 dark:text-slate-600 text-justify">
                          {t("clicking_continue")}
                          <Link
                            to="/privacy-policy"
                            className="text-principal font-bold"
                            target="_blank"
                          >
                            {t("Privacy_Policy")}
                          </Link>
                          . Vous recevrez peut-être des notifications par email
                          de notre part.
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="p-4 shadow-2xl">
                <div className="overflow-hidden h-1050px]">
                  <h1 className=" text-xl font-montserrat font-semibold">
                    {t("make_donation")}
                  </h1>
                  <Button loading={false} label={t("donate")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;
