import { Zoom } from "react-slideshow-image";
import { Container } from "./styles";
import "react-slideshow-image/dist/styles.css";
import image1 from "../../assets/images/po1.png";
import image2 from "../../assets/images/po2.png";
import image3 from "../../assets/images/po3.png";
import image4 from "../../assets/images/po4.png";
import image5 from "../../assets/images/po5.png";
import image6 from "../../assets/images/po6.png";
import image7 from "../../assets/images/po7.png";
// style was imported in index.css
// import "react-slideshow-image/dist/styles.css";
const images = [image1, image2, image3, image4, image5, image6, image7];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

export function Slideshow() {
  return (
    <Container id="portfolio">
      <h2>Portfolios</h2>

      <div className="slide-wrapper">
        <div className="slide-container">
          <Zoom {...zoomOutProperties}>
            {images.map((each, index) => (
              <img
                key={index}
                style={{ width: "100%" }}
                src={each}
                alt="slideImage"
              />
            ))}
          </Zoom>
        </div>
      </div>
    </Container>
  );
}
