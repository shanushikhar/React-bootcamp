import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const url = new URL(request.url).searchParams;
  const mode = url.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Can not create User profile" }, { status: 422 });
  }

  const dataForm = await request.formData();

  const data = {
    email: dataForm.get("email"),
    password: dataForm.get("password"),
  };

  const res = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (res.status == 422 || res.status == 401) {
    return res;
  }
  if (!res.ok) {
    throw json({ message: "Something went wrong with user" }, { status: 422 });
  }

  return redirect("/");
}
