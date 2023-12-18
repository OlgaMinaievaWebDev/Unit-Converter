const inputEl = document.getElementById("input");
const convertBtn = document.getElementById("convert");
const lengthEl = document.getElementById("length");
const massEl = document.getElementById("mass");
const volumeEl = document.getElementById("volume");

const meterToFeet = 0.3048;
const literToGallon = 0.2642;
const kiloToPound = 0.45359;

convertBtn.addEventListener("click", function () {
  let inputValue = Number(inputEl.value);
  if (inputValue) {
    //meters to feet
    let resultMeter = (inputValue / meterToFeet).toFixed(3);
    let resultFeet = (meterToFeet * inputValue).toFixed(3);
    lengthEl.textContent = `${inputValue} meters = ${resultMeter} feet | ${inputValue} feet = ${resultFeet} meters`;

    //liters to gallons
    let resultLiters = (inputValue / literToGallon).toFixed(3);
    let resultGallons = (literToGallon * inputValue).toFixed(3);
    volumeEl.textContent = `${inputValue} liters = ${resultGallons} gallons | ${inputValue} gallons = ${resultLiters} liters`;
    //kg to lbs
    let resultKg = (inputValue / kiloToPound).toFixed(3);
    let resultLbs = (inputValue * kiloToPound).toFixed(3);
    massEl.textContent = `${inputValue} kilos = ${resultKg} pounds | ${inputValue} pounds = ${resultLbs} kilos`;
    inputEl.value = "";
  }
});
