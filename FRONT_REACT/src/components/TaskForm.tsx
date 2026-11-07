
function TaskForm({addTask}) {

	return (
		<form onSubmit={addTask}>
			<input name="task" type="text" placeholder="Tache à faire"/>
			<button type="submit">Ajouter</button>
		</form>);
}
export default TaskForm;
