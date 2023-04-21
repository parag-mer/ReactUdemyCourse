import React,{useState} from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
function App() {
  
  const [usersList , setUsersList] = useState([]);
  
  const usersListReceiver = (uAge , uName) => {
    setUsersList((prevUserList) => {
      return [...prevUserList , {name : uName , age : uAge , id : Math.random().toString()}];
    });
  };

  return (
    <div>
      <AddUser getusers={usersListReceiver}/> 
      <UserList users={usersList} />
    </div>
  );
}

export default App;
