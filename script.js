let interval = setInterval(fun, 1000);


function fun() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById('watch').innerHTML = time;

    let currentdate = date.toLocaleDateString();
    document.getElementById('date').innerHTML = currentdate;
}
