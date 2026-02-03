import React, { createContext, useContext, useState } from "react";



// eslint-disable-next-line react-refresh/only-export-components
export const MyContext = createContext(null);

  const MyProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    setUser({ email, password });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <MyContext.Provider value={{ user, login, logout }}>
      {children}
    </MyContext.Provider>
  );
};
export default MyProvider

export const MyAuth = () => useContext(MyContext);