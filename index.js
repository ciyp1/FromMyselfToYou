document.querySelector("#loveButton").addEventListener("click", function () {
    var loveAudio = new Audio("audio/loveMegan.mp3");
    loveAudio.play();

    const loveButton = document.getElementById("loveButton");
    const loveHeading = document.getElementById("loveHeading");
    const buttonContainer = document.querySelector(".buttonContainer");
  
    loveHeading.classList.add("fadeOut");
    loveButton.classList.add("fadeOut");
  
    setTimeout(() => {
      loveButton.remove();
      loveHeading.remove();
      buttonContainer.remove();
    }, 500);
  
    // Create a burst of hearts
    for (let i = 0; i < 10; i++) {
      setTimeout(createHeart, i * 100);
    }
  
    //Display image


    // Start falling hearts ONCE
    startHeartRain(100);
    setTimeout(stopHeartRain, 10000); // stop after 10 seconds
  });
  
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart1");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "50vh";
  
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
  }
  
  let heartInterval;
  
  function startHeartRain(interval) {
    heartInterval = setInterval(createFallingHeart, interval);

    const loveMessage = document.getElementById("loveMessage");
    loveMessage.classList.remove("hidden");
    setTimeout(() => {
    loveMessage.classList.add("show");
  }, 50);
  }
  
  function stopHeartRain() {
    clearInterval(heartInterval);
  }
  
  function createFallingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart2");
    heart.innerText = "❤️";
  
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (Math.random() * 20 + 16) + "px";
    heart.style.animationDuration = (Math.random() * 2 + 2) + "s";
  
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }

document.querySelector("#loveImage").addEventListener("click", function() {
    var image1 = document.querySelector("#loveImage");
    var randomNumber1 = Math.floor(Math.random() * 10) + 1;
    var randomImage = "loveImage" + randomNumber1 + ".jpg";
    var randomImageSource = "Images/" + randomImage;
    image1.setAttribute("src", randomImageSource);
})
