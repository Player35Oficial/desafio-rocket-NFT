export default function PopularAstronaut({
  titleAstronaut,
  titleArrow,
  astronautName,
  astronautNFTValue,
  astronautNFTImg,
}) {
  return (
    <div className="popular-astronaut">
      <h2 className="astronaut-title">
        {titleAstronaut}
        <a
          href="#astronaut"
          aria-label="Navegação para página com outras páginas do artista"
        >
          <img
            src={titleArrow}
            alt="seta que aponta para uma página com outras obras do artista"
          />
        </a>
      </h2>
      <p className="name">
        {astronautName}
        <span>{astronautNFTValue} </span>
      </p>
      <img
        className="astronaut-image"
        src={astronautNFTImg}
        alt="imagem NFT do Artista"
      />
    </div>
  );
}
