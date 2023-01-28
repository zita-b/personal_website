import { cards } from "../utils/card-data";
import Card from "./Card";
import ImgCarousel from "./ImgCarousel";
import Menu from "./Menu";
import Button from "./Button";
import Wrapper from "../wrappers/Main";

const Main = () => {
  return (
    <Wrapper>
      <main>
        <article className="main">
          <ul>
            {cards.map((card) => (
              <li key={card.id}>
                <Card title={card.title} description={card.text} />
              </li>
            ))}
          </ul>
        </article>

        <article className="content">
          <div className="insta">
            <ImgCarousel />
            <a
              href="https://www.instagram.com/stephaniequatro/"
              target="_blank"
              rel="noreferrer"
            >
              <Button text={"Follow me on Instagram"} submit={""} />
            </a>
          </div>

          <div className="menu">
            <Menu />
            <a
              href="https://www.twitch.tv/stephaniequatro"
              target="_blank"
              rel="noreferrer"
            >
              <Button text={"Check out my Twitch"} submit={""} />
            </a>
          </div>
        </article>
      </main>
    </Wrapper>
  );
};
export default Main;
