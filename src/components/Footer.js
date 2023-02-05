import LinkIcon from "./LinkIcon";
import { useEffect, useState } from "react";
import Wrapper from "../wrappers/Footer";

const Footer = () => {
  const [scrollDirection, setScrollDirection] = useState(null);

  function useScrollDirection() {
    useEffect(() => {
      let lastScrollY = window.scrollY;

      const updateScrollDirection = () => {
        const scrollY = window.scrollY;
        const direction =
          scrollY > lastScrollY &&
          window.innerHeight + window.scrollY < document.body.scrollHeight
            ? "down"
            : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", () => {
        updateScrollDirection();
      });
      return () => {
        window.removeEventListener("scroll", updateScrollDirection);
      };
    });

    return scrollDirection;
  }

  const scrolled = useScrollDirection();

  return (
    <Wrapper>
      <footer className={scrolled === "down" ? "hide" : "show"}>
        <img
          src={require("../images/logo.png")}
          alt=""
          className="logo"
          style={{ width: "100px", height: "100px", cursor: "pointer" }}
          onClick={() => window.scrollTo(0, 0)}
        />
        <a
          href="https://www.twitch.tv/stephaniequatro"
          target="_blank"
          rel="noreferrer"
        >
          <LinkIcon
            icon={
              <img src="https://img.icons8.com/color/48/null/twitch--v1.png" alt=""/>
            }
            text={"Twitch"}
          />
        </a>
        <a
          href="https://steamcommunity.com/groups/QuatroQuarter"
          target="_blank"
          rel="noreferrer"
        >
          <LinkIcon
            icon={
              <img
                src="https://img.icons8.com/color/48/null/steam-circled.png"
                alt=""
              />
            }
            text={"Steam"}
          />
        </a>
        <a
          href="https://open.spotify.com/user/stephanie953?si=809f8bc1731a4771&nd=1"
          target="_blank"
          rel="noreferrer"
        >
          <LinkIcon
            icon={
              <img src="https://img.icons8.com/color/48/null/spotify--v1.png" alt=""/>
            }
            text={"Spotify"}
          />
        </a>
      </footer>
    </Wrapper>
  );
};
export default Footer;
