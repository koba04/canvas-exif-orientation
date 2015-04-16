(function() {
  'use strict';

  var img = document.getElementById('image');
  var canvas = document.getElementById('result');
  var ctx = canvas.getContext('2d');

  var drawImage = function(orientation) {
    var imageCanvas = CanvasExifOrientation.drawImage(img, orientation);
    console.log(imageCanvas.toDataURL('image/jpeg'));

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = imageCanvas.width;
    canvas.height = imageCanvas.height;
    ctx.drawImage(
      imageCanvas,
      0, 0, imageCanvas.width, imageCanvas.height
    );
  }

  document.getElementById('orientation').addEventListener('change', function(e) {
    drawImage(e.target.value);
  });

  img.onload = drawImage.bind(null, 1);
})();
