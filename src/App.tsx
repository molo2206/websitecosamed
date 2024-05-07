import { Route, Routes } from "react-router-dom";
import "./assets/css/index.scss";
import "./assets/scss/index.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Videos from "./pages/Videos";
import Podcast from "./pages/Podcast";
import Bulletin from "./pages/Bulletin";
import Rapport from "./pages/Rapport";
import Offres from "./pages/Offres";
import AutreDoc from "./pages/AutresDocument";
import Rejoindre from "./pages/Rejoindre";
import Layout from "./components/navbar/Layout";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/navbar/ScrollToTop";

function App() {
  return (
    <>
    <ScrollToTop/>
    <ToastContainer />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/data-loading/blogs" element={<Blog />} />
            <Route path="/data-loading/videos" element={<Videos />} />
            <Route path="/data-loading/podcast" element={<Podcast />} />
            <Route path="/data-loading/newsletters" element={<Bulletin />} />
            <Route path="/data-loading/reports" element={<Rapport />} />
            <Route path="/data-loading/jobopenings" element={<Offres />} />
            <Route path="/data-loading/othersdoc" element={<AutreDoc />} />
            <Route path="/community/join" element={<Rejoindre />} />
            {/* <Route path="/videos" element={<Videos/>}></Route>
            <Route path="/evenement" element={<Evenement/>}></Route>
            <Route path="/galery" element={<Photos/>}></Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/places" element={<PlacesRoute />} />
           
            <Route path="/blogs/:id" element={<BlogsDetails />} />  */}
          </Route>
        </Routes>
    </>
  );
}

export default App;
