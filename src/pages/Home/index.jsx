import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import Header from "../../components/Header";
import Main1 from "../../components/Main1";
import Main2 from "../../components/Main2";
import Main3 from "../../components/Main3";
import Main4 from "../../components/Main4";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div id="main">
        <Header />
        <Main1 />
        <Gallery />
      </div>
      <Main2 />
      <Main3 />
      <Main4 />
      <Footer />
    </>
  );
}
