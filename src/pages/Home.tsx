import Hero from "../components/hero/Hero";
import OverviewCounter from "../components/overview-count/OverviewCounter";
import SimpleBanner from "../components/simpleBanner/SimpleBanner";
import Blogs from "../components/blogs/Blogs";
import BannerDetails from "../components/bannerDetails/BannerDetails";
import Layout from "../components/navbar/Layout";
import Footer from "../components/footer/Footer";
const Home = () => {
  return (
    <div className=" dark:bg-slate-900">
      <Layout/>
      <Hero/>
      <OverviewCounter />
      <BannerDetails />
      <BannerDetails reverse={true} />
      <SimpleBanner />
      <Blogs />
      <Footer/> 
    </div>
  );
};

export default Home;
