const  carPic = document.createElement('img');
let carPicLoaded = false;

const  roadPic = document.createElement('img');
const  wallPic = document.createElement('img');

function carImageLoad() {
  carPic.onload = function() {
		carPicLoaded = true;
	}
	carPic.src = './public/img/car.png';
}

function trackLoadImages() {
  roadPic.src = './public/img/track_road.png';
  wallPic.src = './public/img/track_wall.png';
}

function loadImages() {
  carImageLoad();
  trackLoadImages();
}
