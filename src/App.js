import { Fragment } from "react";
import { TasksContextProvider } from "./context/tasks-context";
import Main from "./components/main/main";


function App() {
  return (
    <Fragment>
      <TasksContextProvider>
        <Main />
      </TasksContextProvider>
    </Fragment>
  );
}

export default App;
