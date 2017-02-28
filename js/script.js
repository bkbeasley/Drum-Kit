window.addEventListener("keydown", function(e) {
	/* Get the current key being pressed as well as the corresponding
	   element
	*/
	var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 


	if(!audio)   //Exit the function if an invalid key is pressed
		return;

	audio.currentTime = 0; //Rewind the audio to the start on each key press

	audio.play(); //Play the audio



});