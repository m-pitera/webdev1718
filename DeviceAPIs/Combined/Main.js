// JavaScript File
var goFS = document.getElementById("goFS");
var videoElement = document.getElementById("myvideo");

const player = document.getElementById('player');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const captureButton = document.getElementById('capture');

const constraints = {
  video: true,
};

document.documentElement.requestFullscreen();

document.addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {
    toggleFullScreen();
  }
}, false);

$("#capture").click(function() {
  console.log('button clicked')
});

//captureButton.addEventListener('click', () => { /*context.drawImage(player, 0, 0, canvas.width, canvas.height);*/ });

function toggleFullScreen() {
  if (!document.mozFullScreen && !document.webkitFullScreen) {
    if (videoElement.mozRequestFullScreen) {
      videoElement.mozRequestFullScreen();
    }
    else {
      videoElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  }
  else {
    if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    }
    else {
      document.webkitCancelFullScreen();
    }
  }
}

navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
  player.srcObject = stream;
});
/*
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  }
  else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
*/

//goFS.addEventListener("click", function() { document.body.requestFullscreen(); }, false);
