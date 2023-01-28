import Wrapper from "../wrappers/Card"

const Card = ({title, description}) => {
  return (
    <Wrapper>
      <article>
        <div className="title">
          <h2>
            {title}
          </h2>
          <img src="https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_552aca6979cd4429829af954705d8738/animated/light/3.0"></img>
        </div>
        <p>
          {description}
        </p>
      </article>
    </Wrapper>
  )
}
export default Card