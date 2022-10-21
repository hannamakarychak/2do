import Heading from "../heading/heading";
import Container from "../container/container";
import { List } from "../list/list";
import { Input } from "../input/input";
import { useState } from "react";
import "./main.scss";
import { Filters } from "../filters/filters";

const Main = () => {
  const [tasks, setTasks] = useState([]); // state is declared on the upper level so we can show tasks in the list

  const [activeFilter, setActiveFilter] = useState("ALL");

  const handleFilterClick = (name) => {
    // name is being lifted up from Filters
    setActiveFilter(name);
  };

  const getFilteredTasks = () => {
    let filteredTasks = [];
    if (activeFilter === "ALL") {
      filteredTasks = tasks;
    } else if (activeFilter === "COMPLETED") {
      filteredTasks = tasks.filter((task) => task.isDone === true);
    } else {
      filteredTasks = tasks.filter((task) => task.isDone === false);
    }
    return filteredTasks;
  };

  const handleTaskDone = (taskId) => {
    // tasksId is being lifted up from Task because we pass handleTaskDone function to List and then to Task
    const updatedTasks = tasks.map((task) => {
      // since we need to set a new array to state, we use map to get array with updated element
      if (task.id !== taskId) {
        return task;
      } else {
        return {
          ...task,
          isDone: !task.isDone,
        };
      } // map returns a new array with updated element as per condition above
    });

    setTasks(updatedTasks);
  };

  const handleCreate = (text) => {
    // state (text) is being lifted from Input
    const newTask = {
      id: Date.now(),
      text: text, // new task is created with text that user adds in input
      isDone: false,
    };
    const newTasks = [...tasks, newTask]; // we copy an array with all existing tasks and add new task to the array

    setTasks(newTasks); // we update state with new array
  };

  return (
    <main className="main">
      <Container>
        <div className="main__content">
          <Heading text="Here is your best to-do list" />
          <Input
            name="new-task"
            id="new-task"
            placeholder="Jot something down"
            className="input"
            type="text"
            onCreate={handleCreate} // handleCreate is passed as props onCreate to input so all the magic happens there
          />
          <Heading isSecondary text="Tasks for today"></Heading>
          <List tasks={getFilteredTasks()} onDone={handleTaskDone} />
          <Filters tasks={tasks} onClick={handleFilterClick} />
        </div>
      </Container>
    </main>
  );
};

export default Main;
