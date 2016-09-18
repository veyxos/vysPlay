# vysPlay
vysPlay is a simple and lightweight HTML5 audio player based on JavaScript.  

## Usage
To use the Player you have to put the ```vysPlay``` folder inside your project folder and link the ```app.js``` as well as the ```app.css```.
```html
<head>
  …
  <link rel="stylesheet" href="vysPlay/app.css">
  …
</head>
<body>
  …
  <script src="vysPlay/app.js"></script>
</body>
```
Now you may add a player by using a single tag with the ```vysPlay``` class and some data attributes for the player itself. The JavaScript will render several tags for you.  

```html
<div class="vysPlay" data-src="PATH/TO/AUDIO/FILE" data-title="Title of the Track" data-artist="Name of the Artist" data-cover="PATH/TO/COVER/IMAGE"></div>
```

For an example you can also have a look on the source code of the ```example.html```.
