import axios from "axios";
import { RiDeleteBack2Fill } from "react-icons/ri";

const TaskList = ({ task, getTask }) => {
  const deleteTask = async (id) => {
    const url = "https://63f72942e40e087c958888a6.mockapi.io/api/v1/tasks";
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTask();
  };

  return (
    <div>
      {task.map((item) => {
        const { id, task, date } = item;
        return (
          <div key={id} className="mt-2 d-flex justify-content-between bg-secondary rounded-2 p-2">
            <div>
              <h4>{task}</h4>
              <p>{date}</p>
            </div>
            <div>
              <RiDeleteBack2Fill
                style={{
                  cursor: "pointer",
                  marginRigth: "20px",
                  fontSize: "2rem",
                  boxshadow: "2px 2px 2px gren",
                }}
                onClick={() => deleteTask(id)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
