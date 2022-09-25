const getData = (cityname) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=c460d0183897f275d6ea98399e221867&units=metric&lang=tr`;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      cityWeather(data);
      console.log(data);
    });
};

const cityWeather = (data) => {
  let city = document.querySelector(".city");
  if (city.value == data.name) {
    alert("Girdiğiniz isimde şehir bulunmamaktadır.");
  } else {
    city.innerText = `${data.name},${data.sys.country}`;
  }

  let temp = document.querySelector(".temp");

  temp.innerText = `${Math.round(data.main.temp)}°C`;

  let info = document.querySelector(".info");

  info.innerText = `${data.weather[0].description}`;

  let image = document.querySelector(".img");

  image.innerHTML = `<img class="icon" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="" >`;
};

const input = document.querySelector("#box");

input.addEventListener("change", (event) => {
  getData(event.target.value);
});

window.addEventListener("load", () => {
  input.focus();
  getData("İstanbul");
});
