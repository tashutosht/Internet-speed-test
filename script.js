function startTest() {
	// code to start the internet speed test
	let speed = Math.floor(Math.random()*101);
	let needle = document.getElementById("needle");
	let speedText = document.getElementById("speed");
	
	// animate the needle to show the speed
	needle.style.transform = `translate(-50%, -50%) rotate(${speed * 1.8}deg)`;

	// update the speed text
	speedText.innerHTML = speed;

	// disable the start button
	document.getElementById("start-button").disabled = true;
}
