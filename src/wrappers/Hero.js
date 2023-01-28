import styled from 'styled-components'

const Wrapper = styled.section`
  .intro-container {
    @media (min-width: 933px) {
      max-width: 40vw;
    }
    display: flex;
    flex-direction: column;
    gap: 2vw;
  }

  .video-container {
    @media (min-width: 933px) {
      width: 56vw;
      height: 31.5vw;
    }
    width: 96vw;
    height: 54vw;
  }

  a {
    align-self: center;
  }

  .hero-container {
    margin-bottom: calc(100px + 5vw);
    border-radius: 50px;
    @media (min-width: 933px) {
      flex-direction: row;
      text-align: start;
    }
    padding: 2vw;
    text-align: center;
    flex-direction: column;
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: space-evenly;
    background-color: rgba(0, 0, 0, 0.5);
    //create universal padding for all sections and elements
  }
`
export default Wrapper
