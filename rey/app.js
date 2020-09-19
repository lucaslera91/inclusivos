let read = document.getElementById('read');
let titulos1 = document.getElementsByTagName('h1');
let titulos2 = document.getElementsByTagName('h2');
let titulos3 = document.getElementsByTagName('h3');
let textos = document.getElementsByTagName('p');
var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();

if ('speechSynthesis' in window) {
    // Speech Synthesis supported 🎉
   // alert('w');
   }else{
     // Speech Synthesis Not Supported 😣
     alert("Sorry, your browser doesn't support text to speech!");
   }

msg.text = "Folgue, hay conflicto de interes si me pagas a mi?";
msg.voice = voices[10];
msg.volume = 0.9; // From 0 to 1
msg.rate = 2; // From 0.1 to 10
msg.pitch = 1; // From 0 to 2
msg.lang = 'es';

for (let index = 0; index< titulos1.length; index++) {
    const element = titulos1[index];
    element.setAttribute("onclick", "readME(this)")

}
for (let index = 0; index< titulos2.length; index++) {
    const element = titulos2[index];
    element.setAttribute("onclick", "readME(this)")
element.addEventListener('click', readME);
    
}
for (let index = 0; index< titulos3.length; index++) {
    const element = titulos3[index];
    element.setAttribute("onclick", "readME(this)")

}
for (let index = 0; index< textos.length; index++) {
    const element = textos[index];
    element.setAttribute("onclick", "readME(this)")
}

function readME(id){
    msg.text = id.innerHTML;
    speechSynthesis.speak(msg)
 }

