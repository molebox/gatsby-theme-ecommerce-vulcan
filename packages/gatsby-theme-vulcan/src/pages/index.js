/** @jsx jsx */
import { jsx } from "theme-ui";
import HomeLayout from "../components/layouts/HomeLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import ProductsSection from "../components/store/ProductsSection";

export default () => {
  return (
    <HomeLayout>
      <Header />
      <Sidebar />
      <Main>
        <ProductsSection />
      </Main>
      <Footer />
    </HomeLayout>
  );
};
