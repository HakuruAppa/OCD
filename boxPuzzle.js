function boxPuzzle(x, y) {

	let solved = false;
	let keyDropped = false;
	let keyPicked = false;

	this.x = x;
	this.y = y;
	
	let newX = x;
	let newY = y;

	let holeHitbox = [0, 0, 0, 0];
	let keyHitbox = [0, 0, 0, 0];

	//hole();
	let keyInX = width * noise(x);
	let keyInY = constrain(height * noise(y), height / 2 + 100, height);
	//key(keyInX, keyInY);

	let tempKX = keyInX;
	let tempKY = keyInY;


	this.displayPuzzle = function() {
		hole();
		key(tempKX, tempKY);

		if (mouseIsPressed) {
			if ((keyHitbox[0] < mouseX && keyHitbox[1] > mouseX && keyHitbox[2] < mouseY &&
					keyHitbox[3] > mouseY)) {
				keyPicked = true;
				keyDropped = false;
				tempKX = mouseX;
				tempKY = mouseY;
				key(tempKX, tempKY);
			} else if (keyPicked && !keyDropped) {
				tempKX = mouseX;
				tempKY = mouseY;
				key(tempKX, tempKY);
			}
		} else {
			keyDropped = true;

		}


	}


	function hole() {
		push();
		rectMode(CENTER);
		strokeWeight(3);
		fill("white");
		if (!solved) {
			rect(newX, newY, 100, 50);
			holeHitbox = [newX - 100 / 2, newX + 100 / 2, newY - 50 / 2, newY + 50 / 2];
		} else{
			solved=false;
			newX+=random(-5,5);
			newY+=random(-5,5);
		}
		pop();
	}

	function key(keyX, keyY) {
		push();
		rectMode(CENTER);
		noStroke();
		fill("red");
		rect(keyX, keyY, 96, 46);
		keyHitbox = [keyX - 96 / 2, keyX + 96 / 2, keyY - 46 / 2, keyY + 46 / 2];
		pop();
	}

	this.solution = function() {
		if (keyHitbox[0] > holeHitbox[0] && keyHitbox[1] < holeHitbox[1] && keyHitbox[2] > holeHitbox[2] && keyHitbox[3] < holeHitbox[3] && keyDropped) {
			solved = true;
			//console.log("solved!");
		} else {
			solved = false;
		}
		
		return solved;
	}

}

/*
function mousePressed(){
	if(keyHitbox[0]<mouseX && keyHitbox[1]>mouseX && keyHitbox[2]<mouseY && keyHitbox[3]>mouseY){
		
		keyDropped=false;
		console.log("rk");
		key(mouseX, mouseY);
	}
	
}

function mouseReleased(){
	if(keyHitbox[0]<mouseX && keyHitbox[1]>mouseX && keyHitbox[2]<mouseY && keyHitbox[3]>mouseY){
		keyDropped=true;
		
	}

}
*/