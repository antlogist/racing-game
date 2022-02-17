const trackWidth = 40;
const trackHeight = 40;
const trackGap = 2;

const trackCols = 20;
const trackRows = 15;

const trackGrid = [];

let canvas;
let canvasContext;

function trackReset() {
	for(let i = 0; i < trackCols * trackRows; i++) {
		trackGrid[i] = true;
	} // end of for each track
} // end of trackReset func

window.onload = function() {
  canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	const framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);

  trackReset()
}

function updateAll() {
	drawAll();
}

function rowColToArrayIndex(col, row) {
	return col + trackCols * row;
}


function drawTracks() {

	for(let eachRow = 0; eachRow < trackRows; eachRow++) {
		for(let eachCol=0; eachCol < trackCols; eachCol++) {

			const arrayIndex = rowColToArrayIndex(eachCol, eachRow);

			if(trackGrid[arrayIndex]) {
				colorRect(trackWidth * eachCol,trackHeight * eachRow,
					trackWidth - trackGap, trackHeight - trackGap, 'coral');
			} // end of is this track here
		} // end of for each track
	} // end of for each row

} // end of drawTracks func


function drawAll() {
	colorRect(0,0, canvas.width,canvas.height, 'black'); // clear screen

	drawTracks();
}

function colorRect(topLeftX,topLeftY, boxWidth,boxHeight, fillColor) {
	canvasContext.fillStyle = fillColor;
	canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}
