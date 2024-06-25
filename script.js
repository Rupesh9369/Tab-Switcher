const step1_none = function () {
  document.querySelector(".step1").style.display = "none";
};
const step2_none = function () {
  document.querySelector(".step2").style.display = "none";
};
const step3_none = function () {
  document.querySelector(".step3").style.display = "none";
};
const step1_block = function () {
  document.querySelector(".step1").style.display = "block";
};
const step2_block = function () {
  document.querySelector(".step2").style.display = "block";
};
const step3_block = function () {
  document.querySelector(".step3").style.display = "block";
};

const btn1_hover = function () {
  document.querySelector(".btn1").style.backgroundColor = "#ffe5e2";
};
const btn2_hover = function () {
  document.querySelector(".btn2").style.backgroundColor = "#ffe5e2";
};
const btn3_hover = function () {
  document.querySelector(".btn3").style.backgroundColor = "#ffe5e2";
};
const btn1_none = function () {
  document.querySelector(".btn1").style.backgroundColor = "#f0f0f0";
};
const btn2_none = function () {
  document.querySelector(".btn2").style.backgroundColor = "#f0f0f0";
};
const btn3_none = function () {
  document.querySelector(".btn3").style.backgroundColor = "#f0f0f0";
};

document.querySelector(".btn1").addEventListener("click", function () {
  btn1_hover();
  btn2_none();
  btn3_none();
  step1_block();
  step2_none();
  step3_none();
});
document.querySelector(".btn2").addEventListener("click", function () {
  btn2_hover();
  btn1_none();
  btn3_none();
  btn3_none();
  step2_block();
  step1_none();
  step3_none();
});
document.querySelector(".btn3").addEventListener("click", function () {
  btn3_hover();
  btn2_none();
  btn1_none();
  step3_block();
  step2_none();
  step_none();
});
