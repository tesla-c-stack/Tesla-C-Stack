function playSound() {
  document.getElementById("welcomeSound").play();
}

function detectDevice() {
  document.getElementById("deviceInfo").innerText =
    "Accessing via: " + navigator.userAgent;
}

detectDevice();
document.querySelector(".contact-form")?.addEventListener("submit", function() {
  alert("Sending your message...");
}
