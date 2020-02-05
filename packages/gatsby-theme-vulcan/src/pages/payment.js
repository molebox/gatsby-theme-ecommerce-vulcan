/** @jsx jsx */
import { jsx } from "theme-ui";
import HomeLayout from "../components/layouts/HomeLayout";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import MainSection from "../components/MainSection";

export default () => {
  return (
    <HomeLayout>
      <Header />
      <Navbar />
      <Sidebar />
      <Main>
        <MainSection />
      </Main>
      <Footer />
    </HomeLayout>
  );
};
