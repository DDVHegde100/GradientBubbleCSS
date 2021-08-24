function playIn() {
  document.getElementById("breath_in").play();
}

function playOut() {
  document.getElementById("breath_out").play();
}

function inLoop() {
  setTimeout(function () {
    playIn();
    inLoop();
  }, 12000);
}

function outLoop() {
  setTimeout(function () {
    playOut();
    outLoop();
  }, 12000);
}

function kickOff() {
  setTimeout(function () {
    inLoop();
  }, 11100);
  setTimeout(function () {
    outLoop();
  }, 15100);
}

window.onload = kickOff();