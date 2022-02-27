const  carPic = document.createElement('img');
const  roadPic = document.createElement('img');
const  wallPic = document.createElement('img');

let picsToLoad = 3;

function countLoadedmagesAndLaunchIfReady() {
  picsToLoad--;
  if(picsToLoad == 0) {
    startGameAfterImageLoading();
  }
}

function beginLoadingImage(imgVar, fileName) {
  imgVar.onload = countLoadedmagesAndLaunchIfReady;
	imgVar.src = fileName;
}

function loadImages() {
  beginLoadingImage(carPic, './public/img/car.png');
  beginLoadingImage(roadPic, './public/img/track_road.png');
  beginLoadingImage(wallPic, './public/img/track_wall.png');
}
