import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Users from "./components/Users";

/*
1. Build users
2. Build Card
3. Build form
4. Build button
5. Build modal
*/

const usersData = [{id: 1, name: "Kelvin", age: 35},
 {id: 2, name: "Sarah", age: 30}]

function App() {
  const [users, setUsers] = useState(usersData);

  const saveUserHandler = function(data){
    // Use callback to ensure getting the lastest snapshot before update
    setUsers(prevData =>
      [data, ...prevData]);
  }

  return (
    <div className="app">
      <Form onSaveUser={saveUserHandler}/>
      <Users users={users}/>
    </div>
  );
}

export default App;
