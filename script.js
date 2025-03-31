document.querySelectorAll(".news-update").forEach(news => {
  const readMoreBtn = news.querySelector(".read-more-btn");
  const moreContent = news.querySelector(".more-content");

  if (readMoreBtn && moreContent) {
      readMoreBtn.addEventListener("click", function () {
          if (moreContent.style.display === "none" || moreContent.style.display === "") {
              moreContent.style.display = "block";
              readMoreBtn.textContent = "Read Less";
          } else {
              moreContent.style.display = "none";
              readMoreBtn.textContent = "Read More";
          }
      });
  }
 });
// // JavaScript to Toggle Dark Mode
// document.addEventListener("DOMContentLoaded", function () {
//   const toggleSwitch = document.getElementById("darkModeToggle");
//   const body = document.body;

//   // Check if Dark Mode was enabled before
//   if (localStorage.getItem("dark-mode") === "enabled") {
//       body.classList.add("dark-mode");
//       toggleSwitch.checked = true; // Keep toggle switch ON
//   }

//   // Toggle Dark Mode on checkbox click
//   toggleSwitch.addEventListener("change", function () {
//       if (this.checked) {
//           body.classList.add("dark-mode");
//           localStorage.setItem("dark-mode", "enabled");
//       } else {
//           body.classList.remove("dark-mode");
//           localStorage.setItem("dark-mode", "disabled");
//       }
//   });
// });
