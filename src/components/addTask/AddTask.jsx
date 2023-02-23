import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import { useState } from "react";

const AddTask = ({getTask}) => {

  const [task, setTask] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit=(e)=>{

    e.preventDefault()
    const newTask ={task, date}
    addNewTask(newTask)
    setTask("")
    setDate("")

  }


  const addNewTask=async(newtaskdate)=>{
    const url="https://63f72942e40e087c958888a6.mockapi.io/api/tasks"

    try {
      await axios.post(url,newtaskdate)
      
    } catch (error) {
      console.log(error)
      
    }
    getTask()

  }

  return (

    <div>

      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>TASK</Form.Label>
          <Form.Control type="text" placeholder="Enter Task..." onChange={(e)=>setTask(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>DATE</Form.Label>
          <Form.Control type="date" onChange={(e)=>setDate(e.target.value)} />
        </Form.Group>

        <div>
          <Button variant="primary w-25" type="submit">
            save
          </Button>
        </div>

      </Form>

    </div>

  );
};

export default AddTask;
