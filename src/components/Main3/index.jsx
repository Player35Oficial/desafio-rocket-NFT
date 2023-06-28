import "./Main3.css";
import astronauta1 from "../../assets/astronauta-1.png";
import astronauta2 from "../../assets/astronauta-2.png";
import astronauta3 from "../../assets/astronauta-3.png";
import astronauta4 from "../../assets/astronauta-4.png";
import arrowWhite from "../../assets/arrow-white.svg";
import PopularAstronaut from "./../PopularAstronaut/index.jsx";

export default function Main3() {
  return (
    <>
      <section className="main3-container">
        <h2 className="title">
          <span>Populares</span> da semana
        </h2>

        <div className="popular-astronaut-container">
          <PopularAstronaut
            titleAstronaut={"Astronauta 1"}
            titleArrow={arrowWhite}
            astronautName={"Mayk Brito"}
            astronautNFTValue={"1.50 RKT "}
            astronautNFTImg={astronauta1}
          />
          <PopularAstronaut
            titleAstronaut={"Astronauta 3"}
            titleArrow={arrowWhite}
            astronautName={"João Inácio (Biro)"}
            astronautNFTValue={"3.75 RKT "}
            astronautNFTImg={astronauta2}
          />
          <div className="divisor"></div>
          <PopularAstronaut
            titleAstronaut={"Astronauta 2"}
            titleArrow={arrowWhite}
            astronautName={"Jakeliny Gracielly"}
            astronautNFTValue={"2.0 RKT "}
            astronautNFTImg={astronauta3}
          />
          <PopularAstronaut
            titleAstronaut={"Astronauta 4"}
            titleArrow={arrowWhite}
            astronautName={"Tamires Santos"}
            astronautNFTValue={"4.30 RKT "}
            astronautNFTImg={astronauta4}
          />
        </div>
      </section>
    </>
  );
}
