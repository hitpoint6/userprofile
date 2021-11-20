import { useRef, useState } from "react";

import Card from "./UI/Card";
import Button from "./UI/Button";
import Modal from "./UI/Modal";

import classes from "./Form.module.css";

const Form = function (props) {
  const nameRef = useRef();
  const ageRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = function (e) {
    e.preventDefault();
    // console.log(Math.random());
    const enteredName = nameRef.current.value;
    const enteredAge = ageRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        header: "Invalid Input",
        body: "Enter both name and age",
      });
      return;
    }

    if (+enteredAge < 0) {
      setError({
        header: "Invalid Input",
        body: "Age must be bigger than 0",
      });
      return;
    }

    const newData = {
      id: Math.random().toString(),
      name: enteredName,
      age: enteredAge,
    };
    props.onSaveUser(newData);
    // Rarely use refs to manipulate the DOM
    nameRef.current.value = "";
    ageRef.current.value = "";
  };

  const closeModalHandler = function () {
    setError(null);
  };

  return (
    <>
      <Card>
        <form onSubmit={addUserHandler} className={classes.form}>
          <label>UserName</label>
          <input type="text" ref={nameRef}></input>
          <label>Age</label>
          <input type="number" max="200" ref={ageRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      {error && (
        <Modal
          header={error.header}
          body={error.body}
          onClose={closeModalHandler}
        />
      )}
    </>
  );
};

export default Form;
