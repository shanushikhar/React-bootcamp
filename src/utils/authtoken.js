export function authToken() {
  const token = localStorage.getItem("token");
  return token;
}
