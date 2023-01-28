import styled from 'styled-components'

const Wrapper = styled.section`
  .menu-container::-webkit-scrollbar{
    display: none;
  }
  .menu-container h2, h4 {
    color: white;
    text-shadow: 0.1em 0.1em black;
  }
  .menu-container {
    @media (min-width: 933px) {
      width: 35vw;
      height: calc(420px + 30vw);
    }
    height: 600px;
    width: 82vw;
    color: #b8fc03;
    text-shadow: 1px 1px 5px black;
    text-align: center;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    overflow: scroll;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .menu-container span {
    color: black;
    text-shadow: 1px 1px 5px white;
    font-weight: bold;
  }
  .emotes {
    display: flex;
    justify-content: center;
  }
`

export default Wrapper