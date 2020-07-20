var openWeatherKey = '36556203304ed5e2306d4f2f41e83392'

bindSubmits();

function bindSubmits() {

    // Sets up the weather retrieval.
    document.getElementById('city_submit').addEventListener('click', function (event) {
        var req = new XMLHttpRequest();

        var user_in = document.getElementById('city').value;
        var url = 'http://api.openweathermap.org/data/2.5/weather?&appid=' + openWeatherKey;

        if (user_in[0] in [...Array(10).keys()]) {
            url = url.slice(0, 47) + 'zip=' + user_in + url.slice(47);
        } else {
            url = url.slice(0, 47) + 'q=' + user_in + url.slice(47);
        }
        req.open('GET', url, true);
        req.addEventListener('load', function() {
            if (req.status >= 200 && req.status < 400) {
                var response = JSON.parse(req.responseText);
                document.getElementById('temp').textContent = ' '+response.main.temp;
                document.getElementById('humidity').textContent = ' '+response.main.humidity + '%';
                console.log(response)
            } else {
                console.log('Error in network request: ' + req.statusText);
            }
        })
        req.send(null);
        event.preventDefault();
    });

    // Sets up the httpbin
    document.getElementById('bin_submit').addEventListener('click', function (event) {
        var req = new XMLHttpRequest();
        var payload = document.getElementById('bin_in').value;
        req.open('POST', 'http://httpbin.org/post', true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.addEventListener('load', function() {
            if (req.status>=200 && req.status < 400) {
                var response = JSON.parse(req.responseText).data
                document.getElementById('bin_out').textContent = response;
                console.log(response)
            }
            else {
                console.log('Error in network request: ' + req.statusText);
            }
        });
        req.send(payload);
        event.preventDefault();

    });

}

