import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  //always returns a single parent element
  // basically, encapsulate everything in one <>
  // if you dont want it to be grouped as a div, use an empty angle bracket
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at schook",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ])

  //can write javascript right into {}
  //ints and bool uses {} instead of ""

  //for deleting the task
  const deleteTask = (id) =>{
    console.log('delete', id)
    setTasks(tasks.filter((task)=>task.id!=id))
  }


  return (
    <div className="container">
      <Header />
      {tasks.length>0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : "No tasks"}
    </div>
  );
}

export default App;
