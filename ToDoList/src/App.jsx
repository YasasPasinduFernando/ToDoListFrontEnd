import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import TaskListSection from "./components/taskList/TaskListSection";
import TaskForm from "./components/inputSection/TaskForm";



function App() {

  return (
    <>
      <TaskListSection/>
      <TaskForm/>
      </>
  );
}

export default App
