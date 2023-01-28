import styled from "styled-components";

const Wrapper = styled.section`
  font-family: "Poppins";
  color: white;
  h1 {
    text-shadow: 1px 1px 5px black;
    font-weight: bold;
    font-size: 48px;
    @media (min-width: 1120px) {
      font-size: 56px;
    }
    @media (min-width: 1900px) {
      font-size: 80px;
    }
  }

  label {
    text-shadow: 1px 1px 5px black;
  }
  h2,
  h3 {
    text-shadow: 1px 1px 5px black;
    font-weight: bold;
    font-size: 42px;
    @media (min-width: 1120px) {
      font-size: 52px;
    }
    @media (min-width: 1900px) {
      font-size: 72px;
    }
  }

  p,
  span,
  h4,
  button,
  a,
  label,
  input {
    font-size: 20px;
    @media (min-width: 1120px) {
      font-size: 24px;
    }
    @media (min-width: 1900px) {
      font-size: 36px;
    }
  }
  a {
    text-decoration: none;
  }
`;
export default Wrapper;
