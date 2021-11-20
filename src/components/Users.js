import Card from "./UI/Card";
import classes from "./Users.module.css";

const Users = function (props) {
  return (
    <div>
      {props.users.map(user =>
        <Card key={user.id} className="users">
          {user.name} {user.age} years old
        </Card>
      )}
    </div>
  );
};

export default Users;
