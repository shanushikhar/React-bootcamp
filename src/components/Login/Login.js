import React, { useEffect, useReducer, useState, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../store/context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "EMAIL_BLUR") {
    // state will give you the current state's value < value,isValid > at that moment
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return state;
};
const passwordReducer = (state, action) => {
  //console.log(state, action);
  if (action.type === "USER_INPUT") {
    // we can remain the type same in both cases
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "PASSWORD_BLUR") {
    // we can rename the type in both cases
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const context = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailVal } = emailState;
  const { isValid: passwordVal } = passwordState;

  useEffect(() => {
    //console.log("useEffect part");
    let timer = setTimeout(() => {
      //console.log("settimeout part");
      setFormIsValid(emailVal && passwordVal);
    }, 1000); // de-bouncing

    return () => {
      // cleanup fn will execute 1st <after 1st/inital render>
      // console.log("cleanup part");
      clearTimeout(timer);
    };
  }, [emailVal, passwordVal]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "EMAIL_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "PASSWORD_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    context.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          isValid={emailVal}
          id="email"
          type="email"
          name="E-Mail"
          value={emailState.value}
          fieldChangeHandler={emailChangeHandler}
          validateFormHandler={validateEmailHandler}
        />
        <Input
          isValid={passwordVal}
          id="password"
          type="password"
          name="Password"
          value={passwordState.value}
          fieldChangeHandler={passwordChangeHandler}
          validateFormHandler={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
