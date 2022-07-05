export function getRandomValue (minValue,maxValue) {
  if (minValue > 0 || maxValue > 0) {
    return Math.floor(Math.random () * (maxValue - minValue) + minValue);
  }
  if (minValue > maxValue) {
    return Math.abs( Math.floor(Math.random () * (maxValue - minValue) +minValue ) );
  }
}

export function checkStringLength(string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  }
  else {
    return false;
  }
}
