let slideIndex = 1;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

// Function to show a specific slide
function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the "active" class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and mark its corresponding dot as active
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Function to advance to the next slide
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Function to navigate to a specific slide
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Automatically advance to the next slide every 3 seconds (3000 milliseconds)
setInterval(function () {
  plusSlides(1);
}, 5000);

// Initialize the slider
showSlides(slideIndex);


gsap.to(".bubble--container", 20, {
  rotation: 360,
  transformOrigin: "left 50%",
  repeat: -1,
  ease: "none"
});

var quotes = [
  '"Thank you so much for all of your help with everything!',
  '"Hands down the best support I have ever received."',
  '"The best service I have ever received!"',
  '"We could not have done it without you!"',
  '"Beyond grateful for the service I received!"',
  '"A wonderful experience all around!"'
];

var previousInt = 0;

function animateOut() {
  gsap.fromTo(".text", 2, { opacity: 1 }, { opacity: 0 });
}

function animateIn() {
  gsap.fromTo(".text", 2, { opacity: 0 }, { opacity: 1 });
}

// returns a random integer for the quote randomizer
function getRandomInt() {
  return Math.floor(Math.random() * quotes.length);
}

function handleAnimation() {
  var randomInt = getRandomInt();

  // prevents the new quote from being the same as the previous quote
  while (randomInt == previousInt) {
    randomInt = getRandomInt();
  }

  previousInt = randomInt;

  // fades the animation out after a second
  setTimeout(() => {
    animateOut();
  }, 1000);

  // changes the text of the quote after 2.8 seconds
  setTimeout(() => {
    document.querySelector(".text").innerHTML = quotes[randomInt];
  }, 2800);

  // fades the quote back in after 3 seconds
  setTimeout(() => {
    animateIn();
  }, 3000);
}

// changes the quote every 7 seconds
setInterval(handleAnimation, 7000);



let loadMoreBtn = document.querySelector('#load-more-btn');
let currentItem = 3;

loadMoreBtn.onclick = () => {
    let boxes = [...document.querySelectorAll('.container .box-container')];

    for (var i = currentItem; i < currentItem + 5; i++) {
        boxes[i].style.display = "inline-block";
    }

    currentItem += 5;

    if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = "none"
    }

}