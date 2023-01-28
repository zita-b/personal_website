import LinkIcon from "./LinkIcon";
import { useEffect, useState } from "react";
import Promo from "./Promo";
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
      <Promo scrolled={scrolled} />
      <footer className={scrolled === "down" ? "hide" : "show"}>
        <img
          src={require("../images/logo.png")}
          alt=""
          className="logo"
          style={{ width: "100px", height: "100px", cursor: "pointer" }}
          onClick={() => window.scrollTo(0, 0)}
        />
        <a href="https://roveremedies.nl/" target="_blank" rel="noreferrer">
          <LinkIcon
            icon={
              <img src="https://img.icons8.com/color/48/null/electronic-cigarette.png" alt=""/>
            }
            alt=""
            text={"Rove Remedies"}
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
          href="https://www.facebook.com/StephanieQuatro/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_transition=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0"
          target="_blank"
          rel="noreferrer"
        >
          <LinkIcon
            icon={
              <img
                src="https://img.icons8.com/color/48/null/facebook-new.png"
                alt=""
              />
            }
            text={"Facebook"}
          />
        </a>
      </footer>
    </Wrapper>
  );
};
export default Footer;
