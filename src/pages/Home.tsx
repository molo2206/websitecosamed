import Hero from "../components/hero/Hero";
import SimpleBanner from "../components/simpleBanner/SimpleBanner";
import Blogs from "../components/blogs/Blogs";
import BannerMission from "../components/bannerDetails/BannerMission";
import Bulletin from "../components/blogs/Bulletin";
import Work from "../components/blogs/Work";
import Parteners from "../components/blogs/Parteners";
const Home = () => {
  return (
    <div className=" dark:bg-slate-900">
      <Hero />
      {/* <OverviewCounter /> */}
      <BannerMission />
      <SimpleBanner />
      <Blogs />
      <Bulletin />
      <Work />
      <Parteners />
    </div>
  );
};

export default Home;
