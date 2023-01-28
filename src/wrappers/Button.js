import styled from "styled-components";

const Wrapper = styled.section`
display: flex;
justify-content: center;
  button {
    min-width: fit-content;
    color: white;
    position: relative;
    border: none;
    border-radius: 6px;
    white-space: nowrap;
    padding: 8%;
    z-index: 1;
    font-weight: 700;
    text-shadow: 1px 1px 3px gray;
  }

  a {
    text-decoration: none;
  }
  button:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    animation: glowing 20s linear infinite;
  }

  button:active:after {
    background: transparent;
  }

  button:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: hotpink;
    left: 0;
    top: 0;
    border-radius: 6px;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;
export default Wrapper;
