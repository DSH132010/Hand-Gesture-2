//Geting The DOM Element And Declaring Const's For The Each DOM Element That Need's For The Output And Declaring ModelUrl In A Const

const camera = document.querySelector(".camera");
const result = document.querySelector(".result");
const navOverlay = document.querySelector(".overlay");
const NavBtn = document.querySelector(".NavBtn");
const NavBtnClose = document.querySelector(".NavBtnClose");
const model = "";

document.addEventListener('load', e => {
  navOverlay.classList.remove("open-Overlay");
  navOverlay.classList.add("overlay");
});

Webcam.set({
  width: 400,
  height: 300,
  image_format: "png",
  png_quality: 90,
});

Webcam.attach(camera);

function take_snapshot() {
  Webcam.snap(data_uri => {
    result.innerHTML = '<img id="captured_image" class="capturedImage" src="' + data_uri + '"/>';
    console.log("Succesfully Captured Image !!");
  });
}

console.log("ml5 version: ", ml5.version);
classifier = ml5.imageClassifier(model, modelLoaded);

function modelLoaded() {
  console.log("Model Loaded !!");
}

NavBtn.addEventListener("click", (e) => {
  navOverlay.classList.add("open-Overlay");
});

NavBtnClose.addEventListener("click", (e) => {
  navOverlay.classList.remove("open-Overlay");
});

function speak() {
  var synth = window.speechSynthesis;
  speak_data_1 = "The First Prediction Is " + prediction_1;
  speak_data_2 = "The Second Prediction Is " + prediction_2;
  var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
  synth.speak(utterThis);
}

//1280
//1024