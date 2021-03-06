let carX = 0;
let carY = 0;
let carAng = 0;
let carSpeed = 0;

const speedDecay = 0.94;
const drivePower = 0.5;
const reversePower = 0.2;
const turnRate = 0.06;
const minSpeedToTurn = 0.5;

function carReset() {
	carSpeed = 0;
	for(let eachRow = 0; eachRow < trackRows; eachRow++) {
		for(let eachCol=0; eachCol < trackCols; eachCol++) {

			const arrayIndex = rowColToArrayIndex(eachCol, eachRow);

			if(trackGrid[arrayIndex] == trackPlayerStart) {
				trackGrid[arrayIndex] = trackRoad; //become a plain road
				carAng = -Math.PI/2;
				carX = eachCol * trackWidth + trackWidth/2;
				carY = eachRow * trackHeight + trackHeight/2;
			} // end of is this track here
		} // end of for each track
	} // end of for each row
}

function carMove() {

	carSpeed *= speedDecay;

	if(keyHeldGas) {
		carSpeed += drivePower;
	}
	if(keyHeldReverse) {
		carSpeed -= reversePower;
	}

	if(Math.abs(carSpeed) > minSpeedToTurn) {
		if(keyHeldTrurnLeft) {
			carAng -= turnRate;
		}

		if(keyHeldTrurnRight) {
			carAng += turnRate;
		}
	}

	carX += Math.cos(carAng) * carSpeed;
	carY += Math.sin(carAng) * carSpeed;
}

function carDraw() {
	drawBitmapCenteredWithRotation(carPic,
		carX,carY,
		carAng);
}
