import styled from "styled-components";

const Wrapper = styled.section`
  img {
    @media (max-width: 1899px) {
      width: 25px;
    }
  }
  a {
    text-decoration: none;
  }
  .nav-container {
    margin: 0;
    padding-left: 2vw;
    z-index: 8;
  }
  .navbar {
    z-index: 8;
    margin-bottom: calc(10px + 5vw);
    box-shadow: inset -3px 7px 35px 200px rgba(17, 18, 17, 1),
      -3px 18px 35px 16px rgba(22, 240, 22, 1);
  }
  .link {
    @media (min-width: 992px) {
      margin-right: 2vw;
    }
  }
  .contact-link {
    color: white;
    transition: all 0.2s linear;
  }
  .contact-link:hover {
    color: #c8c8c8;
  }
  .dropdown-item {
    color: black;
    transition: all 0.3s linear;
  }
  .navbar-nav {
    @media (min-width: 1900px) {
      margin-left: calc(200px + 1vw);
    }
  }
  .dropdown-item:hover {
    color: #535353;
  }
  .dropdown-divider {
    border-top: 1px solid black;
    box-shadow: 0px 1px 2px 0 rgba(0, 0, 0, 1);
  }
  .logo {
    width: 100px;
    height: 100px;
  }
`;
export default Wrapper;
