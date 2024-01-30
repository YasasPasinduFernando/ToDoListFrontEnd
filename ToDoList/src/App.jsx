import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import TaskListSection from "./components/taskList/TaskListSection";
import TaskForm from "./components/inputSection/TaskForm";
import UpdateTaskListSection from "./components/UpdateList/UpdateTaskListSection";



function App() {

  return (
    <>
      <TaskListSection/>
      <br/><hr/>
      <TaskForm/>
      <br/><hr/>
      <UpdateTaskListSection/>
      </>
  );
}

export default App
