import useAsync from "../../hooks/useAsync";
import BlogServices from "../../services/BlogsServices";
import BulletinLoad from "./BulletinLoad";
import BulletinCard from "./BulletinCard";

const Bulletin = () => {
  const { data, loading } = useAsync(() => BlogServices.getBlog());
  return (
    <div className="container dark:bg-slate-900 w-full dark:text-white ">
      <div>
        <section className="mb-10 ">
          {/* <SimpleBannerBlog img={Img1} /> */}
          <h1 className=" mb-8 border-l-8 py-2 pl-2 text-left text-3xl font-bold">
            Newsletter
          </h1>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {loading
              ? Array.from(Array(20).keys()).map((Load: any) => (
                  <BulletinLoad />
                ))
              : data.map((item: any, index: number) => (
                  <BulletinCard bulletin={item} key={index} />
                ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Bulletin;
