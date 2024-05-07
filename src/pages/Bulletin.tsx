import Img1 from "../assets/blogs/b1.jpeg";
import Img2 from "../assets/blogs/b2.jpeg";
import Img3 from "../assets/blogs/b3.jpeg";
import Img4 from "../assets/blogs/b4.jpeg";
import SimpleBannerBulletin from "../components/simpleBanner/SimpleBannerBulletin";
import BulletinCard from "../components/blogs/BulletinCard";

const Bulletin = () => {
  return (
    <div className=" dark:bg-slate-900 w-full dark:text-white ">
      <div>
        <section className="container mb-10 py-8">
          <SimpleBannerBulletin img={Img1} />
          <h1 className=" mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
            Our Latest Newsletters
          </h1>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <BulletinCard Img={Img1} />
            <BulletinCard Img={Img2} />
            <BulletinCard Img={Img3} />
            <BulletinCard Img={Img4} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Bulletin;
