import styled from "styled-components";

const Wrapper = styled.section`
  padding: 2vw;
  text-shadow: 1px 1px 5px black;
  article {
    @media (min-width: 933px) {
      max-width: 40vw;
    }
    display: flex;
    gap: 30px;
    flex-direction: column;
    height: 20%;
    justify-content: space-around;
    text-align: justify;
  }
  .title {
    display: flex;
    justify-content: space-between;
  }
  h2 {
    margin-bottom: 0;
    align-self: center;
  }

  img {
    @media (max-width: 420px) {
      width: 60px;
      height: 60px;
    }
  }
`;
export default Wrapper;
