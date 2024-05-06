import Layout from "../components/navbar/Layout";
import Footer from "../components/footer/Footer";
import Img1 from "../assets/blogs/r1.jpeg";
import Img2 from "../assets/blogs/r2.jpeg";
import Img3 from "../assets/blogs/r3.png";
import Img4 from "../assets/blogs/r4.jpeg";
import BulletinCard from "../components/blogs/BulletinCard";
import SimpleBannerBulletin from "../components/simpleBanner/SimpleBannerBulletin";

const Rapport = () => {
  return (
    <div className=" dark:bg-slate-900 w-full dark:text-white ">
      <Layout />
      <div>
        <section className="container mb-10 py-8">
          <SimpleBannerBulletin img={Img1} />
          <h1 className=" mb-8 border-l-8 py-2 pl-2 text-center text-3xl font-bold">
            Our latest reports
          </h1>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <BulletinCard Img={Img1} />
            <BulletinCard Img={Img2} />
            <BulletinCard Img={Img3} />
            <BulletinCard Img={Img4} />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Rapport;
