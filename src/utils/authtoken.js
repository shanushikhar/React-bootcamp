export function authToken() {
  const token = localStorage.getItem("token");
  return token;
}

// export function getToken() {
//   return authToken();
// }
