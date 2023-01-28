import styled from 'styled-components'

const Wrapper = styled.section`
  .carousel, .carousel-inner {
    @media (min-width: 933px) {
      width: 30vw;
      height: auto;
    }
    width: 95vw;
    height: auto;
    //same as the rest i guess?
    box-shadow: inset 0 0 18px 20px rgba(255,225,0,1);
  }

`
export default Wrapper