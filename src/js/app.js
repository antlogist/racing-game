const  carPic = document.createElement('img');
let carPicLoaded = false;

const trackWidth = 40;
const trackHeight = 40;
const trackGap = 2;

const trackCols = 20;
const trackRows = 15;

let carX = 0;
let carY = 0;
let carAng = 0;
let carSpeed = 0;

const trackGrid = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                   1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
                   1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                   1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
                   1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
                   1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1,
                   1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
                   1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
                   1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
                   1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
                   1, 2, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,
                   1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
                   1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
                   1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
                   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

let canvas;
let canvasContext;

const keyLeftArrow = 37;
const keyUpArrow = 38;
const keyRightArrow = 39;
const keyDownArrow = 40;

function keyPressed(evt) {

	evt.preventDefault();

	if(keyLeftArrow == evt.keyCode) {
		carAng -= 0.5;
	}

	if(keyRightArrow == evt.keyCode) {
		carAng += 0.5;
	}

	if (keyUpArrow == evt.keyCode) {
		carSpeed += 0.5;
	}

	if (keyDownArrow == evt.keyCode) {
		carSpeed -= 0.5;
	}

}

function keyReleased(evt) {
	console.log('key released' + evt.keyCode);
}

window.onload = function() {
  canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	const framesPerSecond = 15;
	setInterval(updateAll, 1000/framesPerSecond);

	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);

	carPic.onload = function() {
		carPicLoaded = true;
	}
	carPic.src = './public/img/car.png';

  carReset();

}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
 carMove();
}

function rowColToArrayIndex(col, row) {
	return col + trackCols * row;
}

function carReset() {
	for(let eachRow = 0; eachRow < trackRows; eachRow++) {
		for(let eachCol=0; eachCol < trackCols; eachCol++) {

			const arrayIndex = rowColToArrayIndex(eachCol, eachRow);

			if(trackGrid[arrayIndex] == 2) {
				trackGrid[arrayIndex] = 0; //become a plain road
				carX = eachCol * trackWidth + trackWidth/2;
				carY = eachRow * trackHeight + trackHeight/2;
			} // end of is this track here
		} // end of for each track
	} // end of for each row
}

function carMove() {
	carX += Math.cos(carAng) * carSpeed;
	carY += Math.sin(carAng) * carSpeed;
}

function drawTracks() {

	for(let eachRow = 0; eachRow < trackRows; eachRow++) {
		for(let eachCol=0; eachCol < trackCols; eachCol++) {

			const arrayIndex = rowColToArrayIndex(eachCol, eachRow);

			if(trackGrid[arrayIndex] === 1) {
				colorRect(trackWidth * eachCol,trackHeight * eachRow,
					trackWidth - trackGap, trackHeight - trackGap, 'coral');
			} // end of is this track here
		} // end of for each track
	} // end of for each row

} // end of drawTracks func


function drawAll() {
	colorRect(0,0, canvas.width,canvas.height, 'black'); // clear screen

	if(carPicLoaded) {
		drawBitmapCenteredWithRotation(carPic,
			carX,
			carY, carAng);
	}

	drawTracks();
}

function drawBitmapCenteredWithRotation(useBitmap,atX,atY, withAng) {
		canvasContext.save();
		canvasContext.translate(atX, atY);
		canvasContext.rotate(withAng);
		canvasContext.drawImage(useBitmap,
			-useBitmap.width / 2,
			-useBitmap.height / 2);
		canvasContext.restore();
}

function colorRect(topLeftX,topLeftY, boxWidth,boxHeight, fillColor) {
	canvasContext.fillStyle = fillColor;
	canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function colorCircle(centerX,centerY, radius, fillColor) {
	canvasContext.fillStyle = fillColor;
	canvasContext.beginPath();
	canvasContext.arc(centerX,centerY, 10, 0,Math.PI*2, true);
	canvasContext.fill();
}
