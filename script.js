"use strict";

const emailValidationPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailbox = document.querySelector(".emailbox");
const emailfield = document.querySelector("#emailfield-1");
const btn = document.querySelector("#btn-1");
const signupPage = document.querySelector(".signup-box");
const registeredPage = document.querySelector(".registered-box");
const userEmail = document.querySelector(".user-email");

console.log("hello");

const checkvalidemail = function () {
  console.log("r");
  const email = emailfield.value;
  const res = emailValidationPattern.test(email);
  if (!res) {
    emailbox.classList.add("invalid-input");
  } else {
    signupPage.classList.add("hidden");
    registeredPage.classList.remove("hidden");
    userEmail.textContent = email;
  }
};

btn.addEventListener("click", checkvalidemail);
emailbox.addEventListener("click", function () {
  emailbox.classList.remove("invalid-input");
});
