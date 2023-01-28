import Wrapper from "../wrappers/Button";

const Button = ({ text, submit }) => {
  return (
    <Wrapper>
      <button type={submit}>{text}</button>
    </Wrapper>
  );
};

export default Button;
