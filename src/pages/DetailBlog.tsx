import { useParams } from "react-router-dom";
import useAsync from "../hooks/useAsync";
import BlogServices from "../services/BlogsServices";
import { showingTranslateValue } from "../utils/heleprs";
import { useAuthContext } from "../context";

import { useTranslation } from "react-i18next";

import BlogDetailLoad from "../components/blogs/BlogDetailLoad";
import Blogs from "../components/blogs/Blogs";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
} from "react-share";
import BreadCumbs from "../components/breadCumbs/BreadCumbs";

const DetailBlog = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { lang } = useAuthContext();
  const { data, loading } = useAsync(() => BlogServices.oneBlog(id), id);
  const urlShare = "https://www.cosamed.org/blog/detail/";
  return (
    <>
      {loading ? (
        Array.from(Array(20).keys()).map(() => <BlogDetailLoad />)
      ) : (
        <div className="container dark:bg-slate-900 w-full dark:text-white py-1 ">
          <p className="font-semibold text-lg text-principal ">
            {showingTranslateValue(data?.category?.translations, lang)?.name}
          </p>
          <div className="">
            <div className="py-2 font-semibold">
              {/* <BreadCumbs /> */}
            </div>
            <div className="  pb-14 py-1">
              <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 row">
                <div className="col-span-2 col-lg-8 col-md-8 px-4">
                  <div className="overflow-hidden">
                    <img
                      src={data.image}
                      alt=""
                      className="mx-auto w-full 
            object-cover transition duration-700 rounded-2xl"
                    />
                  </div>
                  <p
                    className="  font-montserrat text-lg"
                    dangerouslySetInnerHTML={{
                      __html: showingTranslateValue(data?.translations, lang)
                        ?.documentation,
                    }}
                  ></p>
                  <br />
                  <h1 className=" text-2xl font-semibold mb-10 ">
                    {showingTranslateValue(data?.translations, lang)?.title}
                    <p className="border border-t-2 border-principal"></p>
                  </h1>
                  <div
                    className="text-lg font-montserrat"
                    dangerouslySetInnerHTML={{
                      __html: showingTranslateValue(data?.translations, lang)
                        ?.description,
                    }}
                  ></div>
                  <div className="">
                    <img
                      src={data?.author?.image}
                      className=" h-[70px] px-30 rounded-full duration-200 hover:scale-105"
                    />
                    <p className="text-xl font-bold ">
                      {data?.author?.full_name}
                    </p>
                  </div>

                  <div className="px-4 py-1  rounded-2xl">
                    <h1 className=" mb-3 text-justify text-1xl font-bold sm:text-left sm:text-2xl">
                      {t("Share_on")}
                    </h1>
                    <div className=" flex flex-col gap-3 ">
                      <div className="flex gap-3 mr-6 items-center">
                        <FacebookShareButton
                          url={urlShare}
                          title={
                            showingTranslateValue(data?.translations, lang)
                              ?.description
                          }
                          className="duration-200 hover:scale-105"
                          hashtag="#React"
                        >
                          <FacebookIcon size={32} round={true} />
                        </FacebookShareButton>
                        <WhatsappShareButton url={urlShare + data?.id}>
                          <WhatsappIcon size={32} round={true} />
                        </WhatsappShareButton>
                        <TwitterShareButton url={urlShare + data?.id}>
                          <TwitterIcon size={32} round={true} />
                        </TwitterShareButton>
                        <LinkedinShareButton url={urlShare + data?.id}>
                          <LinkedinIcon size={32} round={true} />
                        </LinkedinShareButton>
                        <TelegramShareButton url={urlShare + data?.id}>
                          <TelegramIcon size={32} round={true} />
                        </TelegramShareButton>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 md:col-lg-4 col-md-4 gap-3 px-4 ">
                  <div className="px-1 py-8   text-white rounded-2xl border border-slate-900">
                    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 row">
                      <div className="col-span-2 col-lg-8 col-md-8 px-4">
                        <form className="mt-8 space-y-6 mb-8">
                          <div className="space-y-px rounded-md items-center">
                            {/* <input type="text" className=""></input> */}
                          </div>
                        </form>
                      </div>
                      <div className="col-span-1 md:col-lg-4 col-md-4 gap-3 px-4">
                        <div className="mt-14 space-y-4 mb-4 w-full">
                          {/* <Button loading={false} label="Recherche" /> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="p-4 shadow-2xl border border-lg rounded-2xl">
                    <div className="overflow-hidden h-[250px]">
                      <h1 className=" border border-opacity-60 rounded-2xl text-principal text-2xl font-montserrat font-semibold items-center justify-center text-center">
                        Popular Posts
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <p className=" border-t-2 border-gray-300/50 py-4 text-center"></p> */}
          <Blogs />
        </div>
      )}
    </>
  );
};

export default DetailBlog;
