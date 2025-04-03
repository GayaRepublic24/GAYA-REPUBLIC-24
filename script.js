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
