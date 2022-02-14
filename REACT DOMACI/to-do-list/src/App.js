import { useState } from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Hokej',
        day: 'Feb 14 u 11:00',
        reminder: true,
    },
    {
        id: 2,
        text: 'Domaci',
        day: 'Feb 13 u 18:00',
        reminder: false,
    },
    {
        id: 3,
        text: 'Predavanje',
        day: 'Feb 14 u 18:00',
        reminder: true,
    }
]) 

// Add task

const addTask =(task) =>{
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

//Delete Task

const deleteTask = (id) =>{
  setTasks(tasks.filter((task)=>task.id !== id))
}

//Toggle Reminder
const toggleReminder = (id) =>{
  setTasks(tasks.map((task)=>task.id === id ? { ...task, reminder: !task.reminder } : task))
}
  return (
    <div className="container">
      <Header/>
      <AddTask onAdd={addTask}/>
     {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask} onToggle={toggleReminder}/> : "No Tasks To Show"}
    </div>
  );
}

export default App;
