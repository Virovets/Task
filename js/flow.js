function getData() {

    return new Promise(function(resolve, reject) {

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState != 4) { return; }

            resolve(xhr.responseText);
        }
        xhr.open('GET', 'data.json', true);

        var body = undefined;

        xhr.send(body);
    })
}




window.onload = function() {

    getData()
        .then(function(response) {
            var main = document.querySelector('.content');
            var model = JSON.parse(response);
            console.log(model)

            renderBoards(main, model.data.boards);
        })


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

    function onAddBoard() {
        var main = document.querySelector('.content');
        addBoardToMain(main, {});
        console.log('hi')
    }

    var checked = document.querySelector('.input');

    checked.addEventListener('click', function() {
        addBoard.classList.toggle("hidden");
    })


}