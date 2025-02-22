// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = { apiKey: "AIzaSyBGFcm3gdV0PWCc2nL7rrm6wZFVaP2ZGVs", authDomain: "pdponline-5b415.firebaseapp.com", projectId: "pdponline-5b415", storageBucket: "pdponline-5b415.appspot.com", messagingSenderId: "618338405073", appId: "1:618338405073:web:889fce0a19ff8ed8c293f0", measurementId: "G-DQZZYXZY4K" };
// initializing firebase SDK
firebase.initializeApp(firebaseConfig);

// render recaptcha verifier
render();
function render() {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container");
  recaptchaVerifier.render();
}

// function for send OTP
function sendOTP() {
  var number = document.getElementById("number").value;
  firebase
    .auth()
    .signInWithPhoneNumber(number, window.recaptchaVerifier)
    .then(function (confirmationResult) {
      window.confirmationResult = confirmationResult;
      coderesult = confirmationResult;
      document.querySelector(".number-input").style.display = "none";
      document.querySelector(".verification").style.display = "";
    })
    .catch(function (error) {
      // error in sending OTP
      alert(error.message);
    });
}

// function for OTP verify
function verifyCode() {
  var code = document.getElementById("verificationCode").value;
  coderesult
    .confirm(code)
    .then(function () {
      document.querySelector(".verification").style.display = "none";
      document.querySelector(".result").style.display = "";
      document.querySelector(".correct").style.display = "";
      console.log("OTP Verified");
    })
    .catch(function () {
      document.querySelector(".verification").style.display = "none";
      document.querySelector(".result").style.display = "";
      document.querySelector(".incorrect").style.display = "";
      console.log("OTP Not correct");
    });
}
