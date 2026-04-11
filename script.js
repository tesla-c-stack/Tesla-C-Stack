let images = [
  "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
];

function setCar(name, price, img) {
  document.getElementById("carName").innerText = name;
  document.getElementById("price").innerText = price;
  document.getElementById("carImg").src = img;
}

function changeColor(index) {
  document.getElementById("carImg").src = images[index];
}
