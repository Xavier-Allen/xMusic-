//Connects function to submit button
document.getElementById("submitButton").addEventListener("click", () => {
  const city = document.getElementById("enterCity").value.trim();
  isEmpty(city);
});

function findWeather(city) {
  //Clear invalid text
  document.getElementById("invalidCity").innerText = "";

  //const proxy = "https://cors-anywhere.herokuapp.com/";
  const apiKey = "39f137c523ad333675cebf77a244c923";

  //Fetch city
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      //Grab weather, time, degrees(celcius cause it's easier)
      //Pass that data into hashlookup function
      const degrees = Math.floor(data.main.temp - 273);
      const weather = data["weather"][0]["main"];
      const time = new Date().getHours();
      console.log(weather, degrees, time);

      // Passing in weather params to hashLookup
      hashlookup(weather, degrees, time);
    })
    .catch(err => {
      invalidCity();
    });
}

// Pulls a music playlist from the hash table
function pullMusic(code) {
  let playlistLink = hash(code);
}

// looking up the hash function given the pullMusic
function hashlookup(weather, degrees, time) {
  let weatherCode = "";
  let degreesCode = "Z";
  let timeCode = "";
  let finalCode = "";

  console.log(weather, degrees, time);

  //Getting the weatherCode
  switch (weather) {
    default:
      weatherCode = "A";
      break;

    case "Clear":
      weatherCode = "A";
      break;

    case "Clouds":
      weatherCode = "B";
      break;

    case "Snow":
      console.log("4");
      weatherCode = "C";
      break;

    case "Rain":
      weatherCode = "D";
      break;

    case "Mist":
      weatherCode = "E";
      break;
    case "Fog":
      weatherCode = "F";
      break;
  }

  // Getting the DegreesCode
  switch (true) {
    default:
      degreesCode = "Z";
      console.log(degreesCode);
      break;

    case degrees < 0:
      degreesCode = "Z";
      break;

    case degrees <= 7:
      degreesCode = "Y";
      break;

    case degrees <= 15:
      degreesCode = "X";
      break;

    case degrees <= 25:
      degreesCode = "W";

      break;

    case degrees <= 35:
      degreesCode = "V";
      break;
    case degrees > 35:
      degreesCode = "T";
      break;
  }

  //Getting the timeCode
  switch (true) {
    default:
      timeCode = "1";
      break;

    case time <= 6:
      timeCode = "1";
      break;

    case time <= 11:
      timeCode = "2";
      break;

    case time <= 16:
      timeCode = "3";
      break;

    case time <= 21:
      timeCode = "4";
      break;
  }
  // console.log(
  //   `WeatherCode ${weatherCode}, degreesCode ${degreesCode}, then we have timeCode ${timeCode}`
  // );
  finalCode = weatherCode + degreesCode + timeCode;

  pullMusic(finalCode);
}

//Function that checks if a city is present
function isEmpty(value) {
  if (value === "") {
    console.log(value);
    invalidCity();
  } else {
    console.log(`clicked ${value}`);
    findWeather(value);
  }
}

function invalidCity() {
  let setInvalid = (document.getElementById("invalidCity").innerText =
    "Please enter a valid city");
}
