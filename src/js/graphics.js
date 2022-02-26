
export function drawBitmapCenteredWithRotation(canvasContext, useBitmap,atX,atY, withAng) {
  canvasContext.save();
  canvasContext.translate(atX, atY);
  canvasContext.rotate(withAng);
  canvasContext.drawImage(useBitmap,
    -useBitmap.width / 2,
    -useBitmap.height / 2);
  canvasContext.restore();
}

export function colorRect(canvasContext, topLeftX,topLeftY, boxWidth,boxHeight, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

export function colorCircle(canvasContext, centerX,centerY, radius, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX,centerY, 10, 0,Math.PI*2, true);
  canvasContext.fill();
}