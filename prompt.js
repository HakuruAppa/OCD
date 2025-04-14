function prompt(font, textScene, initialT) {
	this.initialT = initialT

	/*
	fadeIn=function(){
		
		let fade=0;
		while(fade<256){
			fade=frameCount-initialT
			fill(0,0,0,fade);
			//map(0,255);
		}
		
	}
	*/


	textFont(font);
	textAlign(CENTER, CENTER);
	switch (textScene) {
		case 1:
			push();
			//fadeIn();
			textSize(30);
			text('align the red box', width / 2, height / 3);
			pop();
			break;
		case 2:
			push();
			//fadeIn();
			textSize(40);
			text("that doesn't feel right...", width / 2, height / 3);
			pop();
			break;
		case 3:
			push();
			//fadeIn();
			textSize(int(noise(initialT) * 50 + 20));
			text("still doesn't feel right...", int(noise(initialT) * width), int(noise(initialT) * height));
			pop();
			break;

		case 4:
			push();
			//fadeIn();
			textSize(int(random(60)));
			text("NOT RIGHT", random(width), random(height));
			pop();
			break;

		case 5:
			push();
			//fadeIn();
			textSize(50);
			text("still doesn't feel right", width / 2, height / 3);
			pop();
			break;

		case 6:
			push();
			//fadeIn();
			
			for (var i = 0; i < height + height / 5; i += height / 5) {
				textSize(random(20,120));
				text("NOTHING'S RIGHT", width / 2, i);
				textSize(random(60,180));
				text("nothing's right", width / 2, i);
			}
			textSize(80);
			text("nothing's right", width / 2, height/2);
			text("NOT RIGHT", random(width), random(height));
			pop();
			break;

	}



}