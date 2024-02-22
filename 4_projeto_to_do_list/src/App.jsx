import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks)), [tasks];
  });

  const addTask = (task) => {
    // id, text, done

    setTasks([...tasks, { id: Date.now(), text: task, done: false }]);

    // localStorage
  };


  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskDone = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      
      <TaskInput onAddTask={addTask} onToggleTask={toggleTaskDone} />
      
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleTaskDone={toggleTaskDone}
      />
      
    </div>
    
  );
}

export default App;
