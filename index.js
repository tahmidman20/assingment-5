// heart button  section

const heartNumber = document.getElementById("heart-number");
const heartButtons = document.querySelectorAll(".heart-btn");
let heartCount = parseInt(heartNumber.textContent);
heartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    heartCount++;
    heartNumber.textContent = heartCount;
  });
});

// call button section

const coinsNumber = document.getElementById("coins-number");
const callButtons = document.querySelectorAll(".call-btn");
callButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let currentCoins = parseInt(coinsNumber.textContent);
    if (currentCoins >= 20) {
      currentCoins -= 20;
      coinsNumber.textContent = currentCoins;
      const card = button.closest(".card");
      const title = card.querySelector(".card-title")?.textContent.trim();
      const number = card.querySelector(".call-number")?.textContent.trim();
      alert("📞 " + title + "কে কল করা হচ্ছে" + "  " + number + " ...");
    } else {
      alert(" আপনার কাছে পর্যাপ্ত পরিমাণ কয়েন নেই");
    }
  });
});

// copy button section

const copyNumber = document.getElementById("copy-number");
let copyCount = parseInt(copyNumber?.textContent || "0");
const copyButtons = document.querySelectorAll(".copy-btn");
copyButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    copyCount++;
    if (copyNumber) {
      copyNumber.textContent = copyCount.toString();
    }
    const card = button.closest(".card");
    const callNumber = card.querySelector(".call-number")?.textContent.trim();

    if (callNumber) {
      navigator.clipboard
        .writeText(callNumber)
        .then(function () {
          console.log(`Copied: ${callNumber}`);
        })
        .catch(function (cp) {
          console.error("Copy failed: ", cp);
        });
    }
  });
});
