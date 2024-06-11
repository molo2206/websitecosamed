import BlogCardLoand from "../components/blogs/BlogCardLoad";
import useAsync from "../hooks/useAsync";
import PartenersServices from "../services/PartenersServices";
import { useTranslation } from "react-i18next";
import PartnerCard from "../components/blogs/PartnerCard";
const Partners = () => {
  const { t } = useTranslation();
  const { data, loading } = useAsync(() => PartenersServices.getPartners());
  return (
    <div className=" dark:bg-slate-900 w-full dark:text-white  h-[650px]">
      <div>
        <div className="container py-2 font-semibold">Accueil/Partners</div>
        <section className="mb-10 ">
          <h1 className=" mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
            {t("Partners")}
          </h1>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-4">
            {loading
              ? Array.from(Array(20).keys()).map(() => <BlogCardLoand />)
              : data.map((item: any, index: number) => (
                  <PartnerCard partners={item} key={index} />
                ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Partners;
