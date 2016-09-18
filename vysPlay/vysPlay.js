function vysTime(secs) {
  var m = Math.floor(secs / 60),
  s = Math.round(secs - (m * 60));
  s = (s < 10) ? '0' + s : s;
  return(m + ':' + s);
}

function vysPlay() {
  for (var i = 0; i < document.getElementsByClassName('vysPlay').length; i++) {

    var e = document.getElementsByClassName('vysPlay')[i];

    // DEFINE ELEMENTS
    var audio = document.createElement('AUDIO');
    audio.className = 'vysPlayAudio';
    audio.id = 'vysPlay_' + i;
    audio.src = e.dataset.src;
    audio.volume = '0.7';

    var title = document.createElement('SPAN');
    title.className = 'vysPlayTitle';
    title.innerHTML = e.dataset.title;

    var artist = document.createElement('SPAN');
    artist.className = 'vysPlayArtist';
    artist.innerHTML = e.dataset.artist;

    var volume = document.createElement('FORM');
    volume.className = 'vysPlayVolume';
    volume.oninput = function(event){audio.volume = (volumeSlide.value < 10) ? '0.0' + volumeSlide.value : (volumeSlide.value == 100) ? 1 : '0.' + volumeSlide.value;};

    var volumeSlide = document.createElement('INPUT');
    volumeSlide.className = 'vysPlayVolumeSlide';
    volumeSlide.id = 'vysPlayVol_' + i;
    volumeSlide.type = 'range';
    volumeSlide.value = '70';

    var durationBar = document.createElement('FORM');
    durationBar.className = 'vysPlayDurationBar';
    durationBar.oninput = function(event){audio.currentTime = audio.duration * durationSlide.value * 0.001;};

    var durationSlide = document.createElement('INPUT');
    durationSlide.className = 'vysPlayDurationSlide';
    durationSlide.id = 'vysPlayDur_' + i;
    durationSlide.type = 'range';
    durationSlide.value = '0';
    durationSlide.min = '0';
    durationSlide.max = '1000';

    var duration = document.createElement('SPAN');
    duration.className = 'vysPlayDuration';
    duration.id = 'vysPlayDurText_' + i;
    duration.innerHTML = '0:00 / 0:00';

    var cover = document.createElement('IMG');
    cover.className = 'vysPlayCover';
    cover.src = e.dataset.cover ? e.dataset.cover : './vysPlay/default-cover.jpg';

    var play = document.createElement('SPAN');
    play.className = 'vysPlayPlayButton vysIconPlay';
    play.onclick = function(event){(audio.paused) ? (audio.play(),this.classList.remove('vysIconPlay'),this.classList.add('vysIconPause')) : (audio.pause(),this.classList.remove('vysIconPause'),this.classList.add('vysIconPlay'));};

    // APPEND ELEMENTS
    e.appendChild(audio);
    e.appendChild(title);
    e.appendChild(artist);
    e.appendChild(volume).appendChild(volumeSlide);
    e.appendChild(durationBar).appendChild(durationSlide);
    e.appendChild(duration);
    e.appendChild(cover);
    e.appendChild(play);

  }

  setTimeout(function(){
    for (var i = 0; i < document.getElementsByClassName('vysPlay').length; i++) {
      document.getElementById('vysPlayDurText_' + i).innerHTML = '0:00 / ' + vysTime(document.getElementById('vysPlay_' + i).duration);
    }
  },50);

  // UPDATES
  setInterval(function(){
    for (var i = 0; i < document.getElementsByClassName('vysPlay').length; i++) {
      var play = document.getElementById('vysPlay_' + i);
      if (!play.paused) {
        document.getElementById('vysPlayDurText_' + i).innerHTML = vysTime(play.currentTime) + ' / ' + vysTime(play.duration);
        document.getElementById('vysPlayDur_' + i).value = Math.round(play.currentTime / play.duration * 1000);
      }
    }
  },200);
}

if (document.readyState != 'loading') {
  vysPlay();
} else {
  document.addEventListener('DOMContentLoaded',vysPlay);
}
