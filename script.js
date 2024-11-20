let position = 0;
let images = document.querySelectorAll(".main-dishes");
function arrow1() {
  console.log("left");
  position--;
  if (position < 0) {
    position = 3;
  }
}
function arrow2() {
  console.log("right");
  position++;
  if (position === 4) {
    position = 0;
  }
}

function switchDishes() {
  if (position == 0) {
    images[0].src = "./Media/1.png";
    images[1].src = "./Media/2.png";
  }
  if (position == 1) {
    images[0].src = "./Media/2.png";
    images[1].src = "./Media/3.png";
  }
  if (position == 2) {
    images[0].src = "./Media/3.png";
    images[1].src = "./Media/4.png";
  }
  if (position == 3) {
    images[0].src = "./Media/4.png";
    images[1].src = "./Media/1.png";
  }
}
let rotation = 0;
let wheels = document.querySelector(".wheel");
let wheelPos = 1;

let t1 = "CURRY WITH RICE";
let t2 = "CHICKEN STEAK VEGES";
let t3 = "CHICKEN BIRYANI";
let t4 = "SPICY BEEF";

let d1 = "A classic, hearty curry served with fluffy rice, balancing bold spices with creamy richness. Perfectly blended to give every bite a flavorful kick, it's an ideal choice for curry lovers seeking comfort and warmth.";
let d2 = "Tender chicken steak with fresh vegetables, grilled to perfection and seasoned with aromatic spices. This protein-packed dish is loved for its hearty, delicious flavors that energize and satisfy.";
let d3 = "A fragrant, flavorful chicken biryani made with tender meat, basmati rice, and carefully layered spices. This beloved dish offers a taste of tradition, perfect for those craving a touch of indulgence.";
let d4 = "A rich, spicy beef dish that brings together savory flavors with a touch of heat. Slow-cooked for tenderness, this meal is crafted for those who enjoy bold, memorable tastes with each bite.";

function wheelLeft() {
    rotation += 90;
    wheelPos--;
    if (wheelPos == 0){
        wheelPos = 4;
    }
    textChange();
}
function wheelRight() {
    rotation -= 90;
    wheelPos++;
    if (wheelPos == 5){
        wheelPos = 1;
    }
    textChange();
}
let heading = document.querySelector(".h5");
let description = document.querySelector(".h5-p");
function wheel() {
    const heading = document.querySelector(".h5");
    const description = document.querySelector(".h5-p");

    heading.classList.add("fade-out");
    description.classList.add("fade-out");
    wheels.style.transition = "transform 1s ease";
        
    wheels.style.transform = `translateX(-940px) rotate(${rotation}deg) scale(3.9)`;
    setTimeout(() => {
        
        if (wheelPos === 1) {
            heading.innerHTML = `${t1}`;
            description.innerHTML = `${d1}`;
        } else if (wheelPos === 2) {
            heading.innerHTML = `${t2}`;
            description.innerHTML = `${d2}`;
        } else if (wheelPos === 3) {
            heading.innerHTML = `${t3}`;
            description.innerHTML = `${d3}`;
        } else if (wheelPos === 4) {
            heading.innerHTML = `${t4}`;
            description.innerHTML = `${d4}`;
        }

        heading.classList.remove("fade-out");
        description.classList.remove("fade-out");
    }, 500);
}

function textChange() {
    document.querySelector('.text-change-1').innerHTML = `${wheelPos} / 4`
}

let flag = false;
let nav = document.querySelector('.van')
let line = document.querySelectorAll('.line')
function switch1() {
  if (flag == false) {
    setTimeout(() => {
      nav.classList.add('show');
    }, 100);
    line[0].classList.add('alter-1');
    line[1].classList.add('alter-2');
    line[2].classList.add('alter-3');
    flag = true;
  }
  else if (flag == true) {
    setTimeout(() => {
      nav.classList.remove('show');
    }, 100);
    line[0].classList.remove('alter-1');
    line[1].classList.remove('alter-2');
    line[2].classList.remove('alter-3');
    flag = false;
  }
}
window.addEventListener("load", function() {
  const preloader = document.querySelector(".wrapper");
  preloader.style.transition = "opacity 0.5s ease";
  preloader.style.opacity = "0";

  setTimeout(() => {
    preloader.style.display = "none";
  }, 500);
});