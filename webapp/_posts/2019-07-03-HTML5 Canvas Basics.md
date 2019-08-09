---
layout: webapp
title:  "HTML5 Canvas Basics"
category: 'webapp'
excerpt: "HTML5 Canvas Basics - Learn to draw graphics on the fly using Javascript and the HTML5 Canvas API"
tag:
- Udacity
- Canvas
- Web
- HTML5
---

This is a summary of Udacity's HTML5 Canvas coursework. 

You can find the full course materials here: [Full Course Page](https://classroom.udacity.com/courses/ud292)

## Introduction
* Canvas - powerful API which you can use to edit, resize, and otherwise change images, animations, and interactions.
* By using the canvas tag, can create a canvas and web page 
* Canvas is a `2D surface` that takes intructions and immediately renders them. 
* Canvas has a set of functions that allow us to **draw shapes, images, text, and patterns**.

---

## Creating a Canvas

```html
<!DOCTYPE HTML>
<html>
<head></head>
<body>
    <canvas id ="c" width="200" height="200"> </canvas>
    <script>
        var c = document.querySelector("#c");
        var ctx = c.getContext("2d");
    </script>
</body>
</html>
```
      
* The canvas tag takes optional width and height parameters to allocate some space on the web page.  
* But that will only give the physical space on the website to work with. 
* To use a canvas, access it from the JS code.
  *  Grab the canvas using the selector to get the can vas with the id of `c` from the body.
  *  Grab the context, call the method, `getContext`, on the canvas that we have created, and pass in this parameter for 2d.

---

## Coordinate System - Quiz

Unlike the 'usual' coordinates from geometric perspectives, 
coordinate system in canvas starts from the top-left corner and gets bigger if go right (x-axis), or if go down (y-axis).

![Coordinate System in Canvas]({{ site.url }}/images/blog/HTML5 Canvas Basics1.png)

#### Question
![Coordinate System in Canvas - Quiz]({{ site.url }}/images/blog/HTML5 Canvas Basics2.png)

---

## Loading Images Code
```html
<!DOCTYPE HTML>
<html>
<head></head>
<body>
    <canvas id ="c" width="200" height="200"> </canvas>
    <script>
        var c = document.querySelector("#c");
        var ctx = c.getContext("2d");
        
        var image = new Image();
        
        image.onload = function() {
            console.log("Loaded Image");
            // doSomethingElse();
            ctx.drawImage(image, 0, 0, c.width, c.height);
        }
        
        image.src = "some_random_image.png";
    </script>
</body>
</html>
```

* Use a local file as well as image files on the Internet with URL.
* Images in JavaScript get loaded asynchronously, meaning that we need to do work after it is loaded.
* For example, in here, grab the context, and call drawImage method on the context of the canvas.
* As a param, pass the image itself, starting coordinate x,y, its width and height. 
* Examples of Loading Images: [Find the code executions in CodePen](https://codepen.io/inaheaven/pen/WqKOrw)

```javascript
var c = document.querySelector("#c");
var ctx = c.getContext("2d");
        
var image = new Image();
        
image.onload = function() {
    console.log("Loaded Image");
    ctx.drawImage(image, 0, 0, c.width, c.height);
            
    var savedImage = c.toDataURL();
    window.open(savedImage);
            
}
image.src = "some_random_image.png";
```

* Added two lines sho`uld open the image in the new window,
* But `Uncaught DOM Exception: Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported.` error occurs.
* This is safely hosting and serving image issues. 
* You can take some detour to save images,but having own server will solve this issues more properly.
* The instructor offered: Python SimpleHTTPServer, MAMP, Node to make this work with simple HTTP web server.  [Detailed instructions can be found here](https://classroom.udacity.com/courses/ud292/lessons/3163218691/concepts/32309787260923)

---

## Drawing Rectangles

```html
<!DOCTYPE HTML>
<html>
<head></head>
<body>
    <canvas id ="c" width="500" height="500"> </canvas>
    <script>
        var c = document.querySelector("#c");
        var ctx = c.getContext("2d");
        
        ctx.fillRect(100, 100, 100, 100);
        ctx.strokeRect(50, 50, 50, 50);
    </script>
</body>
</html>    
```

* In the code above, called the fillRect, strokeRect.
* The params of each function include the position of x,y axis and width and height of the rectangle.
* Can use `fillStyle`, instead of `fillRect` with the color selections.
* Also use `clearRect` to edit, without modifying the `fillStyle`
* Examples of fillRect, strokeRect: [Find the code executions in CodePen](https://codepen.io/inaheaven/pen/orMeYj)
* Examples of clearRect: [Find the code executions in CodePen](https://codepen.io/inaheaven/pen/YojxeN)

---

## Paths - Quiz

```html
<!DOCTYPE HTML>
<html>
<head></head>
<body>
    <canvas id ="c" width="500" height="500"> </canvas>
    <script>
        var c = document.querySelector("#c");
        var ctx = c.getContext("2d");
        
        ctx.beginPath()
        ctx.moveTo(10,10);
        ctx.lineTo(50,50);
        ctx.lineTo(50,10);
        ctx.lineTo(10,10);
        ctx.fill();
        // ctx.stroke();
    </script>
</body>
</html>    
```

* As above, instead of drawing a rectangle right away with fillRect or strokeRect, can draw lines with `lineTo`, after moving the pen position by `moveTo`;
* After, can fill in by `fill`, and draw borders only without fill by `stroke`
* Examples of moveTo, lineTo, fill, stroke: [Find the code executions in CodePen](https://codepen.io/inaheaven/pen/LKBowm)

---

## Moving Objects in a Canvas

* Canvas2D allows to translate (move), rotate, or scale objects.
* Examples of scale, translate, rotate: [Find the code executions in CodePen](https://codepen.io/inaheaven/pen/qzyzKL)

#### Scaling

* Use `scale(x,y)` mutiplies the x and y values by a given param
  - for example, ctx.scale(2,3) will make all values twice as large on the x axis and three times as larege on the y-axis.

#### Translation
* Use `translate(x,y)` moves all subsequent draw commands by x number of pixels on horizontally and y pixels vertically.
  - for example, ctx.translate(20,40); will move all the elements in the context 20 pixels to the right and 40 pixels down.

#### Rotation 
* use `rotate(angleRadians)` rotates an object about its center
  - radians = degrees * (MATH.PI/180)
  

---

## Saving and Restoring Canvas State

* Every canvas object contains a stack of drawing states. (LIFO structure)
* The code below shows the effect of `save` and `restore`. 
* Can save some attributes of context as a default with save, and restore the default even after making modifications to the context.
* Examples of save, restore: [Find the code executions in CodePen](https://codepen.io/inaheaven/pen/bPjPXq)


```javascript
var c = document.querySelector("#c");
var ctx = c.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(0,0,50,50);

// Save state with blue fill
ctx.save();
ctx.fillStyle = "green";
ctx.fillRect(100,100,10,10);
// Restore to blue fill
ctx.restore();

ctx.fillRect(200,10,20,20);
```

--- 

## Colors

* Can add colors to the fill and the stroke by `strokeStyle` and `fillStyle`.
* For the strokes, you have to add color before calling stroke.
* Examples of strokeStyle, fillStyle: [Find the code executions in CodePen](https://codepen.io/inaheaven/pen/zVLgKb)

```javascript
var c = document.querySelector("#c");
var ctx = c.getContext("2d"); 

ctx.strokeStyle = "#33CC33";

ctx.strokeRect(50, 50, 100., 100);
ctx.beginPath();
ctx.moveTo(75,75);
ctx.lineTo(125, 125);
ctx.lineTo(125,75);

ctx.fillStyle = "blue";
ctx.fill();
```
---

## Drawing Text

* Can write text with strokeText in canvas.
* When writing a text with strokeText, the lower left corner of the first alphabet is located at (0,0) coordinate. Therefore positioning text at 0,0 will show no result. 
* Add fonts with `ctx.font = 'size style'`
  - for example, ctx.font = '40px serif'
* Also can some additional styles texts by 
  - font = value
  - textAlign = value
  - direction = value
* More advanced: 
  - measureText: returns a `TextMetrics` object containing the width, in pixels, that the specified text will be when drawn in the current text style.
  - more information can be found here [drawing text docs](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
---

## Meme Creator

* Can create memes (text on the image) with the code below. 
* This is basically the sum of all above description.
* Examples of meme creator: [Find the code executions in CodePen](https://codepen.io/inaheaven/pen/vqzYWw)

```javascript
var c = document.querySelector("#c");
var ctx = c.getContext("2d"); 
var image = new Image();
image.onload = function(){
    ctx.drawImage(image, 0,0,c.width, c.height);
    ctx.font = "26pt Impact";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText("Hello World", c.width/2, 50);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.strokeText("Canvas Memes", c.width/2, c.height-10);
}

image.src = "some_random_image.png"
```

---

## Answers for the Quiz
* Coordinate Systems 
  * **A: (2,1), B: (3,2), C: (1,3)**


---

##### Please be aware that this is a summary of the Udacity Course HTML5 Canvas Basics. You can find the course here: [Full Course Page](https://classroom.udacity.com/courses/ud292). 
##### In here, I attached some image clips from the lecture vids and free images in CodePen are from unsplash.com, taken by Muzammil Soorma. If you find a bug or have any problems (copyrights of the codes, images, quotes or any), please contact me at my email in the cover page.  
