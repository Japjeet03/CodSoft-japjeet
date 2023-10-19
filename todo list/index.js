document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    // Load tasks from local storage
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    storedTasks.forEach(function (taskText) {
        addTask(taskText);
    });
-
    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            addTask(taskText);
            saveTasksToLocalStorage();
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-task"))
            const listItem = event.target.closest("li");
            taskList.removeChild(listItem);
            saveTasksToLocalStorage();
        }
    });

    function addTask(taskText) {                                  
        const listItem = document.createElement("li");
        listItem.innerHTML = `  
            <span>${taskText}</span>
            <button class="delete-task btn btn-outline-danger">Delete</button>
        `;

        taskList.appendChild(listItem);
    }

    function saveTasksToLocalStorage() {
        const tasks = Array.from(taskList.querySelectorAll("li")).map(function (task) {
            return task.querySelector("span").textContent;
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
});
