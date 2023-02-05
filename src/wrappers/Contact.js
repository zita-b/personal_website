import styled from "styled-components";

const Wrapper = styled.section`
  .home {
    display: flex;
    flex-direction: column;
    width: 80vw;
    @media (min-width: 550px) {
      margin-bottom: calc(130px + 4vw);
      width: 90vw;
    }
    align-items: center;
    margin: 0 auto;
    box-shadow: 0px 0px 35px 26px rgba(246, 36, 89, 1);
    margin-bottom: 60px;
  }
`;
export default Wrapper;
