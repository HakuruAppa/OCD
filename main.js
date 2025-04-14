//main page
let backdropImage;
let eyeGif = [];
let eyes = [];
let eyesSecondary = [];
let randomEyeArray = [];
let counter;
let state = 1;
let font
let solveCount = 0;

function preload() {
	//font = loadFont('Ballad of Dwight Frye.ttf');
	font = loadFont('TNanti-Demo.otf');
	backdropImage = loadImage('scratches-texture-1.jpg');
	for (i = 0; i < 9 + 15; i++) {
		eyeGif.push(loadImage('eyeanimated.gif'));
	}
}

function setup() {
	createCanvas(500, 500);
	background("black");

	//backdrop
	//tint(255, 60);
	backdropImage.filter(INVERT);

	counter = 0;

	for (j = 25; j < height; j += height / 3) {
		for (i = 25; i < width; i += width / 3) {
			//eyeScale=random()+1
			eyes.push(new eye(eyeGif[counter], i + 50 * noise(i / j), j + 50 * noise(j / i), 2 * PI * noise(i / j), constrain(2 * noise(i / j), 0.6, 1.5)));
			//push();
			//eyes[counter].showEye();
			//pop();
			counter++;
		}
	}

	for (i = 0; i < 15; i++) {
		eyesSecondary.push(new eye(eyeGif[i + 9], (random() > 0.5) ? constrain(random(width), 100, 220) : constrain(random(width), 280, 400), (random() > 0.6) ? constrain(random(height), 50, 140) : constrain(random(height), 200, 320), 2 * PI * noise(i), random(1, 2.5)));
	}

	mainPuzzle = new boxPuzzle(width / 2, height / 2);



}

function draw() {

	image(backdropImage, 0, 0, width, height);

	for (let i = 0; i < counter; i++) {
		push();
		eyes[i].showEye();
		pop();
		eyes[i].keepOpen();
	}

	//console.log(state);
	switch (state) {
		case 1:
			mainPuzzle.displayPuzzle();
			starterPrompt = new prompt(font, 1, frameCount);
			if (mainPuzzle.solution()) {
				state = 2;
				solveCount++;
			}
			//mainPuzzle=new boxPuzzle(width/2,height/2);
			//starterPrompt = new prompt(font, 1, frameCount);
			break;

		case 2:
			mainPuzzle.displayPuzzle();
			for (let i = 0; i < counter; i++) {
				eyes[i].openEye();
			}
			ocdPrompt = new prompt(font, 2, frameCount);
			if (mainPuzzle.solution()) {
				mainPuzzle.displayPuzzle();
				solveCount++;
				//ocdPrompt2 = new prompt(font, 3, solveCount);

			}


			if (solveCount > 3) {
				state = 3;
			}
			break;

		case 3:
			mainPuzzle.displayPuzzle();
			ocdPrompt2 = new prompt(font, 5, solveCount);

			if (mainPuzzle.solution()) {
				mainPuzzle.displayPuzzle();
				ocdPrompt2 = new prompt(font, 3, solveCount);
				solveCount++;
				//state=3;
			}
			if (solveCount > 2) {
				for (var i = 0; i < constrain(solveCount - 3, 0, eyesSecondary.length); i++) {

					eyesSecondary[i].showEye();
					eyesSecondary[i].openEye();
					eyesSecondary[i].keepOpen();

				}
			}
			if (solveCount > 4) {
				if (random() > 0.5) {
					ocdPrompt2 = new prompt(font, 3, solveCount);
				}
			}
			if (solveCount > 5) {
				if (random() > 0.6) {
					for (var i = 0; i < constrain(solveCount - 4, 0, eyesSecondary.length); i++) {
						ocdPrompt2 = new prompt(font, 4, solveCount);
					}
				}
			}
			if (solveCount > 9) {
				state = 4;
			}
			break;

		case 4:
			
			ocdPrompt2 = new prompt(font, 6, solveCount);

			if (mainPuzzle.solution()) {
				mainPuzzle.displayPuzzle();
				ocdPrompt2 = new prompt(font, 3, solveCount);
				solveCount++;
				//state=3;
			}
			for (var i = 0; i < constrain(solveCount - 3, 0, eyesSecondary.length); i++) {
				eyesSecondary[i].showEye();
				eyesSecondary[i].closeEye();


			}
			for (var i = 0; i < counter; i++) {
				eyes[i].closeEye();
			}
			if (random() > 0.5) {
				ocdPrompt2 = new prompt(font, 3, solveCount);
				ocdPrompt2 = new prompt(font, 3, solveCount);
				ocdPrompt2 = new prompt(font, 3, solveCount);
			}

			if (random() > 0.6) {
				for (var i = 0; i < constrain(solveCount - 4, 0, eyesSecondary.length); i++) {
					ocdPrompt2 = new prompt(font, 4, solveCount);
				}

			}

			break;
	}




	//eyes[3].openEye();

}

function mousePressed() {
	let selectEye = int(random(counter));

	if (!eyes[selectEye].getOpen()) {
		eyes[selectEye].openEye();
	} else {
		eyes[selectEye].closeEye();
	}
}

function mouseReleased() {

}