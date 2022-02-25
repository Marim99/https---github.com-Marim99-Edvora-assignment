import { useState, useEffect, Fragment } from "react";
import { getRides } from "../RidesAPI";
import FilterBar from "./FilterBar";
import Menu from "./Menu";
const Home = ({ user }) => {
  const [rides, setRides] = useState([]);
  useEffect(() => {
    getRides().then((data) => setRides(data));
  }, []);
  return (
    <Fragment>
      <FilterBar rides={rides} user={user} />
      <Menu rides={rides} user={user} />
    </Fragment>
  );
};

export default Home;
