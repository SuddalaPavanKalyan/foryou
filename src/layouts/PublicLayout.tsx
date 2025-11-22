import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../pages/public/Footer";

const PublicLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
