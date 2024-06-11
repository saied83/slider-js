let next = document.getElementById("next");
let prev = document.getElementById("prev");
let carousel = document.querySelector(".carousel");
let listItem = document.querySelector(".carousel .list");
let thumbnail = document.querySelector(".carousel .thumbnail");

next.onclick = function () {
  showSlider("next");
};
prev.onclick = function () {
  showSlider("prev");
};
let timeRunning = 500;
let runTimeOut;

setInterval(() => {
  next.click();
}, 7000);
const showSlider = (type) => {
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

  if (type === "next") {
    listItem.appendChild(itemSlider[0]);
    thumbnail.appendChild(itemThumbnail[0]);
    carousel.classList.add("next");
    console.log(carousel.classList);
  } else {
    let positionLastItem = itemSlider.length - 1;
    listItem.prepend(itemSlider[positionLastItem]);
    thumbnail.prepend(itemThumbnail[positionLastItem]);
    carousel.classList.add("prev");
    console.log(carousel.classList);
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carousel.classList.remove("next");
    carousel.classList.remove("prev");
    console.log(carousel.classList);
  }, timeRunning);
};
