import styled from "styled-components";

const Wrapper = styled.section`
  footer {
    @media (min-width: 550px) {
      flex-direction: row;
      height: 5rem;
    }
    flex-direction: column;
    height: 20rem;
    gap: 20px;
    @media (min-width: 550px) {
      position: fixed;
      bottom: 0;
    }
    width: 100%;
    z-index: 5;
    text-decoration: none;
    padding: 2vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: black;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 700ms;
  }
  .hide {
    bottom: -7rem;
  }
  .show {
    bottom: 0;
  }
  a {
    text-decoration: none;
    color: gray;
    transition: all 0.3s linear;
    font-weight: 600;
  }
  a:hover {
    color: #b7b7b7;
  }
  img {
    @media (max-width: 1899px) {
      width: 25px;
    }
  }
`;
export default Wrapper;
