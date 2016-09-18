# vysPlay
vysPlay is a simple and lightweight HTML5 audio player based on JavaScript.  

## Usage
To use vysPlay you have to copy the ```vysPlay``` folder inside your project folder and link the ```vysPlay.min.js``` as well as the ```vysPlay.min.css``` inside your HTML document.
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
Now you may add a player by using a single tag with the ```vysPlay``` class as well as the ```data-src```, ```data-title``` and ```data-artist``` attributes to define the audio source, the title and the artist of the song. For further information have a look at the documentation below.  

```html
<div class="vysPlay" data-src="PATH/TO/AUDIO/FILE" data-title="Title of the Track" data-artist="Name of the Artist" data-cover="PATH/TO/COVER/IMAGE"></div>
```

For an example you can also have a look on the source code of the ```example.html```.  
The CSS and JavaScript files are also avaible in not minimized versions.

## Documentation
You create an audio player by using a ```div``` tag with the ```vysPlay``` class.  
You can control the player by using the HTML ```data-*``` Attributes.

| Setting        | Usage                                                                                    | Attribute         | Default Value                   |
| -------------- | ---------------------------------------------------------------------------------------- | ----------------- | ------------------------------- |
| Audio File     | Define the path to the audio file that should be played                                  | ```data-src```    | none                            |
| Track Title    | Define the title of track that should be played                                          | ```data-title```  | none                            |
| Track Artist   | Define the artist of track that should be played                                         | ```data-artist``` | none                            |
| Track Cover    | Define the cover of track that should be played                                          | ```data-cover```  | ```vysPlay/default-cover.jpg``` |
| Default Volume | Define the default volume of the player in percent                                       | ```data-vol```    | ```70```                        |
| Start Position | Define the start position of the player in seconds                                       | ```data-start```  | ```0```                         |
| Autoplay       | Define if the player should play automatically after loading.<br>This is a boolean value | ```data-auto```   | ```false```                     |
