window.onload = function() {

    // var board = document.getElementsByClassName('board');

    var button1 = document.getElementById('firstButton');


    button1.addEventListener('click', function() {
        var board1 = document.getElementById('board1');
        var task = document.querySelector('task');

        var task1 = document.createElement('div');
        task1.className = "task";

        board1.appendChild(task1);

    })

    var button2 = document.getElementById('secondButton');


    button2.addEventListener('click', function() {
        var board2 = document.getElementById('board2');
        var task = document.querySelector('task');

        var task2 = document.createElement('div');
        task2.className = "task";

        board2.appendChild(task2);

    })






}