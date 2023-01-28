import styled from "styled-components";

const Wrapper = styled.section`
  .message-container {
    width: 100vw;
    padding: 2vw;
    @media (min-width: 550px) {
      width: 90vw;
    }
    display: flex;
    gap: calc(10px + 1vw);
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px,
      rgba(255, 255, 255, 0.35) 0px 50px 50px,
      0px 0px 35px 26px rgba(246, 36, 89, 1);
  }
  input,
  textarea {
    outline: none;
    border: none;
    resize: none;
    min-width: 70%;
    max-width: 700px;
  }
  textarea::-webkit-scrollbar {
    display: none;
  }
  textarea {
    min-height: 150px;
  }
  input:focus,
  textarea:focus {
    box-shadow: rgba(0, 100, 255, 0.8) 0px 0px 5px 3px;
  }
  button {
    min-width: 200px;
  }
`;
export default Wrapper;
