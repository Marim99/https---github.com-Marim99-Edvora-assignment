import Ride from "./Ride";
const Menu = ({ rides, user }) => {
  return (
    <div>
      {rides
        .sort((a, b) =>
          Math.min(
            ...a.station_path.map(
              (e) =>
                Math.abs(e - user.station_code) -
                Math.min(
                  ...b.station_path.map((e) => Math.abs(e - user.station_code)),
                ),
            ),
          ),
        )
        .map((ride) => (
          <Ride ride={ride} key={ride.id} user={user} />
        ))}
    </div>
  );
};

export default Menu;
