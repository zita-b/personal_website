import Wrapper from "../wrappers/Promo";

const Promo = ({ scrolled }) => {
  return (
    <Wrapper>
      <div className={scrolled === "down" ? "hide" : "show"}>
        <a href="https://roveremedies.nl/" target="_blank" rel="noreferrer">
          <h4>-50% DISCOUNT ALL CBD PRODUCTS with code "sq50" Rove Remedies</h4>
        </a>
      </div>
    </Wrapper>
  );
};
export default Promo;
