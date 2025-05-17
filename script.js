function submitForm(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  document.getElementById('form-status').innerText =
    'Thank you, ' + name + '! Your message has been sent.';

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}
const productImages = [
  "Images/Products/product1.jpeg",
  "Images/Products/product2.jpeg",
  "Images/Products/product3.jpeg",
  "Images/Products/product4.jpeg",
  "Images/Products/product5.jpeg",
  "Images/Products/product6.jpeg",
  "Images/Products/product7.jpeg",
  "Images/Products/product8.jpeg",
  // Add all image paths here
];

let currentImage = 0;
const imageElement = document.getElementById("product-image");

function showImage(index) {
  imageElement.src = productImages[index];
}

function nextImage() {
  currentImage = (currentImage + 1) % productImages.length;
  showImage(currentImage);
}

function prevImage() {
  currentImage = (currentImage - 1 + productImages.length) % productImages.length;
  showImage(currentImage);
}
// Auto-cycle images every 5 seconds
setInterval(() => {
  nextImage();
}, 3000);

const serviceImages = [
  "Images/Services/1.jpeg",
  "Images/Services/2.jpeg",
  "Images/Services/3.jpeg",
    "Images/Services/4.jpeg",
    "Images/Services/5.jpeg",
    "Images/Services/6.jpeg",
    "Images/Services/7.jpeg",
    "Images/Services/8.jpeg",
    "Images/Services/9.jpeg",
  // Add all service image paths here
];

let currentService = 0;
const serviceImageElement = document.getElementById("service-image");

function showService(index) {
  serviceImageElement.src = serviceImages[index];
}

function nextService() {
  currentService = (currentService + 1) % serviceImages.length;
  showService(currentService);
}

function prevService() {
  currentService = (currentService - 1 + serviceImages.length) % serviceImages.length;
  showService(currentService);
}

// Auto-cycle service images every 5 seconds
setInterval(() => {
  nextService();
}, 3000);
