const TaskList = ({ tasks }) => {
  return (
    <>
      {tasks ? <ol>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ol> : <p>Não há tarefas para mostrar</p>}

      
    </>
  );
};

export default TaskList;
