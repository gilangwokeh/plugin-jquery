# plugin-jquery

# jQuery carousel v1.0.8
Jquery carousel and left button, right button using multiple images

## Options

### component HTML:
there are 5 images, there are right and left buttons used in html.

`html code below :`

```html
<div id="container">
      <button class="prev-span">
        <img src="./demo/image/back1.svg"
        alt="Prev" id="prev">
      </button>
      <div id="slider">
        <div class="slide">
          <div class="slide-copy">
          </div>
          <img src="./demo/image/image1.jpg">
        </div>
        <div class="slide">
          <div class="slide-copy">
          </div>
          <img src="./demo/image/image2.jpg">
        </div>
        <div class="slide">
          <div class="slide-copy">
          </div>
          <img src="./demo/image/image3.jpg">
        </div>
        <div class="slide">
          <div class="slide-copy">
          </div>
          <img src="./demo/image/image4.jpg">
        </div>
        <div class="slide">
          <div class="slide-copy">
          </div>
          <img src="./demo/image/image5.jpg">
        </div>
      </div>
      <button class="next-span">
        <img src="./demo/image/forward.svg" alt="Next" id="next">
      </button>
    </div>

```

### Jquery :
next slide function and previous slide function to go to another page ,autoswitch === true to auto to another page.

`jquery code below :`


```javascript
let autoswitch = true;		
let autoswitch_speed = 6000;

if(autoswitch == true){
		setInterval(nextSlide,autoswitch_speed);
	}

function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(1000);
		$('.active').fadeIn(1000);
	}

  function prevSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(1000);
		$('.active').fadeIn(1000);
	}

```
