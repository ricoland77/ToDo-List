import "./App.css";
import Header from "./components/Header";

// import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faListAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
library.add(faTrash, faListAlt);

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTab = [...tasks];
    newTab.push({
      title: input,
      toDo: false,
    });
    setTasks(newTab);
    setInput("");
  };

  const handleCkeck = (index) => {
    const newTab = [...tasks];
    newTab[index].toDo = !newTab[index].toDo;
    setTasks(newTab);
  };

  const handleDelete = (index) => {
    const newTab = [...tasks];
    newTab.splice(index, 1);
    setTasks(newTab);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="list">
          <div className="all-tasks">
            {tasks.map((task, index) => {
              return (
                <div className="task" key={index}>
                  <input
                    checked={task.toDo ? true : false}
                    type="checkbox"
                    onChange={() => {
                      handleCkeck(index);
                    }}
                  />
                  <span className={task.toDo ? "isDone" : null}>
                    {task.title}
                  </span>
                  <span>
                    <FontAwesomeIcon
                      className="icon-trash"
                      icon="trash"
                      onClick={() => {
                        handleDelete(index);
                      }}
                    />
                  </span>
                </div>
              );
            })}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="input-btn">
              <input
                className="input"
                type="text"
                placeholder="New task..."
                value={input}
                onChange={(event) => {
                  setInput(event.target.value);
                }}
              />
              <input className="btnAddTask" type="submit" value={"Add task"} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
