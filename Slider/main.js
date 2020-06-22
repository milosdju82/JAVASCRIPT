var imgPath = ["img/img1.jpeg", "img/img2.jpeg", "img/img3.jpeg", "img/img4.jpeg"];

var images = document.querySelectorAll(".slider img");

var thumbnails = document.querySelectorAll(".thumbnails img");

images.forEach(function(element, index) {
  element.setAttribute("src", imgPath[index]);
});

thumbnails.forEach(function(element, index) {
  element.setAttribute("src", imgPath[index]);
});

var slider = document.querySelector(".slider");
var rightArrow = document.querySelector("i:last-child");
var leftArrow = document.querySelector("i:first-child");

var size = images[0].clientWidth;
var counter = 0;

//Defining functions for moving parent element left/right

function moveLeft() {
  slider.style.transform = "translateX(" - size + "px)";
  var imagesToChange = document.querySelectorAll(".slider img");
  imagesToChange[imagesToChange.length - 1].after(imagesToChange[0]);
}

function moveRight() {
  slider.style.transform = "translateX(" - size + "px)";
  var imagesToChange = document.querySelectorAll(".slider img");
  imagesToChange[0].before(imagesToChange[imagesToChange.length - 1]);
}

//Defining functions for highlighting thumbnails

function activeThumbnail() {
  thumbnails[counter].style.border = "none";

  if (counter < thumbnails.length - 1) {
    counter++;
  } else counter = 0;

  thumbnails[counter].style.border = "3px solid goldenrod";
  thumbnails[counter].style.borderRadius = "5px";
  console.log(thumbnails[0]);
}

function reverseActiveThumbnail() {
  thumbnails[counter].style.border = "none";

  if (counter > 0) {
    counter--;
  } else counter = thumbnails.length - 1;

  thumbnails[counter].style.border = "2px solid #c0c0c0";
  thumbnails[counter].style.borderRadius = "5px";
}

function firstActive() {
  thumbnails[0].style.border = "2px solid #c0c0c0";
  thumbnails[0].style.borderRadius = "5px";
  console.log(thumbnails[0]);
}

firstActive();

rightArrow.addEventListener("click", moveLeft);
rightArrow.addEventListener("click", activeThumbnail);

leftArrow.addEventListener("click", moveRight);
leftArrow.addEventListener("click", reverseActiveThumbnail);

setInterval(moveLeft, 5000);
setInterval(activeThumbnail, 5000);
