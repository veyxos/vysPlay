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
    audio.volume = e.dataset.vol ? (e.dataset.vol * 0.01) : '0.7';
    audio.currentTime = e.dataset.start ? e.dataset.start : 0;
    if (e.dataset.auto == 'true'){audio.setAttribute('autoplay','')};
    if (e.dataset.loop == 'true'){audio.setAttribute('loop','')};

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
    volumeSlide.value = e.dataset.vol ? e.dataset.vol : '70';

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

    var bottom = document.createElement('SPAN');
    bottom.className = 'vysPlayBottom';

    var play = document.createElement('SPAN');
    play.className = e.dataset.auto == 'true' ? 'vysPlayPlayButton vysIconPause' : 'vysPlayPlayButton vysIconPlay';
    play.id = 'vysPlayPly_' + i;
    play.onclick = function(event){(audio.paused) ? (audio.play(),this.classList.remove('vysIconPlay'),this.classList.add('vysIconPause')) : (audio.pause(),this.classList.remove('vysIconPause'),this.classList.add('vysIconPlay'));};

    var loop = document.createElement('SPAN');
    loop.className = e.dataset.loop == 'true' ? 'vysPlayLoopButton vysIconLoop vysPlayLoop' : 'vysPlayLoopButton vysIconLoop vysPlaySingle';
    loop.onclick = function(event){audio.hasAttribute('loop') ? (audio.removeAttribute('loop'),this.classList.remove('vysPlayLoop'),this.classList.add('vysPlaySingle')) : (audio.setAttribute('loop',''),this.classList.remove('vysPlaySingle'),this.classList.add('vysPlayLoop'))}

    // APPEND ELEMENTS
    bottom.appendChild(loop);
    bottom.appendChild(duration);
    e.appendChild(audio);
    e.appendChild(title);
    e.appendChild(artist);
    e.appendChild(volume).appendChild(volumeSlide);
    e.appendChild(durationBar).appendChild(durationSlide);
    // e.appendChild(duration);
    e.appendChild(cover);
    e.appendChild(play);
    e.appendChild(bottom);
    // e.appendChild(loop);

  }

  setTimeout(function(){
    for (var i = 0; i < document.getElementsByClassName('vysPlay').length; i++) {
      document.getElementById('vysPlayDurText_' + i).innerHTML = '0:00 / ' + vysTime(document.getElementById('vysPlay_' + i).duration);
      document.getElementById('vysPlayDur_' + i).value = e.dataset.start ? Math.round(e.dataset.start / audio.duration * 1000) : '0';
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
      if (play.currentTime == play.duration && !play.hasAttribute('loop')) {
        play.currentTime = '0';
        document.getElementById('vysPlayDurText_' + i).innerHTML = '0:00 / ' + vysTime(play.duration);
        document.getElementById('vysPlayDur_' + i).value = '0';
        document.getElementById('vysPlayPly_' + i).classList.remove('vysIconPause');
        document.getElementById('vysPlayPly_' + i).classList.add('vysIconPlay');
      }
    }
  },200);
}

if (document.readyState != 'loading') {
  vysPlay();
} else {
  document.addEventListener('DOMContentLoaded',vysPlay);
}
