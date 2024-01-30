
import './App.css'
import TaskListSection from './components/taskList/TaskListSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskListSection/>
    </>
  )
}

export default App
