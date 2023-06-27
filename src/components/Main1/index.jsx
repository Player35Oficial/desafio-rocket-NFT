import groupAvatars from "../../assets/group-avarts.png";
import badge from "../../assets/badge.svg";
import "./Main1.css";

export default function Main1() {
  return (
    <section className="main-container">
      <article className="first-column">
        <p>
          Mercado digital para colecionáveis em criptos e tokens não fungível
          (NFT). Compre, venda e descubra ativos digitais exclusivos para você.
        </p>
        <div className="artists">
          <div className="group-avatars">
            <img src={groupAvatars} alt="" />
          </div>
          <div className="artists-span">
            <span>+10</span>
            <p>Artistas selecionados</p>
          </div>
        </div>
      </article>

      <article className="second-column">
        <h1>
          Descubra a verdadeira arte digital e colecione diversas
          <span> NFTs</span>
        </h1>
      </article>

      <article className="third-column">
        <img src={badge} alt="" />
      </article>
    </section>
  );
}
