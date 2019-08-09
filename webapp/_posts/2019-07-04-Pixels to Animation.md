---
layout: webapp
title:  "Pixels to Animation"
category: 'webapp'
excerpt: "Pixels to Animation - Learn to draw graphics on the fly using Javascript and the HTML5 Canvas API"
tag:
- Udacity
- Canvas
- Web
- HTML5
---

This is a summary of Udacity's HTML5 Canvas coursework. 

You can find the full course materials here: [Full Course Page](https://classroom.udacity.com/courses/ud292)

## Introduction
      
* Pixels make up the data of a photo.  
* Every color imaginable can be represented with a combination of red, green and blue. 
* Depending on the type of image you are storing in the computer, 
there is an additional alpha channel that stores how solid or transparent the final color will be. 
  
---

## Filters and effects

* Why edit images in browser? 
  * Doing locally edit allows the user to make changes without a full round trip to the server.
* Such tasks can be done with/ without external libraries:
  * make an image black and white by averaging the rgb values
  * invert the colors by assigning the pixels to the compliments of the current values
  * turn out the lights/ or turn on the night visions

---

## Quiz: Canvas 2D Image Data

* Image backing a canvas is represented in JS with an Image Data Object.
* It contains values for the width, and height of the source image in pixels, along with the data array containing the red, green, blue and alpha values for each pixel.
* data property is usually represented by a Uint8Clampled Array. 
  * U means that their rate is unsigned or contains only positive values.
  * Int8 indicates that it will store 8-bit numbers. (8-bit positive numbers from 0 to 255.)
  * if JS was making it easy, the data for one pixel would be separated from all the others like this. 
  * instead, it is one giant list you have to parse when you apply effects.
  * we can retrieve or modify the image data by calling one of these functions.
    * createImageData: initializes a blank image data object that you can modify
    * getImageData: retrieve data to a backing canvas
    * putImageData: store data to a backing canvas
* Try working with Image Data
  1) Create a canvas2d rendering context
  2) call get imagedata to retrieve the pixels in the canvas
  3) change every 10th pixel to a solid green color
  Hint) Colors values range from 0-255  

* Canvas2Drendering: [Find the code executions in CodePen](https://codepen.io/inaheaven/pen/wLYaNN)

```html
<!DOCTYPE HTML>
<html>
<head></head>
<body>
    <canvas id ="c" width="400" height="400"> </canvas>
    <script>
       var c = document.querySelector("#c");
       var ctx = c.getContext("2d");
       data = ctx.getImageData(0,0,400,400);
       
       function paintGreen(imageData) {
            var numPixels = imageData.data.length/4;
            for (var i=0; i<numPixels; i++) {
                if(i%10 == 0) {
                   imageData.data[i*4+1] = 255;
                   //set alpha values as well
                   imageData.data[i*4+3] = 255;
                }
            }
            ctx.putImageData(imageData,0,0);
       }
       paintGreen(data);
    </script>
</body>
</html>
```

---

## Playing Video in Canvas

* Quiz
  - What will this code do?
  ```javascript
  var draw = function() {
    canvas.getContext("2d").drawImage(v, 0, 0);
  }
  v.addEventListener('play', function() {
    if (v.paused || v.ended) return;
    draw();
  });
  ```
  - shows the video in sync with the source video
  - shows a single frame of the video
  
  ** Find the Answer Below of the Page.


---

## Answers for the Quiz
* Playing Video in Canvas
  - Shows a single frame of the video

---

##### Please be aware that this is a summary of the Udacity Course HTML5 Canvas Basics. You can find the course here: [Full Course Page](https://classroom.udacity.com/courses/ud292). 
##### In here, I attached some image clips from the lecture vids and free images in CodePen are from unsplash.com, taken by Muzammil Soorma. If you find a bug or have any problems (copyrights of the codes, images, quotes or any), please contact me at my email in the cover page.  
