import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../Context/auth-context";

const Cockpit = (props) => {
  const toggelBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    //HTTP request..
    /* setTimeout(() => {
          alert('Saved data to cloud!')
        }, 1000); */
    toggelBtnRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  });
  //useEffect

  const assignedClasses = [];
  let btnClass = "";
  btnClass = classes.Cockpit;
  if (props.showPersons) {
    btnClass = classes.Red;
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); //pushes red css class
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // pushes bold css class
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button ref={toggelBtnRef} className={btnClass} onClick={props.clicked}>
        Toggler Persons
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(Cockpit);
