const calcScreen = document.getElementById("screen");
function calc(input) {
  if (input == "C") {
      console.log("clear");
    calcScreen.innerHTML = "";
  }
  else if (input == "=") {
    try {
      const res = eval(calcScreen.innerHTML);
      console.log(res);
      calcScreen.innerHTML = res;
    } catch (error) {
      calcScreen.innerHTML = "error";
      console.log(error);
    }
    console.log();
    // calcScreen.innerHTML =
  } else {
    calcScreen.innerHTML += input;
  }
}
