const getValue = (btn) => {
  let value = btn.getAttribute("value");
  let displayNumber = document.getElementById("display").innerHTML;

  if (displayNumber === "0") {
    document.getElementById("display").innerHTML = value;
  } else {
    document.getElementById("display").innerHTML = displayNumber + value;
  }
};

const clean = () => {
  document.getElementById("display").innerHTML = 0;
};

const operation = () => {
  let operation = document.getElementById("display").innerHTML;
  if (operation) {
    document.getElementById("display").innerHTML = eval(operation);
  }
};
