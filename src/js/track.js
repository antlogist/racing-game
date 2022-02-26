const  roadPic = document.createElement('img');
const  wallPic = document.createElement('img');

const trackWidth = 40;
const trackHeight = 40;
const trackGap = 2;

const trackCols = 20;
const trackRows = 15;


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

const trackRoad = 0;
const trackWall = 1;
const trackPlayerStart = 2;

function trackLoadImages() {
  roadPic.src = './public/img/track_road.png';
  wallPic.src = './public/img/track_wall.png';
}

function isWallAtColRow(col, row) {
	if(col >= 0 && col < trackCols &&
		row >= 0 && row < trackRows) {
		 const trackIndexUnderCoord = rowColToArrayIndex(col, row);
		 return (trackGrid[trackIndexUnderCoord] == trackWall);
	} else {
		return false;
	}
}

function carTrackHandling() {
	const carTrackCol = Math.floor(carX / trackWidth);
	const carTrackRow = Math.floor(carY / trackHeight);

	if(carTrackCol >= 0 && carTrackCol < trackCols &&
		carTrackRow >= 0 && carTrackRow < trackRows) {
			if(isWallAtColRow( carTrackCol,carTrackRow )) {
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

			if(trackGrid[arrayIndex] === trackWall) {
        canvasContext.drawImage(wallPic,
          trackWidth * eachCol, trackHeight * eachRow);
			} else if(trackGrid[arrayIndex] === trackRoad) {
        canvasContext.drawImage(roadPic,
          trackWidth * eachCol, trackHeight * eachRow);
			}
       // end of is this track here
		} // end of for each track
	} // end of for each row

} // end of drawTracks func
