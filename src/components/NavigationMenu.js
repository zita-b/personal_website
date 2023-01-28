import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LinkIcon from "./LinkIcon";
import { Link } from "react-router-dom";
import Wrapper from "../wrappers/NavigationMenu";

function NavigationMenu() {
  return (
    <Wrapper>
      <Navbar collapseOnSelect expand="md" variant="dark" className="navbar">
        <Container className="nav-container">
          <Navbar.Brand href="#home">
            <Link to="/">
              <img
                src={require("../images/logo.png")}
                alt=""
                className="logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav nav-container" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="link">
                <Link to="/contact" className="contact-link">
                  Contact
                </Link>
              </Nav.Link>
              <Nav.Link
                href="https://streamelements.com/stephaniequatro/tip"
                target="_blank"
                className="link"
              >
                <LinkIcon
                  icon={
                    <img src="https://img.icons8.com/color/48/null/hand-holding-heart.png" alt=""/>
                  }
                  text={"Donate"}
                />
              </Nav.Link>

              <NavDropdown title="Socials" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  href="https://www.instagram.com/stephaniequatro/"
                  target="_blank"
                  className="bg-success font"
                >
                  <LinkIcon
                    icon={
                      <img src="https://img.icons8.com/color/48/null/instagram-new--v1.png" alt=""/>
                    }
                    text={"Instagram"}
                  />
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="https://discord.com/invite/rqqKCNpcYH"
                  target="_blank"
                  className="bg-warning font"
                >
                  <LinkIcon
                    icon={
                      <img src="https://img.icons8.com/color/48/null/discord--v2.png" alt=""/>
                    }
                    text={"Discord"}
                  />
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="https://twitter.com/QuatroStephanie?s=09"
                  target="_blank"
                  className="bg-primary font"
                >
                  <LinkIcon
                    icon={
                      <img src="https://img.icons8.com/color/48/null/twitter--v1.png" alt=""/>
                    }
                    text={"Twitter"}
                  />
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="https://www.tiktok.com/@stephaniequatro?_d=secCgYIASAHKAESPgo8bLTjW6b943%2BKP5mrHjdkoyl50Wopwi1R7jkt8goY4TwhYEHRK4g3ubT7nc%2BefHB2gctig%2FwBsO7SRmovGgA%3D&language=nl&sec_uid=MS4wLjABAAAAepwRcSDJ5jH8WIOiGH7V51eOkUyL0tH1f0QHnQYkfDawFSOVy2YgvSkc67ddOjr1&sec_user_id=MS4wLjABAAAAepwRcSDJ5jH8WIOiGH7V51eOkUyL0tH1f0QHnQYkfDawFSOVy2YgvSkc67ddOjr1&share_app_id=1233&share_author_id=7018488827682341894&share_link_id=758e13d6-d574-477f-bc19-64a3c64d2fc2&timestamp=1634657487&u_code=dl6253gi478jfb&user_id=7018488827682341894&utm_campaign=client_share&utm_medium=android&utm_source=copy&_r=1"
                  target="_blank"
                  className="bg-success font"
                >
                  <LinkIcon
                    icon={
                      <img src="https://img.icons8.com/color/48/null/tiktok--v1.png" alt=""/>
                    }
                    text={"TikTok"}
                  />
                </NavDropdown.Item>
                <NavDropdown.Divider />

                <NavDropdown.Item
                  href="https://www.twitch.tv/stephaniequatro"
                  target="_blank"
                  className="bg-warning font"
                >
                  <LinkIcon
                    icon={
                      <img src="https://img.icons8.com/color/48/null/twitch--v1.png" alt=""/>
                    }
                    text={"Twitch"}
                  />
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://open.spotify.com/user/stephanie953?si=809f8bc1731a4771&nd=1"
                  target="_blank"
                  className="bg-primary font"
                >
                  <LinkIcon
                    icon={
                      <img src="https://img.icons8.com/color/48/null/spotify--v1.png" alt=""/>
                    }
                    text={"Spotify"}
                  />
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              <Nav.Link
                href="https://www.amazon.nl/hz/wishlist/ls/161ZAQHU2T65F"
                target="_blank"
                className="link"
              >
                <LinkIcon
                  icon={
                    <img src="https://img.icons8.com/color/48/null/amazon.png" alt=""/>
                  }
                  alt=""
                  text={"Wishlist"}
                />
              </Nav.Link>

              <Nav.Link
                eventKey={2}
                href="https://streamlabs.com/stephaniewerneriquadros/merch"
                target="_blank"
                className="link"
              >
                <LinkIcon
                  icon={
                    <img src="https://img.icons8.com/color/48/null/clothes.png" alt=""/>
                  }
                  alt=""
                  text={"Merch"}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Wrapper>
  );
}

export default NavigationMenu;
