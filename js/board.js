function addBoardToMain(target, board) {
    var newBoard = document.createElement('div');
    newBoard.className = 'board';
    target.insertBefore(newBoard, target.lastElementChild)


    var newName = document.createElement('div');
    newName.innerHTML = "Name..";
    newName.className = 'name';
    newBoard.appendChild(newName)

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

function renderBoards(target, data) {
    console.log(target, data);

    for (var board in data) {
        addBoardToMain(target, board);
    }
}