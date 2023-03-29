const btnElement = document.querySelector(".btn");
const searchElement = document.querySelector("#search");

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

btnElement.addEventListener("click", (e) => {
  e.preventDefault();

  const searchValue = searchElement.value;

  console.log(searchValue);
  // resultBox();
});
