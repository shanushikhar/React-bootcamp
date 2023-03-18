import { redirect } from "react-router-dom";

export function Logout() {
  localStorage.removeItem("token");
  return redirect("/");
}
