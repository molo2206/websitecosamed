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
import BreadCumb from "../components/navbar/BreadCumb";
import Error404 from "./Error404";

const DetailBlog = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { lang } = useAuthContext();
  const { data, error, loading } = useAsync(() => BlogServices.oneBlog(id), id);
  const urlShare = "https://www.cosamed.org/blog/detail/";
  return error ? (
    <Error404 />
  ) : (
    <>
      {loading ? (
        Array.from(Array(20).keys()).map(() => <BlogDetailLoad />)
      ) : (
        <div className="container dark:bg-slate-900 w-full dark:text-white py-1 ">
          {/* <p className="font-semibold text-lg text-principal ">
            {showingTranslateValue(data?.category?.translations, lang)?.name}
          </p> */}
          <BreadCumb
            title={showingTranslateValue(data?.translations, lang)?.title}
            second={"/data-loading/blogs"}
            secondTitle={"Blog"}
          />
          <div className="">
            <div className="  pb-14 py-1">
              <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 row">
                <div className="col-span-2 col-lg-8 col-md-8 px-4">
                  <div className="overflow-hidden">
                    <img
                      src={data?.image}
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
                  <form className="mt-8 space-y-6 mb-8">
                    <div className="space-y-px rounded-md items-center">
                      <div className="blog-search-content">
                        <div className="border-slate-300 border border-sm dark:border-slate-700 search-box">
                          <input placeholder="Search" type="search" />
                          <button>
                            <i className="fa fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="p-4 shadow-2xl rounded-2xl">
                    <div className="overflow-hidden">
                      <h1 className="text-principal text-2xl font-montserrat font-semibold items-center justify-center">
                        Categories
                      </h1>
                      <div className="right-bar">
                        <div className="right-bar-item category">
                          <div className="right-item-content text-slate-600 dark:text-slate-700">
                            <a href="#" className="right-item-title">
                              Category 1 (23)
                            </a>
                          </div>
                        </div>
                        <div className="right-bar-item category">
                          <div className="right-item-content text-slate-600 dark:text-slate-700">
                            <a href="#" className="right-item-title">
                              Category 1 (23)
                            </a>
                          </div>
                        </div>
                        <div className="right-bar-item category">
                          <div className="right-item-content text-slate-600 dark:text-slate-700">
                            <a href="#" className="right-item-title">
                              Category 1 (23)
                            </a>
                          </div>
                        </div>
                        <div className="right-bar-item category">
                          <div className="right-item-content text-slate-600 dark:text-slate-700">
                            <a href="#" className="right-item-title">
                              Category 1 (23)
                            </a>
                          </div>
                        </div>
                        <div className="right-bar-item category">
                          <div className="right-item-content text-slate-600 dark:text-slate-700">
                            <a href="#" className="right-item-title">
                              Category 1 (23)
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 shadow-2xl rounded-2xl">
                    <div className="overflow-hidden">
                      <h1 className="text-principal text-2xl font-montserrat font-semibold items-center justify-center">
                        Popular Posts
                      </h1>
                      <div className="right-bar">
                        <div className="right-bar-item">
                          <img
                            className="right-bar-image"
                            src="https://blog.logrocket.com/wp-content/uploads/2024/06/craig-saldanha-leader-spotlight-nocdn.png?resize=768,512"
                          />
                          <div className="right-item-content text-slate-600 dark:text-slate-700">
                            <a href="#" className="right-item-title">
                              Ceci est un titre d'un article
                            </a>
                            <p className="text-slate-500 dark:text-slate-700">
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Perspiciatis tempore voluptates
                            </p>
                          </div>
                        </div>
                        <div className="right-bar-item">
                          <img
                            className="right-bar-image"
                            src="https://blog.logrocket.com/wp-content/uploads/2024/06/craig-saldanha-leader-spotlight-nocdn.png?resize=768,512"
                          />
                          <div className="right-item-content text-slate-600 dark:text-slate-700">
                            <a href="#" className="right-item-title">
                              Ceci est un titre d'un article
                            </a>
                            <p className="text-slate-500 dark:text-slate-700">
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Perspiciatis tempore voluptates
                            </p>
                          </div>
                        </div>
                        <div className="right-bar-item">
                          <img
                            className="right-bar-image"
                            src="https://blog.logrocket.com/wp-content/uploads/2024/06/craig-saldanha-leader-spotlight-nocdn.png?resize=768,512"
                          />
                          <div className="right-item-content text-slate-600 dark:text-slate-700">
                            <a href="#" className="right-item-title">
                              Ceci est un titre d'un article
                            </a>
                            <p className="text-slate-500 dark:text-slate-700">
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Perspiciatis tempore voluptates
                            </p>
                          </div>
                        </div>
                      </div>
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
