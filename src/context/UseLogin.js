import React, { createContext, useContext, useState } from "react";

export const LoginContext = createContext();

export default function LoginContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  return (
    <LoginContext.Provider
      value={{
        tasks,
        setTasks,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(LoginContext);
  const { tasks, setTasks } = context;
  return { tasks, setTasks };
}