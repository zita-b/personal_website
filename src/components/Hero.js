import Video from "./Video"
import Button from "./Button"
import Wrapper from "../wrappers/Hero"

const Hero = () => {
  return (
    <Wrapper>
      <section className="hero-container">
        <div className="intro-container">
          <article>
            <h1>IRL QUATRO channel!</h1>
            <p>Based in the beautiful city of Amsterdam, but you can find us EVERYWHERE. Coffeeshop? Gym? Party? Disneyland? Haunted church? Say no more. THE WORLD IS OURS!</p>
          </article>

          <a href="https://www.youtube.com/@StephanieQuatro" target="_blank" rel="noreferrer">
            <Button
              text={'Go to my Youtube'}
            />
          </a>
        </div>

        <div className="video-container">
          <Video />
        </div>
      </section>
    </Wrapper>
  )
}

export default Hero