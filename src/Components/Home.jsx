import NavBar from "./NavBar";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

function Home() {
  return (
    <div className="home-container">
      <NavBar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Sua comida favorita entregue quente e fresca
          </h1>
          <p className="primary-text">
            Chefs saudáveis fazem todo o trabalho de preparação, como fazer
            picar e marinar, para que você possa cozinhar alimentos frescos.
          </p>
          <button className="secondary-button">
            Peça agora <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
