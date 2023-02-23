import TaskPng from "../../assets/TaskPng"




const Header = () => {
  return (
    <div className="d-flex justify-content-evenly align-items-center bg-danger">
      <TaskPng/>
      <h1 className="display-5">TASK TRAKER</h1>
    </div>
  )
}

export default Header
