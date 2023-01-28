import Picture from "./Picture";
import Message from "./Message";
import Wrapper from "../wrappers/Contact";

const Contact = () => {
  return (
    <Wrapper>
      <div className="home">
        <Picture />
        <Message />
      </div>
    </Wrapper>
  );
};
export default Contact;
