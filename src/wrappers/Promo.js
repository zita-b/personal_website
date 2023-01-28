import styled from 'styled-components'

const Wrapper = styled.section`
  div {
    padding: 1vw;
    display: flex;
    justify-content: center;
    padding-top: 1em;
    @media (min-width: 550px) {
      position: fixed;
      bottom: 0;
    }
    background-color: rgb(255,225,0);
    width: 100%;
    box-shadow: 0px -10px 25px 5px rgba(22,240,22,1);
    @media (min-width: 549px) {
      height: calc(10rem + 2vw);
    }
    @media (min-width: 591px) {
      height: calc(7rem + 3vw);
    }
    z-index: 4;
  }
  .hide {
    bottom: -20rem;
    transition-property: all; 
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 600ms;
  }
  .show {
    bottom: 0;
    transition-property: all; 
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 800ms;
  }
  h4 {
    font-size: 18px;
    @media (min-width: 1140px) {
      font-size: 24px;
    }
    @media (min-width: 1900px) {
      font-size: 36px;
    }
    color: white;
    background: linear-gradient(to right, #4d4d4d 0, white 10%, #4d4d4d 20%);
    background-position: 0;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-size-adjust: none;
    animation: shine 14s infinite linear;
    animation-fill-mode: forwards;
  }
  @keyframes shine {
    0% {
    background-position: 0;
    }
    100% {
      background-position: 100vw;
    }
  }
`
export default Wrapper