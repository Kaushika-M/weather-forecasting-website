async function show() {

    let x = document.querySelector("#city").value;

    let apikey = "abc";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${x}&appid=${apikey}&units=metric`;

    let response = await fetch(url);

    let data = await response.json();

    console.log(data);

    if (data.cod != 200) {
        document.getElementById("res").innerHTML = "Not found";
        return;
    }

    document.getElementById("res").innerHTML = `
        <h3>${data.name}</h3>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}
