function convertTemp() {
  const input = document.getElementById("tempInput").value;
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  const resultDiv = document.getElementById("result");

  // Validate input
  if (input === "" || isNaN(input)) {
    resultDiv.innerHTML = "❌ Please enter a valid number.";
    return;
  }

  let temp = parseFloat(input);
  let converted;

  // First, convert from input to Celsius
  if (from === "F") {
    temp = (temp - 32) * (5 / 9);
  } else if (from === "K") {
    temp = temp - 273.15;
  }

  // Then convert from Celsius to target
  if (to === "F") {
    converted = (temp * 9 / 5) + 32;
  } else if (to === "K") {
    converted = temp + 273.15;
  } else {
    converted = temp;
  }

  resultDiv.innerHTML = `✅ Converted Temperature: ${converted.toFixed(2)} °${to}`;
}
