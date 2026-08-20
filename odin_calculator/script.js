function calculate(firstExpression, secondExpression, operator) {
  try {
    firstExpression = Number(firstExpression);
    secondExpression = Number(secondExpression);
  } catch (error) {
    return "";
  }

  if (firstExpression == null || secondExpression == null) return "";
  else if (operator == "plus") return firstExpression + secondExpression;
  else if (operator == "minus") return firstExpression - secondExpression;
  else if (operator == "mult") return firstExpression * secondExpression;
  else if (operator == "div") return firstExpression / secondExpression;
  else return "";
}

function main() {
  // Buttons
  let zeroBtn = document.querySelector(".zero");
  let oneBtn = document.querySelector(".one");
  let twoBtn = document.querySelector(".two");
  let threeBtn = document.querySelector(".three");
  let fourBtn = document.querySelector(".four");
  let fiveBtn = document.querySelector(".five");
  let sixBtn = document.querySelector(".six");
  let sevenBtn = document.querySelector(".seven");
  let eightBtn = document.querySelector(".eight");
  let nineBtn = document.querySelector(".nine");
  let plusBtn = document.querySelector(".plus");
  let minusBtn = document.querySelector(".minus");
  let multBtn = document.querySelector(".mult");
  let divBtn = document.querySelector(".div");
  let dotBtn = document.querySelector(".dot");
  let equalBtn = document.querySelector(".equal");

  // Screen
  let screen = document.querySelector(".display-screen");

  // Events
  zeroBtn.addEventListener("click", function () {
    screen.textContent = screen.textContent + "0";
  });
  oneBtn.addEventListener("click", function () {
    screen.textContent = screen.textContent + "1";
  });
  twoBtn.addEventListener("click", function () {
    screen.textContent = screen.textContent + "2";
  });
  threeBtn.addEventListener("click", function () {
    screen.textContent = screen.textContent + "3";
  });
  fourBtn.addEventListener("click", function () {
    screen.textContent = screen.textContent + "4";
  });
  fiveBtn.addEventListener("click", function () {
    screen.textContent = screen.textContent + "5";
  });
  sixBtn.addEventListener("click", function () {
    screen.textContent = screen.textContent + "6";
  });
  sevenBtn.addEventListener("click", function () {
    screen.textContent = screen.textContent + "7";
  });
  eightBtn.addEventListener("click", function () {
    screen.textContent = screen.textContent + "8";
  });
  nineBtn.addEventListener("click", function () {
    screen.textContent = screen.textContent + "9";
  });

  // Operator and expressions
  let firstExpression = null;
  let secondExpression = null;
  let operator = null;

  plusBtn.addEventListener("click", function () {
    if (operator == null) {
      firstExpression = screen.textContent;
      operator = "plus";
    } else {
      secondExpression = screen.textContent;
      firstExpression = calculate(firstExpression, secondExpression, operator);
      operator = "plus";
    }
    screen.textContent = "";
  });

  minusBtn.addEventListener("click", function () {
    if (operator == null) {
      firstExpression = screen.textContent;
      operator = "minus";
    } else {
      secondExpression = screen.textContent;
      firstExpression = calculate(firstExpression, secondExpression, operator);
      operator = "minus";
    }
    screen.textContent = "";
  });

  multBtn.addEventListener("click", function () {
    if (operator == null) {
      firstExpression = screen.textContent;
      operator = "mult";
    } else {
      secondExpression = screen.textContent;
      firstExpression = calculate(firstExpression, secondExpression, operator);
      operator = "mult";
    }
    screen.textContent = "";
  });

  divBtn.addEventListener("click", function () {
    if (operator == null) {
      firstExpression = screen.textContent;
      operator = "div";
    } else {
      secondExpression = screen.textContent;
      firstExpression = calculate(firstExpression, secondExpression, operator);
      operator = "div";
    }
    screen.textContent = "";
  });

  equalBtn.addEventListener("click", function () {
    // Catch second expression and calculate result
    secondExpression = screen.textContent;
    let result = calculate(firstExpression, secondExpression, operator);
    // Display result
    screen.textContent = result;
    // Reset
    firstExpression = null;
    secondExpression = null;
    operator = null;
  });
}

main();
