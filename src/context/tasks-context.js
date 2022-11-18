import { createContext, useState } from "react";

export const TasksContext = createContext([]);
export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]); // state is declared on the upper level so we can show tasks in the list

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>);
};
