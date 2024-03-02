function toggleForm() {
  var letter = document.getElementById("letter");
  var parent = document.getElementById("parents");
  var lidOne = document.querySelector(".lid.one");
  var lidTwo = document.querySelector(".lid.two");
  var envelope = document.querySelector(".envelope");
  letter.classList.toggle("action");
  setTimeout(async function () {
    const lett = await letter.classList.toggle("opened");
    setTimeout(() => {
      lidOne.style.display = "none";
      lidTwo.style.display = "none";
      envelope.style.display = "none";
      parent.style.display = "block";
    }, 1000);
  }, 1000);
}

let value3 = null;
function stoppedTyping(event) {
  value3 = event.value;
}

function answer3() {
  if (value3) {
    nextStep("step3", "step4");
  } else {
    alert("KONTOLLLL");
  }
}

let dtInput = null;
function dtPicker(event) {
  dtInput = event.value;
}

function answer4() {
  if (dtInput) {
    nextStep("step5", "finish");
  } else {
    alert("KONTOLLLL");
  }
}

// last step
const answerAll = [];

function nextStep(currentStepId, nextStepId, button) {
  var currentStep = document.getElementById(currentStepId);
  var nextStep = document.getElementById(nextStepId);
  var wrapper = document.getElementById("wrapper");
  var nextQuestion = document.getElementById("nextQuestion");
  if (button) {
    answerAll.push(button);
  }

  if (currentStepId === "step3") {
    var textArea = document.getElementById("answer3").value;
    answerAll.push(textArea);
  }

  if (currentStepId === "step5") {
    var datePicker = document.getElementById("datepicker").value;

    answerAll.push(datePicker);

    const bot = new Bot(
      "6798060169:AAEqIIBXhG8LewsLLUotN92TZx1npuEALGs",
      "1947405755"
    );

    bot
      .sendMessage(answerAll, null, null, true)
      .then((res) => {
        console.log("Success!", res);
      })
      .catch((err) => console.log(err));
  }

  currentStep.style.opacity = "0";
  setTimeout(function () {
    currentStep.classList.add("hide");
    nextStep.classList.remove("hide");
    setTimeout(function () {
      nextStep.style.opacity = "1";
    }, 50); // Delay untuk memastikan transisi mulus
  }, 500);

  // wrapper.style.opacity = "0"
  if (currentStepId === "step3") {
    wrapper.style.opacity = "0";
    setTimeout(function () {
      wrapper.style.display = "none";
      nextQuestion.style.display = "block";
      wrapper.classList.add("hide");
      nextQuestion.classList.remove("hide");
    }, 2000);

    // Delay agar fadeout selesai sebelum menampilkan nextQuestion
  }

  if (currentStepId === "step3") {
    setTimeout(() => {
      displayText();
    }, 2000);
  }
}

var words = [
  "Oh hey,",
  "BTW My friend just bought some Dufan ticket's to me",
  "Cause he had an urgent job to do.",
  "But the problem is...",
  "I don't have anyone to go with",
  "And and AND i don't fucking know what i'm talking about 😖.",
  "I just wanna date with you. so, are you in?",
];
var part,
  i = 0,
  offset = 0,
  len = words.length,
  speed = 70,
  delayBetweenWords = 1000; // Penundaan antara kata-kata dalam milidetik

function displayText() {
  if (i < len) {
    part = words[i].substr(0, offset);
    document.getElementById("text-time").textContent = part;
    offset++;

    if (offset > words[i].length) {
      offset = 0;
      i++;
      setTimeout(displayText, delayBetweenWords); // Menambahkan penundaan antara kata-kata
    } else {
      setTimeout(displayText, speed); // Menjalankan displayText lagi tanpa penundaan jika kata belum selesai
    }
  } else {
    const chs = document.getElementById("choose4");
    chs.style.opacity = "1";
    setTimeout(function () {
      chs.style.display = "block";
    }, 1000);
  }
}

function SorryBtn() {
  var btnSorry = document.getElementById("sorry");
  var ofcSorry = document.getElementById("ofc");

  btnSorry.style.display = "none";
  ofcSorry.style.display = "block";
}
