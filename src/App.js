import { useEffect,useState } from 'react';
import './App.css';

const generateUsers = ()=>{
  return [{id:1, name:'john'},
          {id:2, name:'mark'},
          {id:3, name:'bob'},
          {id:4, name:'samanta'},
          {id:5, name:'eli'},
          {id:6, name:'sam'},
          {id:7, name:'nelly'},
          {id:8, name:'karlos'},
          {id:9, name:'aurora'},
          {id:10,name:'dorota'},
  ];
};

function App() {
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    console.log("generateUsers",generateUsers());
    setUsers(generateUsers());
  },[]);
  useEffect(()=>{
    document.title = `${users.length} users left`;
  },[users]);
  console.log("users",users);
  const removeUser = ()=>{
    setUsers((prevUsers)=>{
      const index = Math.floor(Math.random()* prevUsers.length);
      const newUsers = prevUsers.filter((_, ind) => ind !==index);
      return newUsers;
    });
  }; 
  return (
    <div class="main" 
      style={{
         textAlign:'center'
        }}
    >
      <button onClick={removeUser}>Remove User</button>
      {users.map(({id, name})=>(
        <h1 key={id}>{name}</h1>
      ))}
    </div>
  );
}

export default App;
