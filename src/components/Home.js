import NavigationMenu from "./NavigationMenu";
import Hero from "./Hero";
import Main from "./Main";
import Footer from "./Footer";
import Wrapper from "../wrappers/Fonts";

const Home = () => {
  return (
    <Wrapper>
      <NavigationMenu />
      <Hero />
      <Main />
      <Footer />
    </Wrapper>
  );
};
export default Home;
