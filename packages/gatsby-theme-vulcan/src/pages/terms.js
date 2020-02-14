/** @jsx jsx */
import { jsx } from "theme-ui";
import HomeLayout from "../components/layouts/HomeLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import StoreCategories from "../components/store/StoreCategories";

export default () => {
  return (
    <HomeLayout>
      <Header />
      <Main>
        <StoreCategories />
      </Main>
      <Footer />
    </HomeLayout>
  );
};
