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
        <a href="">
          <img src={titleArrow} alt="seta" />
        </a>
      </h2>
      <p className="name">
        {astronautName}
        <span>{astronautNFTValue} </span>
      </p>
      <img className="astronaut-image" src={astronautNFTImg} alt="imagem" />
    </div>
  );
}
