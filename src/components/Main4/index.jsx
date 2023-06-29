import "./Main4.css";
import artista1 from "../../assets/artista-1.png";
import arrowOrange from "../../assets/arrow-orange.svg";

export default function Main4() {
  return (
    <section className="main4-container">
      <h2 className="title">
        Melhores <span>artistas</span>
      </h2>
      <div className="better-artists-container">
        <div className="better-artist">
          <img className="better-artist-img" src={artista1} alt="" />
          <div className="better-artist-info">
            <p className="better-artist-title">Mayk Brito</p>
            <p className="better-artist-pictures">80 Fotografias</p>
          </div>
        </div>
        <div className="better-artist better">
          <img className="better-artist-img" src={artista1} alt="" />
          <div className="better-artist-info">
            <p className="better-artist-title">Mayk Brito</p>
            <p className="better-artist-pictures">80 Fotografias</p>
          </div>
        </div>
        <div className="better-artist">
          <img className="better-artist-img" src={artista1} alt="" />
          <div className="better-artist-info">
            <p className="better-artist-title">Mayk Brito</p>
            <p className="better-artist-pictures">80 Fotografias</p>
          </div>
        </div>
        <div className="better-artist">
          <img className="better-artist-img" src={artista1} alt="" />
          <div className="better-artist-info">
            <p className="better-artist-title">Mayk Brito</p>
            <p className="better-artist-pictures">80 Fotografias</p>
          </div>
        </div>
        <div className="better-artist">
          <img className="better-artist-img" src={artista1} alt="" />
          <div className="better-artist-info">
            <p className="better-artist-title">Mayk Brito</p>
            <p className="better-artist-pictures">80 Fotografias</p>
          </div>
        </div>
        <div className="better-artist ">
          <img className="better-artist-img" src={artista1} alt="" />
          <div className="better-artist-info">
            <p className="better-artist-title">Mayk Brito</p>
            <p className="better-artist-pictures">80 Fotografias</p>
          </div>
        </div>
      </div>
      <div className="viewAll">
        <a href="">
          Ver todos os artistas <img src={arrowOrange} alt="" />
        </a>
      </div>
    </section>
  );
}
