import { Nav } from "react-bootstrap";

const FilterBar = () => {
  return (
    <div className="home-container">
      <Nav className="filter-rides" defaultActiveKey="first">
        <Nav.Item>
          <Nav.Link eventKey="first">Nearest rides</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Upcoming rides {`()`}</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Past rides {`()`}</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default FilterBar;
