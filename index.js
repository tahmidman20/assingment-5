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

// call button section and history section

const coinsNumber = document.getElementById("coins-number");
const callButtons = document.querySelectorAll(".call-btn");
const callHistoryBox = document.querySelector("#card-box");

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
      const currentTime = new Date();
      const showTime = currentTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      const historyItem = document.createElement("div");
      historyItem.classList.add(
        "side-box",
        "mt-5",
        "flex",
        "justify-between",
        "items-center",
        "mx-4",
        "py-4",
        "px-2",
        "bg-gray-100",
        "rounded-lg"
      );
      historyItem.innerHTML = `
        <div>
          <h1 class="history-title font-bold">${title}</h1>
          <p class="history-number">${number}</p>
        </div>
        <span class="current-time">${showTime}</span>
      `;
      callHistoryBox.appendChild(historyItem);
    } else {
      alert(" আপনার কাছে পর্যাপ্ত পরিমাণ কয়েন নেই");
    }
  });
});

// clear button section

const clearAllBtn = document.getElementById("clear-all");
clearAllBtn.addEventListener("click", function () {
  const boxItems = callHistoryBox.querySelectorAll(".side-box");
  boxItems.forEach((item) => item.remove());
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
