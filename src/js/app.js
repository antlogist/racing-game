let canvas;
let canvasContext;

window.onload = function() {
  canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	const framesPerSecond = 15;
	setInterval(updateAll, 1000/framesPerSecond);

	setupInput();
	loadImages();
  carReset();

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
