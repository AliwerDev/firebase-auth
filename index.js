const form = document.querySelector("form");

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBGFcm3gdV0PWCc2nL7rrm6wZFVaP2ZGVs",
  authDomain: "pdponline-5b415.firebaseapp.com",
  projectId: "pdponline-5b415",
  storageBucket: "pdponline-5b415.appspot.com",
  messagingSenderId: "618338405073",
  appId: "1:618338405073:web:889fce0a19ff8ed8c293f0",
  measurementId: "G-DQZZYXZY4K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
auth.languageCode = "it";

window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
  size: "invisible",
  callback: (response) => {
    console.log(response);
  },
});

console.log(form);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const phoneNumerEl = document.getElementById("phone");
  const smsCodeEl = document.getElementById("phone");
  const phoneNumber = phoneNumerEl.value;
  const smsCode = smsCodeEl.value;

  const appVerifier = window.recaptchaVerifier;

  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      console.log(confirmationResult);
      window.confirmationResult = confirmationResult;
    })
    .catch((error) => {});
});
