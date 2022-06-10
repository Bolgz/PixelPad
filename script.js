//Create each pixel for the canvas
for (let index = 0; index < 2156; index++) {
  let pixel = document.createElement("div");
  pixel.className = "pixel";
  document.getElementById("canvas").appendChild(pixel);
}

//Object that stores current settings
var settings = {
  pen: true,
  erasor: false,
};

//Get all pixels in canvas
var pixels = document.getElementsByClassName("pixel");
var isMouseDown = false;

//Get chosen colour
var colour = document.getElementById("colourpicker").value;

//Add event listener for clicking on a pixel
for (let index = 0; index < pixels.length; index++) {
  pixels[index].addEventListener("mousedown", function (event) {
    if (settings.pen) {
      event.target.style.background = colour;
    } else {
      event.target.style.background = "#e5e7eb";
    }
  });
}

//Add event listener for holding click over a pixel
for (let index = 0; index < pixels.length; index++) {
  pixels[index].addEventListener("mousemove", function (event) {
    if (isMouseDown && settings.pen) {
      event.target.style.background = colour;
    } else {
      if (isMouseDown) {
        event.target.style.background = "#e5e7eb";
      }
    }
  });
}

//When the colour is changed
document
  .getElementById("colourpicker")
  .addEventListener("input", function (event) {
    colour = event.target.value;
  });

//When pen checkbox value is changed
document.getElementById("pencheck").addEventListener("input", function (event) {
  if (settings.pen) {
    document.getElementById("pencheck").checked = true;
  } else {
    settings.pen = true;
    document.getElementById("pencheck").checked = true;
    settings.erasor = false;
    document.getElementById("erasorcheck").checked = false;
  }
});

//When erasor checkbox value is changed
document
  .getElementById("erasorcheck")
  .addEventListener("input", function (event) {
    if (settings.erasor) {
      document.getElementById("erasorcheck").checked = true;
    } else {
      settings.erasor = true;
      document.getElementById("erasorcheck").checked = true;
      settings.pen = false;
      document.getElementById("pencheck").checked = false;
    }
  });

//Is the mouse currently being held down
document.body.onmousedown = function () {
  isMouseDown = true;
};

document.body.onmouseup = function () {
  isMouseDown = false;
};

//Function for clearing the canvas
function clearCanvas() {
  for (let index = 0; index < pixels.length; index++) {
    pixels[index].style.background = "#e5e7eb";
  }
}
