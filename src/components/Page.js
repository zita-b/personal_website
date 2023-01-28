import NavigationMenu from "./NavigationMenu";
import Contact from "./Contact";
import Footer from "./Footer";
import Wrapper from "../wrappers/Fonts";

const Page = () => {
  return (
    <Wrapper>
      <NavigationMenu />
      <Contact />
      <Footer />
    </Wrapper>
  );
};
export default Page;
