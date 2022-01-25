var data = 0;
increase = () => {
  data += 1;
  document.getElementById("counter-value").innerText = data;
};
decrease = () => {
  data -= 1;
  document.getElementById("counter-value").innerText = data;
};
reset = () => {
  data = 0;
  document.getElementById("counter-value").innerText = data;
};
