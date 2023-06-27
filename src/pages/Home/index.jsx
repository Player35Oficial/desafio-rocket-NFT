import Gallery from "../../components/Gallery";
import Header from "../../components/Header";
import Main1 from "../../components/Main1";
import Main2 from "../../components/Main2";
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
    </>
  );
}
