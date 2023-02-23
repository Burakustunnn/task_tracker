import axios from "axios"
import { Button } from "bootstrap"
import { useEffect, useState } from "react"
import AddTask from "../components/addTask/AddTask"
import TaskList from "../components/taskList/TaskList"

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState("Show Task Bar")
  const [task, setTask] = useState([])
  

  const toggle =()=>{
    setIsOpen(!isOpen)
    const buttonText = isOpen?"Show Task Bar" : "Hide Task Bar"
    setText(buttonText)
  }
  
  const getTask= async()=>{
     const url="https://63f72942e40e087c958888a6.mockapi.io/api/tasks"
     const { data } = await axios(url)
     setTask(data)
  }


  useEffect(() => {
    getTask()
  }, [])
  



  return (
    <div className="mt-4 d-flex justify-content-center flex-column">
      <Button variant="primary" onClick={()=>toggle}>{text}</Button>
      {isOpen&& <AddTask getTask={getTask} /> }      

      <TaskList task = {task} getTask={getTask}/>
      
    </div>
  )
}

export default Home
