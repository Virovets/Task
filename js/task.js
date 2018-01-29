function addTaskToBoard(options) {
    var task = document.createElement('div');
    task.className = "task";
    options.target.appendChild(task);
}