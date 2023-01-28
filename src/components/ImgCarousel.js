import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel';
import Wrapper from "../wrappers/ImgCarousel"
import { carousel_data as data } from "../utils/carousel-data";

function ImgCarousel() {
  return (
    <Wrapper>
      <Carousel>
        {data.map((data, index) => (
          <Carousel.Item key={index}>
            <img
              src={require(`../images/steph-${index + 1}.jpeg`)}
              alt={`slide-${index}`}
              className="carousel"
            />
            <Carousel.Caption>
              <h3>{data.title}</h3>
              <p>{data.description}</p>
            </Carousel.Caption> 
          </Carousel.Item>
        ))}
    </Carousel>
    </Wrapper>
  );
}

export default ImgCarousel;
