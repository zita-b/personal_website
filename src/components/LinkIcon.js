import Wrapper from "../wrappers/LinkIcon";

const LinkIcon = ({ icon, text }) => {
  return (
    <Wrapper>
      <div className="cont">
        <div
          className="icon-container"
          style={{ transform: "translateY(-10%)" }}
        >
          {icon}
        </div>
        {text}
      </div>
    </Wrapper>
  );
};
export default LinkIcon;
