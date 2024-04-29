import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import OverviewCounter from "./components/overview-count/OverviewCounter";
import BannerDetails from "./components/bannerDetails/BannerDetails";
import SimpleBanner from "./components/simpleBanner/SimpleBanner";
import Blogs from "./components/blogs/Blogs";
import Footer from "./components/footer/Footer";
import NavbarFirst from "./components/navbar/NavbarFirst";
import "./assets/css/index.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
function App() {
  return (
    <div className=" dark:bg-slate-900">
      <NavbarFirst />
      <Navbar />
      <Hero />
      <OverviewCounter />
      <BannerDetails />
      <BannerDetails reverse={true} />
      <SimpleBanner />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
