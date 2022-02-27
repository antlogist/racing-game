const trackWidth = 40;
const trackHeight = 40;
const trackGap = 2;

const trackCols = 20;
const trackRows = 15;

const trackGrid = [4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4,
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

const trackRoad = 0;
const trackWall = 1;
const trackPlayerStart = 2;

const trackGoal = 3;
const trackTree = 4;
const trackFlag = 5;


function isObstacleAtColRow(col, row) {
	if(col >= 0 && col < trackCols &&
		row >= 0 && row < trackRows) {
		 const trackIndexUnderCoord = rowColToArrayIndex(col, row);
		 return (trackGrid[trackIndexUnderCoord] !== trackRoad);
	} else {
		return false;
	}
}

function carTrackHandling() {
	const carTrackCol = Math.floor(carX / trackWidth);
	const carTrackRow = Math.floor(carY / trackHeight);

	if(carTrackCol >= 0 && carTrackCol < trackCols &&
		carTrackRow >= 0 && carTrackRow < trackRows) {
			if(isObstacleAtColRow( carTrackCol,carTrackRow )) {
				carX -= Math.cos(carAng) * carSpeed;
				carY -= Math.sin(carAng) * carSpeed;

				carSpeed *= -0.2;
			}
		}
}

function drawTracks() {

	for(let eachRow = 0; eachRow < trackRows; eachRow++) {
		for(let eachCol=0; eachCol < trackCols; eachCol++) {

			const arrayIndex = rowColToArrayIndex(eachCol, eachRow);

			const tileKind = trackGrid[arrayIndex];

			let useImg;

			switch(tileKind) {
				case trackWall:
					useImg = wallPic;
					break;
				case trackRoad:
					useImg = roadPic;
					break;
				case trackGoal:
					useImg = goalPic;
					break;
				case trackTree:
					useImg = treePic;
					break;
				case trackFlag:
					useImg = flagPic;
					break;
				default:
					useImg = wallPic;
			}

			canvasContext.drawImage(useImg,
				trackWidth * eachCol, trackHeight * eachRow);
		} // end of for each track
	} // end of for each row

} // end of drawTracks func
