var openWeatherKey = '36556203304ed5e2306d4f2f41e83392'

document.addEventListener('DOMContentLoaded', bindSubmits());

function bindSubmits()
    document.getElementById('city_submit').addEventListener('click', submitCity(event));
    document.getElementById('bin_submit').addEventListener('click', submitBin(event));

function submitCity(event) {
    var req = new XMLHttpRequest();
    var 
}