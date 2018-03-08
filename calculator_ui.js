function input(number) {
  currentValue = $("#display").val();
  console.log(currentValue);
  if (currentValue == "0" || overwrite || calcFinished) {
    currentValue = number;
  } else {
    currentValue = currentValue + number;
  }
  $("#display").val(currentValue);
  overwrite = false;
  calcFinished = false;
}
