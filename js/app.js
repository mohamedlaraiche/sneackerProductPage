// Variables

const nav = document.querySelector(".burger");
const list = document.querySelector(".list");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const prdData = document.querySelector("#qt");
const prdHero = document.querySelector(".prd-hero");
const addBtn = document.querySelector(".addtoCard");
const cardBtn = document.querySelector(".card");
const account = document.querySelector(".person");
let numberProduct = 0;
// NavBar
nav.addEventListener("click", () => {
  list.classList.toggle("activeNav");
});

// add product

plus.addEventListener("click", () => {
  let prdDt = Number(document.querySelector("#qt").value);
  if (prdDt < 15) {
    numberProduct;
    numberProduct++;
    prdData.value = numberProduct;
  }
});

minus.addEventListener("click", () => {
  let prdDt = Number(document.querySelector("#qt").value);

  if (prdDt > 1) {
    numberProduct;
    numberProduct--;
    prdData.value = numberProduct;
  }
});

// Select image

let firstImg = document.querySelector(".sc-1");
let secondImg = document.querySelector(".sc-2");
let thirdImg = document.querySelector(".sc-3");
let fourImg = document.querySelector(".sc-4");
let active = true;
function blurMod(selectedImg) {
  selectedImg.classList.toggle("blurPrd");
}
firstImg.addEventListener("click", function () {
  firstImg.classList.add("opacity");
  secondImg.classList.add("opacity");
  thirdImg.classList.add("opacity");
  fourImg.classList.add("opacity");
  firstImg.classList.remove("opacity");
  prdHero.src = "./images/image-product-1.jpg";
});
secondImg.addEventListener("click", function () {
  firstImg.classList.add("opacity");
  thirdImg.classList.add("opacity");
  fourImg.classList.add("opacity");
  secondImg.classList.remove("opacity");
  prdHero.src = "./images/image-product-2.jpg";
});
thirdImg.addEventListener("click", function () {
  firstImg.classList.add("opacity");
  secondImg.classList.add("opacity");
  fourImg.classList.add("opacity");
  thirdImg.classList.remove("opacity");
  prdHero.src = "./images/image-product-3.jpg";
});
fourImg.addEventListener("click", function () {
  firstImg.classList.add("opacity");
  secondImg.classList.add("opacity");
  thirdImg.classList.add("opacity");
  fourImg.classList.remove("opacity");
  prdHero.src = "./images/image-product-4.jpg";
});

// MSGS POP UP

addBtn.addEventListener("click", () => {
  document.querySelector(".addtocard").style.display = "block";
});
document.querySelector(".ok").addEventListener("click", () => {
  document.querySelector(".addtocard").style.display = "none";
});

cardBtn.addEventListener("click", () => {
  document.querySelector(".card-field").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".card-field").style.display = "none";
});
document.querySelector(".secondCard").addEventListener("click", function () {
  document.querySelector(".card-field").style.display = "flex";
  document.querySelector(".addtocard").style.display = "none";
});
let close = false;
account.addEventListener("click", () => {
  document.querySelector(".acc-info").classList.toggle("openAccount");
});
