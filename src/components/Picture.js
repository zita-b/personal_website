import Wrapper from "../wrappers/Picture";

const Picture = () => {
  return (
    <Wrapper>
      <article className="picture">
        <img src={require(`../images/contact.jpg`)} alt="" />
      </article>
    </Wrapper>
  )
}
export default Picture