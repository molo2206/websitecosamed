import Hero from "../components/hero/Hero";
import OverviewCounter from "../components/overview-count/OverviewCounter";
import SimpleBanner from "../components/simpleBanner/SimpleBanner";
import Blogs from "../components/blogs/Blogs";
import BannerDetails from "../components/bannerDetails/BannerDetails";
import Emergency from "../components/blogs/Emergency";
import Bulletin from "../components/blogs/Bulletin";
import Work from "../components/blogs/Work";
import Parteners from "../components/blogs/Parteners";
const Home = () => {
  return (
    <div className=" dark:bg-slate-900">
      <Hero />
      <OverviewCounter />
      <BannerDetails />
      <BannerDetails reverse={true} />
      <SimpleBanner />
      <Blogs />
      <Emergency />
      <Bulletin />
      <Work />
      <Parteners />
    </div>
  );
};

export default Home;
