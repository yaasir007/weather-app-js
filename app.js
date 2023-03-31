const btnElement = document.querySelector(".btn");
const searchElement = document.querySelector("#search");
const apiKey = CONFIG.api_key;
const apiHost = CONFIG.api_host;
const weatherType = document.querySelector(".weather__type");
const weatherTemp = document.querySelector(".weather__temp");
const weatherCity = document.querySelector(".weather__city");





//Credentials for API , Headers
const fetchData = async(value) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': apiHost,
    }
  };

  //calling the api with the value entered
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${value}`;
  let response = await fetch(url, options);
  let data = await response.json();

  try {
    weatherType.innerHTML = data.current.condition.text;
    weatherTemp.innerText = data.current.temp_c;
    weatherCity.innerHTML = data.location.name;
  } catch (error) {
    alert(`Error: Please enter a valid city`)
  }
}


btnElement.addEventListener("click", (e) => {
  e.preventDefault();
  const searchValue = searchElement.value;
  fetchData(searchValue);

});
