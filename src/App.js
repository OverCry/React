import Header from "./components/Header";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";
import { useState, useEffect } from "react";

function App() {
  //always returns a single parent element
  // basically, encapsulate everything in one <>
  // if you dont want it to be grouped as a div, use an empty angle bracket
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([]);

  //can write javascript right into {}
  //ints and bool uses {} instead of ""

  useEffect(()=>{
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  //fetch tasks
  const fetchTasks = async ()=>{
    const res = await fetch('http://localhost:5000/tasks')
    const data= await res.json()

    return data
  }

    //fetch task
    const fetchTask = async (id)=>{
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data= await res.json()
  
      return data
    }

  //for adding the task
  const addTask = async (task) =>{
    const res = await fetch('http://localhost:5000/tasks', {
      method:'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    //new task that was just made
    const data = await res.json()

    setTasks([...tasks,data])
    // const id = Math.floor(Math.random() * 10000) +1
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  }


  //for deleting the task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    // console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, 
    reminder: !taskToToggle.reminder}

    const res= await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()


    setTasks(tasks.map((task)=> 
      task.id===id ? { ...task, reminder: data.reminder} : task))
    console.log(id);
  };

  //&& means same as ? without the else
  return (
    <Router>
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />

      <Route path='/' exact render={(prop)=>(
        <>
              {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks"
      )}
        </>
      )} />
      <Route path='/about' component={About}/>
      <Footer/>
    </div>
    </Router>
  );

}

export default App;
