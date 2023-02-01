import { useDispatch, useSelector } from "react-redux";

import classes from "./Auth.module.css";
import { loggedIn } from "../store/auth-slice";
import UserProfile from "./UserProfile";

const Auth = () => {
  const loggedInState = useSelector((state) => state.ourAuth.isLoggedIn);
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loggedIn());
  };

  if (loggedInState) {
    return <UserProfile />;
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
