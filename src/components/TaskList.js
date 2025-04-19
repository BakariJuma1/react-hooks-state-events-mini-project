import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          onDelete={() => onDeleteTask(task.text)}
        />
      ))}
    </div>
  );
}

export default TaskList;

// // import React, { useLayoutEffect } from "react";
// import { TASKS } from "../data";
// import Task from "./Task";
// import { useState } from "react";

// function TaskList({ tasks }) {
//   console.log({ tasks });

//   const [MyTasks, setMyTask] = useState(TASKS);

//   function handleDelete(text) {
//     const updatedTasks = MyTasks.filter((task) => task.text !== text);
//     setMyTask(updatedTasks);
//   }

//   return (
//     <div className="tasks">
//       {MyTasks.map((task) => (
//         <Task
//           key={task.text}
//           task={task}
//           tasks={TASKS}
//           onDelete={handleDelete}
//         />
//       ))}
//       {/* display a list of tasks using Task component */}
//     </div>
//   );
// }

// export default TaskList;
