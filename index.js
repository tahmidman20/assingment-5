const heartNumber = document.getElementById("heart-number");
const heartButtons = document.querySelectorAll(".heart-btn");
let count = parseInt(heartNumber.textContent);
heartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    count++;
    heartNumber.textContent = count;
  });
});
