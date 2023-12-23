let imglist = Array.from(document.querySelectorAll(".item img"));
let modalBox = document.getElementById("modalBox");
let innerBox = document.getElementById("innerBox");
let prevEl = document.getElementById("prev");
let nextEl = document.getElementById("next");
let closeEl = document.getElementById("close");
let currIndex = -1;
for (let i = 0; i < imglist.length; i++) {
  imglist[i].addEventListener("click", function (e) {
    modalBox.style.display = "flex";
    let imgpath = e.target.getAttribute("src");
    innerBox.style.backgroundImage = `url(${imgpath})`;
    currIndex = imglist.indexOf(e.target);
  });
}
nextEl.addEventListener("click", nextslid);
function nextslid() {
  currIndex++;
  if (currIndex == imglist.length) {
    currIndex = 0;
  }
  let imgpath = imglist[currIndex].getAttribute("src");
  innerBox.style.backgroundImage = `url(${imgpath})`;
}
prevEl.addEventListener("click", prvslid);
function prvslid() {
  currIndex--;
  if (currIndex < 0) {
    currIndex = imglist.length;
  }
  let imgpath = imglist[currIndex].getAttribute("src");
  innerBox.style.backgroundImage = `url(${imgpath})`;
}
function closeSlid() {
  modalBox.style.display = "none";
}
closeEl.addEventListener("click", function (e) {
  if (e.target.getAttribute("id") = "modalBox") {
    closeSlid();
  }
});
