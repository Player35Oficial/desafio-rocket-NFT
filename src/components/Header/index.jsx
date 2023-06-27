import metamaskLogo from "../../assets/logo_MetaMask.svg";
import rocketnftLogo from "../../assets/logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="principal-header">
      <img className="logo" src={rocketnftLogo} alt="" />
      <nav>
        <a href="/comprarnft">Comprar NFT</a>
        <a href="/sobre">Sobre</a>
        <a href="/FAQ">FAQ</a>
      </nav>
      <button>
        <img src={metamaskLogo} alt="Logomarca de Raposa da Metamask" />
        <span>Conectar Carteira</span>
      </button>
    </header>
  );
}
