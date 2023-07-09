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
        <img className="img" src={logo} alt="logomarca da Rocket NFT's" />
        <a href="#" aria-label="link de navegação que leva ao início da página">
          <button className="return-button" type="button">
            <img src={arrowBlack} alt="seta apontada para cima" />
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
              <button type="button" aria-label="Enviar email para assinatura">
                Enviar
              </button>
            </label>
          </div>
        </div>
        <div className="ssection">
          <div className="ssection-column">
            <ul>
              <li>Empresa</li>
              <li>
                <a href="#sobre" aria-label="Navegar para a página Sobre">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" aria-label="Navegar para a página Serviços">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#time" aria-label="Navegar para a página Time">
                  Time
                </a>
              </li>
              <li>
                <a href="#carreira" aria-label="Navegar para a página Carreira">
                  Carreira
                </a>
              </li>
            </ul>
          </div>
          <div className="ssection-column">
            <ul>
              <li>Mapa</li>
              <li>
                <a href="#galeria" aria-label="Navegar para o tópico Galeria">
                  Galeria
                </a>
              </li>
              <li>
                <a
                  href="#populars"
                  aria-label="Navegar para o tópico Populares"
                >
                  Populares
                </a>
              </li>
              <li>
                <a href="#sends" aria-label="Navegar para o tópico Vendas">
                  Vendas
                </a>
              </li>
              <li>
                <a href="#contats" aria-label="Navegar para o tópico Contato">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div className="ssection-column">
            <ul>
              <li>Links</li>
              <li>
                <a id="FAQ" href="#faq">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#terms" aria-label="Navegue para ler nossos Termos">
                  Termos
                </a>
              </li>
              <li>
                <a
                  href="#politics"
                  aria-label="Navegue para ler nossa Política"
                >
                  Política
                </a>
              </li>
              <li>
                <a
                  href="#help"
                  aria-label="Navegue para procurar Ajuda dentro de nosso Site"
                >
                  Ajuda
                </a>
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
            aria-label="Navegue para o site da Empresa Fundadora Rocketseat"
          >
            www.rocketseat.com.br
          </a>
        </div>
        <div className="social">
          <a
            href="https://www.youtube.com/@player35_"
            rel="noreferrer"
            target="_blank"
            aria-label="Navegue para o canal do youtube do Desenvolvedor"
          >
            <img src={youtube} alt="logomarca do youtube" />
          </a>
          <a
            href="https://www.instagram.com/player35_dev/"
            rel="noreferrer"
            target="_blank"
            aria-label="navegue para o Instagram do Desenvolvedor Yuri Player35"
          >
            <img src={instagram} alt="logomarca do instagram" />
          </a>
          <a
            href="https://twitter.com/Player35Ofi_dev"
            rel="noreferrer"
            target="_blank"
            aria-label="Navegue para o Twitter do Desenvolvedor Yuri Player35"
          >
            <img src={twitter} alt="logomarca do twitter" />
          </a>
        </div>
      </section>
    </footer>
  );
}
