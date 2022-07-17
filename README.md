# plugin-jquery

# jQuery carousel v1.0.0
Jquery carousel and left button, right button using multiple images

# Options

# demo 
`below for plugin demo code`

### component FIle HTML:

`html code below :`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8"name="viewport" content="width=device-width, initial-scale=1.0" meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>PLUGIN</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css  ">
    <link rel="stylesheet" href="./demo/style/style.css">
  </head>
  <body>
    <header>
      <h1 class="slide-h1">Slider Jquery</h1>
    </header>
    <ul>
      <li>
        <img src="./demo/image/image1.jpg" alt="" width="1000px" height="500px">
      </li>
      <li>
        <img src="./demo/image/image2.jpg" alt="" width="1000px" height="500px">
      </li>
      <li>
        <img src="./demo/image/image3.jpg" alt="" width="1000px" height="500px">
      </li>
      <li>
        <img src="./demo/image/image4.jpg" alt="" width="1000px" height="500px">
      </li>
    </ul>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
      <script src="./plugin-slider.js" type="text/javascript"></script>
      <script src="./index.js"></script>
  </body>
</html>

```
### Component File SCSS
`SCSS code below :`

```scss
body {
  margin: 0 auto;
  padding: 0;
  overflow-x: hidden;
  font-family: sans-serif;
  line-height:1.6em;
  .slide-h1{
    font-weight: bold;
    color: #db0f0f;
  }
}
```

### component File JQUERY:

`jquery code below :`


```javascript
$('ul').Slider({});
```


```javascript
where jquery plugin uses html element $('ul').slider(); to do a slider plugin, besides that its function is to automate image sliders.
```
