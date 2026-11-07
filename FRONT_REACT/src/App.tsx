import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm';

function App() {
	const [tasks, setTasks] = useState([]);
	// const tasks: string[] = [];

	const listItem = tasks.map(task => <li>{task}</li>)

	function addTask(e) {
		e.preventDefault();
		const form = e.target;
		const formData = new FormData(form);
		const task = formData.get("task");
		if (task) {
			setTasks([...tasks, ...[task]]);
		}
		form.reset();
	}

  return (
    <>
		<TaskForm addTask={addTask}></TaskForm>
		<ul>
			{listItem}
		</ul>
      </>
  )
}

export default App
