/** @jsx jsx */
import { jsx } from "theme-ui";
import StoreLayout from "../components/layouts/StoreLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import StoreSection from "../components/store/StoreSection";

export default () => {
  return (
    <StoreLayout>
      <Header />
      <Main>
        <StoreSection />
      </Main>
      <Footer />
    </StoreLayout>
  );
};
