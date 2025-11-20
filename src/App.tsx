import { Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import AboutUs from "./pages/public/AboutUs";
import Home from "./pages/public/Home";
import OurStory from "./pages/public/OurStory";
import Safety from "./pages/public/Safety";
import ScrollToTop from "./utils/ScrollToTop";

const App: React.FC = () => {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="company">
            <Route path="about" element={<AboutUs />} />
            <Route path="story" element={<OurStory />} />
          </Route>
          <Route path="trust-and-safety" element={<Safety />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
