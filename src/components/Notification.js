import Wrapper from "../wrappers/Notification";

const Notification = ({type, text}) => {
  return (
    <Wrapper>
      <div class={`alert alert-${type}`} role="alert">
        {text}
      </div>
    </Wrapper>
  )
}
export default Notification