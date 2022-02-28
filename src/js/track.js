const trackWidth = 40;
const trackHeight = 40;
const trackGap = 2;

const trackCols = 20;
const trackRows = 15;

const levelOne = [4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4,
									 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
									 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
									 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
									 1, 0, 0, 0, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 1,
									 1, 0, 0, 1, 1, 0, 0, 1, 4, 4, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1,
									 1, 0, 0, 1, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
									 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 5, 0, 0, 1, 0, 0, 1,
									 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
									 1, 0, 0, 1, 0, 0, 5, 0, 0, 0, 5, 0, 0, 1, 0, 0, 1, 0, 0, 1,
									 1, 0, 2, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 1,
									 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
									 0, 3, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
									 0, 3, 0, 0, 0, 0, 1, 4, 4, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
									 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 4];

let trackGrid = [];

const trackRoad = 0;
const trackWall = 1;
const trackPlayerStart = 2;

const trackGoal = 3;
const trackTree = 4;
const trackFlag = 5;


function returnTileTypeAtColRow(col, row) {
	if(col >= 0 && col < trackCols &&
		row >= 0 && row < trackRows) {
		 const trackIndexUnderCoord = rowColToArrayIndex(col, row);
		 return trackGrid[trackIndexUnderCoord];
	} else {
		return trackWall;
	}
}

function carTrackHandling() {
	const carTrackCol = Math.floor(carX / trackWidth);
	const carTrackRow = Math.floor(carY / trackHeight);

	if(carTrackCol >= 0 && carTrackCol < trackCols &&
		carTrackRow >= 0 && carTrackRow < trackRows) {
			const tileHere = returnTileTypeAtColRow( carTrackCol,carTrackRow )

			if(tileHere === trackGoal) {
				loadLevel(levelOne);
				carReset();
			} else if(tileHere !== trackRoad) {
				carX -= Math.cos(carAng) * carSpeed;
				carY -= Math.sin(carAng) * carSpeed;

				carSpeed *= -0.2;
			}
		}
}

function drawTracks() {

	let arrayIndex = 0;
	let drawTileX = 0;
	let drawTileY = 0;
	for(let eachRow = 0; eachRow < trackRows; eachRow++) {
		for(let eachCol=0; eachCol < trackCols; eachCol++) {

			// const arrayIndex = rowColToArrayIndex(eachCol, eachRow);

			const tileKind = trackGrid[arrayIndex];

			const useImg = trackPics[tileKind];

			canvasContext.drawImage(useImg,
				drawTileX, drawTileY);

				drawTileX += trackWidth;
				arrayIndex++;
		} // end of for each col
		drawTileY += trackHeight;
		drawTileX = 0;
	} // end of for each row

} // end of drawTracks func
