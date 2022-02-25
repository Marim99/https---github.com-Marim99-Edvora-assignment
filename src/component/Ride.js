import React from "react";
import { Image, Row, Container } from "react-bootstrap";

const Ride = ({ ride, user }) => {
  return (
    <Container className="ride-container">
      <Row>
        <div>
          <div className="col">
            <Image
              style={{
                position: "absolute",
                width: "296px",
                height: "148px",
                display: "block",
              }}
              src="https://picsum.photos/200"
            />
          </div>
          <div className="col ride-details ">
            {" "}
            <p className="Card-Text">Ride Id:{ride.id}</p>
            <p className="Card-Text">
              origin_station_code: {ride.origin_station_code}
            </p>
            <p className="Card-Text">
              {`station_path: [ ${ride.station_path} , ] `}
            </p>
            <p className="Card-Text">date: {`${new Date(ride.date)}`}</p>
            <p className="Card-Text">
              Distance :
              {
                ` ${Math.min(
                  ...ride.station_path.map((e) =>
                    Math.abs(e - user.station_code),
                  ),
                )}`

                // console.log(minDistance)
              }
            </p>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Ride;
