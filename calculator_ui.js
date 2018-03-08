function input(number) {
  //consider the blank state of the value youre trying to reach.
  //Is that what you are trying to get? 
  //Is it the correct type for what you are trying to do further down the code? 
  currentValue = $("#display").val();

  alert("Current value = "+currentValue);//currentValue is coming across as null or an empty string
  alert("Type of currentValue "+typeof currentValue);
  alert("Type of overwrite "+typeof overwrite);
  alert("Type of calcFinished "+typeof calcFinished);

  if (currentValue == "0" || overwrite || calcFinished) {//the undefined vars are breaking this logical expression
    currentValue = number;
    alert("new currentValue = "+currentValue);
  } else {
    currentValue = currentValue + number;//eventually this may be problematic. It would be safer to explicitly cast the number to a string.
    alert("old currentValue = "+currentValue);
  }
  alert("do we get here?");//nope
  $("#display").val(currentValue);
  overwrite = false;
  calcFinished = false;
}
