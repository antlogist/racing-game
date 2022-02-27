const  carPic = document.createElement('img');
const  roadPic = document.createElement('img');
const  wallPic = document.createElement('img');

let picsToLoad = 0; //set automatically based on imageList in loadImages()

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
  const imageList = [
    {name: carPic, file: './public/img/car.png'},
    {name: roadPic, file: './public/img/track_road.png'},
    {name: wallPic, file: './public/img/track_wall.png'},
  ];

  picsToLoad = imageList.length;

  imageList.map((image) => {
    beginLoadingImage(image.name, image.file);
  });
}
