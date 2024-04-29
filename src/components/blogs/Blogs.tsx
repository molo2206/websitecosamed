import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/blogs/img1.jpeg";
import Img2 from "../../assets/blogs/img2.jpg";
import Img3 from "../../assets/blogs/img3.jpeg";
import Img4 from "../../assets/blogs/img4.jpeg";
const Blogs = () => {
  return (
    <>
     <div className=" dark:bg-gray-900 dark:text-white">
     <section className="container mb-10 py-8">
        <h1 className=" mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
          Our Latest Blogs
        </h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <BlogCard Img={Img1} />
          <BlogCard Img={Img2} />
          <BlogCard Img={Img3} />
          <BlogCard Img={Img4} />
        </div>
      </section>
     </div>
    </>
  );
};

export default Blogs;
