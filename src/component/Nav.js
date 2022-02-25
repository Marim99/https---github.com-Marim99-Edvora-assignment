import { Image, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const Nav = ({ user }) => {
  return (
    <Navbar>
      <div>
        <span className="logo">Edvora </span>
        <Navbar.Collapse className="justify-content-end">
          <div className="user-info">
            <Navbar.Text className="user-name">{user.name}</Navbar.Text>
            <Image
              roundedCircle
              style={{ width: "44px", height: "44px" }}
              src={user.url}
            ></Image>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Nav;
