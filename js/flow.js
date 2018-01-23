var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState != 4) { return; }
}


xhr.open('GET', 'data.json', true);

var body = undefined;

xhr.send(body);