let url = 'http://api.icndb.com/jokes/random';
let button = document.getElementById('get-joke');
let paragraph = document.getElementById('joke');

document.addEventListener('DOMContentLoaded', function () {
    getJoke();
})

button.addEventListener('click', function () {
    getJoke();
})

function getJoke() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', function () {
        var response = JSON.parse(xhr.response);
        paragraph.innerHTML = response.value.joke;
    })
    xhr.send();
}