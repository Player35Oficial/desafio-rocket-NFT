import metamaskLogo from "../../assets/logo_MetaMask.svg";
import rocketnftLogo from "../../assets/logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="principal-header">
      <a href="#" aria-label="Navegue para página inicial da Rocket">
        <img
          className="logo"
          src={rocketnftLogo}
          alt="Logomarca da Rocket NFT's"
        />
      </a>
      <nav>
        <a href="#comprarnft" aria-label="Navegue para a seção Comprar NFT">
          Comprar NFT
        </a>
        <a href="#sobre" aria-label="Navegue para a seção Sobre">
          Sobre
        </a>
        <a
          href="#FAQ"
          aria-label="Navegue para a seção de Perguntas Frequentas"
        >
          FAQ
        </a>
      </nav>
      <button>
        <img src={metamaskLogo} alt="Logomarca de Raposa da Metamask" />
        <span>Conectar Carteira</span>
      </button>
    </header>
  );
}
