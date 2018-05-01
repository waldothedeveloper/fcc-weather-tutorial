$(document).ready(function () {
    'use strict';
    function findMyLocation() {

        if (!navigator.geolocation) {
            console.log("Geolocation is not supported by your browser");
            return;
        }

        function success(position) {
            let celsius = "℃";
            let fahrenheit = "℉";
            let latitude = "lat=" + position.coords.latitude;
            let longitude = "lon=" + position.coords.longitude;

            let askLoc = `https://fcc-weather-api.glitch.me/api/current?${latitude}&${longitude}`

            //Make the AJAX request
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let resp = JSON.parse(this.responseText);
                    console.log(resp);
                    $(".card-title").text(`${resp.name}, ${resp.sys.country}`);
                    $(".card-text").text(`${resp.weather[0].description}`);
                    $(".card-img-top").html(`<img class="card-img-top" src="${resp.weather[0].icon}" alt="Weather icon">`);
                    $("label#celsius").text(`${Math.trunc(resp.main.temp)} ${celsius}`);

                    //adding two events listener
                    $("#fahrenheit").on("click", function () {
                        $("#celsius").html(`${celsius}`);
                        $("#fahrenheit").text(`${Math.trunc(resp.main.temp * 9 / 5 + 32)} ${fahrenheit}`)
                    })
                    $("#celsius").on("click", function () {
                        $("label#fahrenheit").html(`${fahrenheit}`);
                        $("label#celsius").text(`${Math.trunc(resp.main.temp)} ${celsius}`);
                    })

                }
            }
            xhttp.open("GET", `${askLoc}`, true);
            xhttp.send();
        };
        //calling the navigator object
        navigator.geolocation.getCurrentPosition(success);

    }
    findMyLocation();
});


