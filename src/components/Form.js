import { useState } from "react";

import Card from "./UI/Card";
import Button from "./UI/Button";
import Modal from "./UI/Modal";

import classes from "./Form.module.css";

const Form = function (props) {
  const [error, setError] = useState();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameInputHandler = function (e) {
    setName(e.target.value);
  };

  const ageInputHandler = function (e) {
    setAge(e.target.value);
  };

  const addUserHandler = function (e) {
    e.preventDefault();
    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        header: "Invalid Input",
        body: "Enter both name and age",
      });
      return;
    }

    if (+age < 0) {
      setError({
        header: "Invalid Input",
        body: "Age must be bigger than 0",
      });
      return;
    }

    const newData = {
      id: Math.random.toString(),
      name: name,
      age: age,
    };

    props.onSaveUser(newData);
    setName("");
    setAge("");
  };

  const closeModalHandler = function () {
    setError(null);
  };

  return (
    <>
      <Card>
        <form onSubmit={addUserHandler} className={classes.form}>
          <label>UserName</label>
          <input type="text" onChange={nameInputHandler}></input>
          <label>Age</label>
          <input
            type="number"
            mx="200"
            onChange={ageInputHandler}
          ></input>
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
