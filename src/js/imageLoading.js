const  carPic = document.createElement('img');

const trackPics = [

];

// const  roadPic = document.createElement('img');
// const  wallPic = document.createElement('img');

// const  treePic = document.createElement('img');
// const  flagPic = document.createElement('img');
// const  goalPic = document.createElement('img');

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

function loadImageForTrackCode(trackCode, fileName) {
  trackPics[trackCode] = document.createElement('img');
  beginLoadingImage(trackPics[trackCode], fileName);
}

function loadImages() {
  const imageList = [
    {name: carPic, file: './public/img/car.png'},
    {trackType: trackRoad, file: './public/img/track_road.png'},
    {trackType: trackWall, file: './public/img/track_wall.png'},
    {trackType: trackGoal, file: './public/img/track_goal.png'},
    {trackType: trackTree, file: './public/img/track_tree.png'},
    {trackType: trackFlag, file: './public/img/track_flag.png'},
  ];

  picsToLoad = imageList.length;

  imageList.map((image, i) => {
    if(imageList[i].name !== undefined) {
      beginLoadingImage(image.name, image.file);
    } else {
      loadImageForTrackCode(imageList[i].trackType, imageList[i].file);
    }
  });
}
