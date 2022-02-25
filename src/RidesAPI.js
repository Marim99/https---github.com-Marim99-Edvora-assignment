const apiRides = "https://assessment.api.vweb.app/rides";
const apiUsers = "https://assessment.api.vweb.app/user";

export const getUser = () => {
  return fetch("/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
    },
  }).then((res) => res.json());
};
export const getRides = () => {
  return fetch("/rides", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
    },
  }).then((res) => res.json());
};
