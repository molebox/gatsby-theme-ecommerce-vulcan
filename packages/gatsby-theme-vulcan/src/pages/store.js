/** @jsx jsx */
import { jsx } from "theme-ui";
import StoreLayout from "../components/layouts/StoreLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import StoreSection from "../components/store/StoreSection";
import StoreSidebar from "../components/store/StoreSidebar";

export default () => {
  return (
    <StoreLayout>
      <Header />
      <StoreSidebar />
      <Main>
        <StoreSection />
      </Main>
      <Footer />
    </StoreLayout>
  );
};
