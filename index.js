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
  let playlistID = songKeys[code];
  let playlist = `https://www.youtube.com/embed?listType=playlist&list=${songKeys[code]}`;
  let player = doucment.getElementById("player");

  player.innerHTML = `<iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
  frameborder="0"></iframe>`;
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

    case degrees <= 7:
      degreesCode = "Z";
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
      degreesCode = "U";
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
  console.log(finalCode);
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

//Hash Table for xMusic

const songKeys = {
  // A block
  AZ1: "CODE",
  AZ2: "CODE",
  AZ3: "CODE",
  AZ4: "CODE",
  AX1: "CODE",
  AX2: "CODE",
  AX3: "CODE",
  AX4: "CODE",
  AW1: "CODE",
  AW2: "CODE",
  AW3: "CODE",
  AW4: "CODE",
  AV1: "CODE",
  AV2: "CODE",
  AV3: "CODE",
  AV4: "PLyr4bTLkbO3zujIeYcmzZ7N-bQyvB2rZh",
  AU1: "CODE",
  AU2: "CODE",
  AU3: "CODE",
  AU4: "CODE",
  //B Block
  BZ1: "CODE", //BZ1 = CZ1, Z2,Z3,Z4
  BZ2: "CODE",
  BZ3: "CODE",
  BZ4: "CODE",
  BX1: "CODE",
  BX2: "CODE",
  BX3: "CODE",
  BX4: "CODE",
  BW1: "CODE",
  BW2: "CODE",
  BW3: "CODE",
  BW4: "CODE",
  BV1: "CODE",
  BV2: "CODE",
  BV3: "CODE",
  BV4: "CODE",
  BU1: "CODE",
  BU2: "CODE",
  BU3: "CODE",
  BU4: "CODE",
  // C Block
  CZ1: "CODE",
  CZ2: "CODE",
  CZ3: "CODE",
  CZ4: "CODE",
  CX1: "CODE",
  CX2: "CODE",
  CX3: "CODE",
  CX4: "CODE",
  // D Block
  DZ1: "CODE",
  DZ2: "CODE",
  DZ3: "CODE",
  DZ4: "CODE",
  DX1: "CODE",
  DX2: "CODE",
  DX3: "CODE",
  DX4: "CODE",
  DW1: "CODE",
  DW2: "CODE",
  DW3: "CODE",
  DW4: "CODE",
  DV1: "CODE",
  DV2: "CODE",
  DV3: "CODE",
  DV4: "CODE",
  DU1: "CODE",
  DU2: "CODE",
  DU3: "CODE",
  DU4: "CODE",
  //E Block
  EZ1: "CODE",
  EZ2: "CODE",
  EZ3: "CODE",
  EZ4: "CODE",
  EX1: "CODE",
  EX2: "CODE",
  EX3: "CODE",
  EX4: "CODE",
  EW1: "CODE",
  EW2: "CODE",
  EW3: "CODE",
  EW4: "CODE",
  EV1: "CODE",
  EV2: "CODE",
  EV3: "CODE",
  EV4: "CODE",
  EU1: "CODE",
  EU2: "CODE",
  EU3: "CODE",
  EU4: "CODE",

  // F Block
  FZ1: "CODE",
  FZ2: "CODE",
  FZ3: "CODE",
  FZ4: "CODE",
  FX1: "CODE",
  FX2: "CODE",
  FX3: "CODE",
  FX4: "CODE",
  FW1: "CODE",
  FW2: "CODE",
  FW3: "CODE",
  FW4: "CODE"
};
