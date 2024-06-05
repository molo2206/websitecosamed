import BlogCard from "./BlogCard";
import BlogCardLoand from "./BlogCardLoad";
import useAsync from "../../hooks/useAsync";
import PartenersServices from "../../services/PartenersServices";
import { useTranslation } from "react-i18next";
import PartnerCard from "./PartnerCard";
const Parteners = () => {
  const { t } = useTranslation();
  const { data, loading } = useAsync(() => PartenersServices.getPartners());
  return (
    <div className="container dark:bg-slate-900 w-full dark:text-white py-8">
      <section className="mb-10 ">
        {/* <SimpleBannerBlog img={Img1} /> */}
        <h1 className=" mb-8 border-l-8 py-2 pl-2 text-left text-3xl font-bold">
          {t("Partners")}
        </h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {loading
            ? Array.from(Array(20).keys()).map(() => <BlogCardLoand />)
            : data.map((item: any, index: number) => (
                <PartnerCard partners={item} key={index} />
              ))}
        </div>
      </section>
    </div>
  );
};

export default Parteners;
