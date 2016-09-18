# vysPlay
vysPlay is a simple and lightweight HTML5 audio player based on JavaScript.  

## Usage
To use the Player you have to put the ```vysPlay``` folder inside your project folder and link the ```vysPlay.min.js``` as well as the ```vysPlay.min.css```.
```html
<head>
  …
  <link rel="stylesheet" href="vysPlay/vysPlay.min.css">
  …
</head>
<body>
  …
  <script src="vysPlay/vysPlay.min.js"></script>
</body>
```
Now you may add a player by using a single tag with the ```vysPlay``` class and some data attributes for the player itself. The JavaScript will render several tags for you.  

```html
<div class="vysPlay" data-src="PATH/TO/AUDIO/FILE" data-title="Title of the Track" data-artist="Name of the Artist" data-cover="PATH/TO/COVER/IMAGE"></div>
```

For an example you can also have a look on the source code of the ```example.html```.  
The CSS and JavaScript files are also avaible in not minimized versions.
