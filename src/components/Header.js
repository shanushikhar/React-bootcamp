import { useDispatch, useSelector } from "react-redux";

import { loggedOut } from "../store/auth-slice";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const isUserLoggeIn = useSelector((state) => state.ourAuth.isLoggedIn);

  const logOutHandler = (e) => {
    e.preventDefault();
    dispatch(loggedOut());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isUserLoggeIn && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logOutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
