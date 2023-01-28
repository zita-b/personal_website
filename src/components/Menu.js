import { menuItems } from "../utils/menu-data";
import background from "../images/scrollable.jpg";
import Wrapper from "../wrappers/Menu";

const Menu = () => {
  return (
    <Wrapper>
      <article
        className="menu-container"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="emotes">
          <img
            src="https://static-cdn.jtvnw.net/badges/v1/4b5cf606-97f0-4f29-bece-33248391ae29/3"
            alt=""
          ></img>
          <img
            src="https://static-cdn.jtvnw.net/badges/v1/667c2bf6-0159-4052-8552-712e6e528a5d/3"
            alt=""
          ></img>
          <img
            src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_603e3bb8058c4f998fdcbec1f80af6b1/static/light/3.0"
            alt=""
          ></img>
          <img
            src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_b0879d2bd7624a6eaaaf7dcd9dc2ceaf/static/light/3.0"
            alt=""
          ></img>
          <img
            src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_5f6496737d8449a181db2439c79b51df/static/light/3.0"
            alt=""
          ></img>
          <img
            src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_83ad1b13f20b4d83b21287d6e89b057d/static/light/3.0"
            alt=""
          ></img>
        </div>
        <h2>Soundmenu</h2>
        <h4>Play sounds on stream! OH YEA</h4>
        {menuItems.map((item, index) => (
          <p key={index}>
            <span>{item.price}</span> - {item.item}
          </p>
        ))}
      </article>
    </Wrapper>
  );
};
export default Menu;
