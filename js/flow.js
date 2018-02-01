var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) { return; }
}


xhr.open('GET', 'data.json', true);

var body = undefined;

xhr.send(body);


window.onload = function() {

    var addTask = document.querySelectorAll('.addTask');
    var scrolltask = document.querySelectorAll('.scrolltask');

    for (var i = 0; i < addTask.length; i++) {
        addTask[i].addEventListener('click', onAddTask.bind(null, i))
    }

    function onAddTask(pos, event) {
        addTaskToBoard({
            target: scrolltask[pos]
        });
    }

    var addBoard = document.getElementById('addBoard');

    addBoard.addEventListener('click', onAddBoard.bind(null))

    function onAddBoard(pos, event) {
        addBoardToMain({
            // target: main
        });
    }

}