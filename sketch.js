/*
365 Mini projects
2 - Project title: Tiny Pixelator (Broken Version)

Things to tackle:
- Load Image
- Read Image Pixel Data (processing is better at this p5.js is limitated by browser capabilities)
- Create spaced point grid
- load pixel info ti stroke values
- Try not to crash the browser

Time to spend in this 1 day
Day 1 - 3/12/20 - Started... Finished... 
hours spent -> 1

Conclusion: I love to make "tools" like this, for a big project I need to compile them into a kind of image editor with a GUI... I need to learn a few more stuff before that.
*/

let img;
let pixel;

function preload() {
  img = loadImage('blue.png');
}

function setup() {
  frameRate(10);
  createCanvas(510, 510);

  image(img, 0, 0);

  loadPixels()
  for (let i = 0; i < img; i++) {
    pixels[i + img] = pixels[i];
  }
  updatePixels();

  pixelate();
}

function pixelate() {

  scale(3);

  for (let x = 1; x < 150; x = x + 2) {
    for (let y = 1; y < 150; y = y + 2) {
      pixel = get(x, y);
      stroke(pixel);
      point(x, y);
    }
  }
}

function draw() {
  // Why theres nothing here? Because there's no need to. I could load the output in Draw and create a buch of loading cicles piling up huge amounts of information and likely just crash everything.
}