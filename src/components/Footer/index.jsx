import logo from "../../assets/logo.svg";
import arrowBlack from "../../assets/arrow-black.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";
import twitter from "../../assets/twitter.svg";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="first">
        <img className="img" src={logo} alt="" />
        <a href="#">
          <button className="return-button" type="button">
            <img className="" src={arrowBlack} alt="" />
          </button>
        </a>
      </section>
      <section className="second">
        <div className="fsection">
          <div className="input">
            <p>
              Fique por dentro de <span>todas as novidades</span>
            </p>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="nft@rocketseat.com.br"
              />
              <button type="button">Enviar</button>
            </label>
          </div>
        </div>
        <div className="ssection">
          <div className="ssection-column">
            <ul>
              <li>Empresa</li>
              <li>
                <a href="">Sobre</a>
              </li>
              <li>
                <a href="">Serviços</a>
              </li>
              <li>
                <a href="">Time</a>
              </li>
              <li>
                <a href="">Carreira</a>
              </li>
            </ul>
          </div>
          <div className="ssection-column">
            <ul>
              <li>Mapa</li>
              <li>
                <a href="">Galeria</a>
              </li>
              <li>
                <a href="">Populares</a>
              </li>
              <li>
                <a href="">Vendas</a>
              </li>
              <li>
                <a href="">Contato</a>
              </li>
            </ul>
          </div>
          <div className="ssection-column">
            <ul>
              <li>Links</li>
              <li>
                <a id="FAQ" href="#">
                  FAQs
                </a>
              </li>
              <li>
                <a href="">Termos</a>
              </li>
              <li>
                <a href="">Política</a>
              </li>
              <li>
                <a href="">Ajuda</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="third">
        <div className="link-site">
          <a
            href="https://www.rocketseat.com.br"
            rel="noreferrer"
            target="_blank"
          >
            www.rocketseat.com.br
          </a>
        </div>
        <div className="social">
          <a
            href="https://www.youtube.com/@player35_"
            rel="noreferrer"
            target="_blank"
          >
            <img src={youtube} alt="" />
          </a>
          <a
            href="https://www.instagram.com/player35_dev/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={instagram} alt="" />
          </a>
          <a
            href="https://twitter.com/Player35Ofi_dev"
            rel="noreferrer"
            target="_blank"
          >
            <img src={twitter} alt="" />
          </a>
        </div>
      </section>
    </footer>
  );
}
