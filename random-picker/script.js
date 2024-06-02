const ques = document.getElementById('ques');
// const splitQues = document.getElementById('split-ques');
const genQues = document.getElementById('generate-ques');
const repQues = document.getElementById('repeat-ques');
const quesInput = document.getElementById('questions-input');
let questions = [];


function getQuestions() {
  questions = quesInput.value.split("\n").filter(ques => ques.trim() !== "");
}

function quesGenerated() {
  if (questions.length === 0) {
    getQuestions();
  }
  const index = Math.floor(Math.random() * questions.length);
  return questions[index];
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0]; // Choose a specific voice
  utterance.rate = 3;
  speechSynthesis.speak(utterance);
}


genQues.addEventListener('click', ()=>{
  const pickedQues = quesGenerated();
  const quesElement = document.getElementById("ques");
  quesElement.innerText = pickedQues;
  setTimeout(() => {
    speak(pickedQues);
  }, 800);
})

repQues.addEventListener('click', ()=>{
  setTimeout(() => {
    speak(ques.textContent);
  }, 300);
})