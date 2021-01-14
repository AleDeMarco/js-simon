var numIA = [];
var numUser = [];
var correct = [];
var wrong = [];
var miss = [];

while (numIA.length < 5) {
  var x = Nran();
  if (!numIA.includes(x)) {
    numIA.push(x)
  }
}

alert('I numeri da ricordare sono: ' + numIA);
console.log(numIA)
setTimeout(richiestaNum, 3000);

function richiestaNum() {
  for (var i = 0; i < 5; i++) {
    var x = parseInt(prompt('Inserisci i numeri, uno alla volta:'));
    if (!numUser.includes(x)) {
      numUser.push(x)
      if (numIA.includes(x)) {
        correct.push(x);
      }
      else {
        wrong.push(x);
      }
    }
  }
  for (var i = 0; i < numIA.length; i++) {
    if (!numUser.includes(numIA[i])) {
      miss.push(numIA[i]);
    }
  }
  document.getElementById('correct').innerHTML = 'Hai indovinato: ' + correct;
  document.getElementById('wrong').innerHTML = 'Hai sbagliato: ' + wrong;
  document.getElementById('miss').innerHTML = 'Hai dimenticato: ' + miss;
}

function Nran() {
  return Math.floor(Math.random() * 99) + 1;
}
