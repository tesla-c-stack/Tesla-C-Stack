function playSound() {
  document.getElementById("welcomeSound").play();
}

function detectDevice() {
  document.getElementById("deviceInfo").innerText =
    "Accessing via: " + navigator.userAgent;
}

detectDevice();
