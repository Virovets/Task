function addBoardToMain() {
    var main = document.querySelector('.content')
    var newBoard = document.createElement('div');
    newBoard.className = 'board';
    main.insertBefore(newBoard, main.lastElementChild)

    var newScrollTask = document.createElement('div');
    newScrollTask.className = 'scrolltask';
    newBoard.appendChild(newScrollTask)

    var newButton = document.createElement('button');
    newButton.innerHTML = "Add new Task...";
    newButton.className = 'addTask';
    newBoard.appendChild(newButton)

    newButton.addEventListener('click', function() {
        var task = document.createElement('div');
        task.className = "task";
        newScrollTask.appendChild(task);
    })

}