import { redirect } from "react-router-dom";

export function authToken() {
  const token = localStorage.getItem("token");
  return token;
}

// export function getToken() {
//   return authToken();
// }

export function checkToken() {
  const token = authToken();

  if (!token) {
    return redirect("/auth");
  }

  return null;
}
