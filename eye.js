function eye(eyeGif, x, y, tilt, scale) {
	//eyeGifCopy=(loadImage('eyeanimated.gif'));
	this.eyeGif = eyeGif;
	this.x = x;
	this.y = y;
	this.tilt = tilt;
	this.scale = scale;
	resizeCalc = 1.0;
	resizeCalc = this.scale * 100;
	let isOpen=false;

	eyeGif.resize(resizeCalc, resizeCalc);
	eyeGif.pause();
	eyeGif.delay(150);
	//eyeFrames[0].filter(INVERT);


	this.showEye = function() {
		push();
		imageMode(CENTER);
		tint(255, 255);

		translate(x + 40, y + 40);
		rotate(PI * tilt);
		image(eyeGif, 0, 0);
		//eyeGif.pause();
		pop();
	}
	this.openEye = function() {
		if (eyeGif.getCurrentFrame() == 0) {
			eyeGif.play();
		}
	}
	
	this.closeEye = function(){
		if (eyeGif.getCurrentFrame() == 2) {
			eyeGif.pause();
			eyeGif.setFrame(1);
			//isOpen=false;
		}
		else if (eyeGif.getCurrentFrame() == 1) {
			eyeGif.pause();
			eyeGif.setFrame(0);
			isOpen=false;
		}
	}

	this.keepOpen = function() {
		if (eyeGif.getCurrentFrame() == 2) {
			eyeGif.pause();
			isOpen=true;
		}
	}
	
	
	this.getOpen = function (){
		return isOpen;
	}
}