let canvas;
let canvasContext;

window.onload = function() {
  canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	colorRect(0, 0, canvas.width,canvas.height, 'black');
	colorText('Loading', canvas.width / 2, canvas.height / 2, 'white');

	loadImages();

}

function startGameAfterImageLoading() {
	const framesPerSecond = 15;
	setInterval(updateAll, 1000/framesPerSecond);

	setupInput();

	loadLevel(levelOne);

  carReset();

}

function loadLevel(whichLevel) {
	trackGrid = whichLevel.slice();
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
 carMove();
 carTrackHandling();
}

function rowColToArrayIndex(col, row) {
	return col + trackCols * row;
}

function drawAll() {
	drawTracks();
	carDraw();
}
