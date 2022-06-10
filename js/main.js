function getRandomValue (minValue,maxValue) {
  if (minValue > 0 || maxValue > 0) {
    return Math.floor(Math.random () * (maxValue - minValue) + minValue);
  }
  if (minValue > maxValue) {
    return Math.abs( Math.floor(Math.random () * (maxValue - minValue) +minValue ) );
  }
}

getRandomValue(0,10);

function checkStringLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  else {
    return false;
  }
}

checkStringLength('Я изучаю JS', 20);
