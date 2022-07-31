const calTemperature = () => {
  const numDegree = document.getElementById('degree').value;
  const selectOption = document.getElementById('change_temp');
  const temperatureValue =
    change_temp.options[selectOption.selectedIndex].value;
  const celToFah = (cel) => {
    let fahrenheit = parseFloat((cel * 9) / 5) + 32;
    return fahrenheit;
  };
  const fahToCel = (fahr) => {
    let celsius = parseFloat(((fahr - 32) * 5) / 9);
    return celsius;
  };
  let result;
  if (temperatureValue == 'cel') {
    result = celToFah(numDegree);
    document.getElementById('result').innerHTML = result + '&#8457;';
  } else {
    result = fahToCel(numDegree);
    document.getElementById('result').innerHTML = result + '&#8451;';
  }
};
