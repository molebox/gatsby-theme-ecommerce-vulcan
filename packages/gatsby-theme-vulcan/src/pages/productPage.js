/** @jsx jsx */
import { jsx } from "theme-ui";
import StoreLayout from "../components/layouts/StoreLayout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import MainSection from "../components/MainSection";

export default () => {
  return (
    <StoreLayout>
      <Header />

      <Sidebar />
      <Main>
        <MainSection />
      </Main>
      <Footer />
    </StoreLayout>
  );
};
