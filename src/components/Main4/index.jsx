import "./Main4.css";
import artista1 from "../../assets/artista-1.png";
import artista2 from "../../assets/artista-2.png";
import artista3 from "../../assets/artista-3.png";
import artista4 from "../../assets/artista-4.png";
import artista5 from "../../assets/artista-5.png";
import artista6 from "../../assets/artista-6.png";
import arrowOrange from "../../assets/arrow-orange.svg";

export default function Main4() {
  return (
    <section className="main4-container">
      <h2 className="title">
        Melhores <span>artistas</span>
      </h2>
      <div className="better-artists-container">
        <div className="better-artist">
          <img
            className="better-artist-img"
            src={artista1}
            alt="Foto de perfil do artista 1"
          />
          <div className="better-artist-info">
            <p className="better-artist-title">Mayk Brito</p>
            <p className="better-artist-pictures">80 Fotografias</p>
          </div>
        </div>
        <div className="better-artist better">
          <img
            className="better-artist-img"
            src={artista2}
            alt="Foto de perfil do artista 2"
          />
          <div className="better-artist-info">
            <p className="better-artist-title">Jakeliny G.</p>
            <p className="better-artist-pictures">99 Fotografias</p>
          </div>
        </div>
        <div className="better-artist">
          <img
            className="better-artist-img"
            src={artista3}
            alt="Foto de perfil do artista 3"
          />
          <div className="better-artist-info">
            <p className="better-artist-title">João I. &#40;Biro&#41;</p>
            <p className="better-artist-pictures">50 Fotografias</p>
          </div>
        </div>
        <div className="better-artist">
          <img
            className="better-artist-img"
            src={artista4}
            alt="Foto de perfil do artista 4"
          />
          <div className="better-artist-info">
            <p className="better-artist-title">Tamires Santos</p>
            <p className="better-artist-pictures">43 Fotografias</p>
          </div>
        </div>
        <div className="better-artist">
          <img
            className="better-artist-img"
            src={artista5}
            alt="Foto de perfil do artista 5"
          />
          <div className="better-artist-info">
            <p className="better-artist-title">Ana Silva</p>
            <p className="better-artist-pictures">26 Fotografias</p>
          </div>
        </div>
        <div className="better-artist ">
          <img
            className="better-artist-img"
            src={artista6}
            alt="Foto de perfil do artista 6"
          />
          <div className="better-artist-info">
            <p className="better-artist-title">Diego F.</p>
            <p className="better-artist-pictures">20 Fotografias</p>
          </div>
        </div>
      </div>
      <div className="viewAll">
        <a href="#moreartists">
          Ver todos os artistas{" "}
          <img
            src={arrowOrange}
            alt="Seta laranja indicando link para outra página"
          />
        </a>
      </div>
    </section>
  );
}
