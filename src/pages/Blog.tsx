
import BlogCard from "../components/blogs/BlogCard";
import BlogServices from "../services/BlogsServices";
import useAsync from "../hooks/useAsync";
import BlogCardLoand from "../components/blogs/BlogCardLoad";
import BlogDetailLoad from "../components/blogs/BlogDetailLoad";
import BreadCumbs from "../components/breadCumbs/BreadCumbs";
const Blog = () => {
  const { data, loading } = useAsync(() => BlogServices.getBlog());

  return (
    <>
      {loading ? (
        Array.from(Array(20).keys()).map(() => <BlogDetailLoad />)
      ) : (
        <div className="container dark:bg-slate-900 w-full dark:text-white py-8">
          <div>
            <div className="container py-2 font-semibold">
            <BreadCumbs />
            </div>
            <section className="mb-10 ">
              <h1 className=" mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
                Our Latest Blogs
              </h1>
              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {loading
                  ? Array.from(Array(20).keys()).map(() => <BlogCardLoand />)
                  : data.map((item: any, index: number) => (
                      <BlogCard blog={item} key={index} />
                    ))}
              </div>
            </section>
          </div>
        </div>
      )}
      ;
    </>
  );
};

export default Blog;
