import styled from "styled-components";

const Wrapper = styled.section`
  .picture {
    margin-top: -140px;
    justify-content: center;
    display: flex;
    box-shadow: 0px 0px 35px 26px rgba(246,36,89,1);
  }
  
  img {
    width: 100vw;
    @media (min-width: 550px) {
      width: 90vw;
    }
    height: auto;
    min-height: 500px;
  }
`;
export default Wrapper;
