import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
const [user, setUser] = useState({});
const [isLogged, setIsLogged] = useState(false);



  return (
    <AuthContext.Provider value={{ user, setUser, isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>);
}

export default AuthProvider;