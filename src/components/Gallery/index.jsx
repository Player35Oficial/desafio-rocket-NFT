import img1 from "../../assets/galeria-1.png";
import img2 from "../../assets/galeria-2.png";
import img3 from "../../assets/galeria-3.png";
import img4 from "../../assets/galeria-4.png";
import img5 from "../../assets/galeria-5.png";
import img6 from "../../assets/galeria-6.png";
import img7 from "../../assets/galeria-7.png";
import img8 from "../../assets/galeria-8.png";
import "./Gallery.css";

export default function Gallery() {
  return (
    <section className="gallery-container">
      <article className="gallery1">
        <img src={img1} alt="Astronauta 1" />
        <img src={img2} alt="Astronauta 2" />
        <img src={img3} alt="Astronauta 3" />
        <img src={img4} alt="Astronauta 4" />
      </article>
      <article className="gallery2">
        <img src={img5} alt="Astronauta 5" />
        <img src={img6} alt="Astronauta 6" />
        <img src={img7} alt="Astronauta 7" />
        <img src={img8} alt="Astronauta 8" />
      </article>
    </section>
  );
}
