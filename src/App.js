import { useState,useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [ isLoggedIn, setIsLoggedIn]= useState(false);
  const navigate = useNavigate();
  
  const login = () =>{
    setIsLoggedIn(true);
  }

  const logout = () =>{
    setIsLoggedIn(false);
  }
  // add programmatic navigation for login and logout
  useEffect(() =>{
    if (isLoggedIn){
      //navigate to home route
      navigate("/")
    }else{
      //navigate to login route if the user is logged out
      navigate("/login")
    };
  }, [isLoggedIn]

  )


  return (
    <div className="app">
      <NavBar logout={logout} />
      <Outlet context={login} />
    </div>
  );
}

export default App;
