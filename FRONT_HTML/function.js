var form = document.getElementById("form");
var listTask = document.getElementById("Todo-list");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	var formData = new FormData(form);
	if (formData.get("task")) {
		var li = document.createElement("li");
		li.innerText = formData.get("task");
		listTask.appendChild(li);
	}
	form.reset();
});
