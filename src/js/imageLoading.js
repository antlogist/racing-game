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

function carImageLoad() {
  carPic.onload = countLoadedmagesAndLaunchIfReady;
	carPic.src = './public/img/car.png';
}

function trackLoadImages() {
  roadPic.onload = countLoadedmagesAndLaunchIfReady();
  wallPic.onload = countLoadedmagesAndLaunchIfReady();
  roadPic.src = './public/img/track_road.png';
  wallPic.src = './public/img/track_wall.png';
}

function loadImages() {
  carImageLoad();
  trackLoadImages();
}
