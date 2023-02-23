import {RiDeleteBack2Fill} from "react-icons"

const TaskList = ({task, getTask}) => {

  const deleteTask =()=>{
    try {
      
    } catch (error) {
      
    }

  }


  return (
    <div>
      {task.map((item)=>{
        const {id,task,date}=item
        return (
          <div>
            <div>
              <h4>{task}</h4>
              <p>{date}</p>
            </div>
              <div>
                <RiDeleteBcak2Fill style={{cursor:"pointer"}}></RiDeleteBcak2Fill>
              </div>
          </div>


        )
      })}
    </div>
  )
}

export default TaskList
