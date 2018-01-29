var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) { return; }
}


xhr.open('GET', 'data.json', true);

var body = undefined;

xhr.send(body);


window.onload = function() {

    var add = document.querySelectorAll('.addTask');
    var scrolltask = document.querySelectorAll('.scrolltask');

    for (var i = 0; i < add.length; i++) {
        add[i].addEventListener('click', onAddTask.bind(null, i))
    }

    function onAddTask(pos, event) {
        addTaskToBoard({
            target: scrolltask[pos]
        });
    }
}