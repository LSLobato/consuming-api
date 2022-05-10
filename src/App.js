import React, { useEffect, useState } from 'react';
import api from './services/api';

function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    api
      .get("/users/Romulo27")
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("Fom! ocorreu um erro" + err);
      });
  }, []);

  // useEffect(() => {
  //   .post("http://base_url", {
  //     campo1:"***",
  //     campo2:"***"
  //   })
  //   .then((response) => setUser(response.data))
  //   .catch((err) => {
  //     console.error("Fom! Erro!" + err);
  //   })
  // }, []);


  return (
    <div className="App">
        <p>User: {user?.login} </p>
        <p>Bio: {user?.bio} </p>
      
    </div>
  );
}

export default App;
