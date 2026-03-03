const inputBox=document.querySelector(".input-box");
const searchBtn=document.getElementById("searchBt");
const temperature=document.querySelector(".temprature");
async function checkWether(city) 
{
       const api_key="1ba0fbfa9989a353c193effca71212af";
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
      const response= await fetch(`${url}`);
      const wetherdata=await response.json();
      console.log(wetherdata)
const celsiusValue = Math.round(wetherdata.main.temp - 273.15);0
temperature.innerHTML = `${celsiusValue}°C`;
  document.getElementById("celsius").value = celsiusValue;
  convertTemperature();
}

function convertTemperature() {
  let celsius = parseFloat(document.getElementById("celsius").value);
  if (!isNaN(celsius)) 
    {
    let fahrenheit = (celsius * 9) / 5 + 32;
    let kelvin = celsius + 273.15;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("kelvin").value = kelvin.toFixed(2);
  }
}





//document.getElementById("celsius").addEventListener("keypress", function (event) {
//  if (event.key === "Enter") {
//    convertTemperature();
//  }
//});






searchBtn.addEventListener("click", () => {
  checkWether(inputBox.value);
});


