// Imagine que você está desenvolvendo um aplicativo de lista de tarefas em React. Crie um componente chamado "TaskItem" que representa uma tarefa individual da lista. Esse componente deve receber as seguintes propriedades:
// title: o título da tarefa (string)
// completed: indica se a tarefa está concluída ou não (boolean)
import React, { useState } from 'react';

function TaskItem({ title, completed, onTaskComplete }) {
  const handleClick = () => {
    onTaskComplete(title);
  };

  return (
    <div>
      <h3>{title}</h3>
      <span onClick={handleClick}>
        {completed ? 'Concluído' : 'Pendente'}
      </span>
    </div>
  );
}

function TaskList() {
  const [tasks, setTasks] = useState([
    { title: 'Trabalho de matematica', completed: false },
    { title: 'Trabalho de ciencias', completed: false },
    { title: 'Trabalho de geografia', completed: false },
  ]);

  const handleTaskComplete = (taskTitle) => {
    const updatedTasks = tasks.map((task) => {
      if (task.title === taskTitle) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.title}
          title={task.title}
          completed={task.completed}
          onTaskComplete={handleTaskComplete}
        />
      ))}
    </div>
  );
}

export default TaskList;
