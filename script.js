

var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3'); 
audio.loop=true;
// var x=audio.play();
    


var promise = audio.play();

if (promise !== undefined) {
  promise.then(_ => {
    // console.log("hello")
    audio.play()
  }).catch(error => {
    // Autoplay was prevented.
    // Show a "Play" button so that user can start playback.
  });
}
