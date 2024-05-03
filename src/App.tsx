import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/index.scss";
import "./assets/scss/index.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Videos from "./pages/Videos";
import Podcast from "./pages/Podcast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/data-load/blogs" element={<Blog />} />
            <Route path="/data-load/videos" element={<Videos />} />
            <Route path="/data-load/podcast" element={<Podcast />} />
            {/* <Route path="/videos" element={<Videos/>}></Route>
            <Route path="/evenement" element={<Evenement/>}></Route>
            <Route path="/galery" element={<Photos/>}></Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/places" element={<PlacesRoute />} />
           
            <Route path="/blogs/:id" element={<BlogsDetails />} />  */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
