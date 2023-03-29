const searchData = document.querySelector("#search");

const resultBox = () => {
  const mainElement = document.querySelector('#main');

  const weatherType = document.createElement('div');
  weatherType.className = "weather__type";

  const weatherTemp= document.createElement('div');
  weatherTemp.className = "weather__temp";

  const weatherCity = document.createElement('div');
  weatherCity.className = "weather__city";



  mainElement.append(weatherType, weatherTemp, weatherCity);
}

searchData.addEventListener('keydown', (e) => {
  console.log(e.target);

  resultBox();
});
