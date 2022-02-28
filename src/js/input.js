const keyLeftArrow = 37;
const keyUpArrow = 38;
const keyRightArrow = 39;
const keyDownArrow = 40;

let keyHeldGas = false;
let keyHeldReverse = false;
let keyHeldTrurnLeft = false;
let keyHeldTrurnRight = false;

function setupInput() {
  document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);
}

function keyPressed(evt) {

	evt.preventDefault();

	if(keyLeftArrow == evt.keyCode) {
		keyHeldTrurnLeft = true;
	}

	if(keyRightArrow == evt.keyCode) {
		keyHeldTrurnRight = true;
	}

	if (keyUpArrow == evt.keyCode) {
		keyHeldGas = true;
	}

	if (keyDownArrow == evt.keyCode) {
		keyHeldReverse = true;
	}

}

function keyReleased(evt) {
	if(keyLeftArrow == evt.keyCode) {
		keyHeldTrurnLeft = false;
	}

	if(keyRightArrow == evt.keyCode) {
		keyHeldTrurnRight = false;
	}

	if (keyUpArrow == evt.keyCode) {
		keyHeldGas = false;
	}

	if (keyDownArrow == evt.keyCode) {
		keyHeldReverse = false;
	}

}