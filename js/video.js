var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});
// set video to the video element var video = document.querySelector("#player1");
let vid = document.querySelector("#player1");
vid.autoplay = false;
vid.loop = false;
vid.load();



function pauseVideo() {
	vid.pause();
	console.log("Pause Video");
}

function playVideo() {
	vid.play();
	vid.volume = document.querySelector("#slider").value / 100;
	console.log("Volume is " + vid.volume);
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = vid.volume * 100 + "%";
}

function slowDown() {
	vid.playbackRate *= 0.90;
	console.log("Current Speed " + vid.playbackRate * 100 + "%");
}

function speedUp() {
	vid.playbackRate /= 0.90;
	console.log("Current Speed " + vid.playbackRate * 100 + "%");
}

function skipAhead() {
	vid.currentTime += 10;
	if (vid.currentTime >= vid.duration) {
		vid.currentTime = 0;
		vid.playbackRate = 1;
		console.log("Current Speed " + vid.playbackRate * 100 + "%");
	}
	console.log("Current location " + vid.currentTime);
}

function mute() {
	if (vid.muted) {
		vid.muted = false;
		console.log("Unmuted");
		document.querySelector("#mute").innerHTML = "Mute";
	} else {
		vid.muted = true;
		console.log("Muted");
		document.querySelector("#mute").innerHTML = "Unmute";
	}
}

function changeVolume() {
	vid.volume = document.querySelector("#slider").value / 100;
	console.log("Volume is " + vid.volume);
	document.querySelector("#volume").innerHTML = vid.volume * 100 + "%";
}

function oldSchool() {
	vid.classList.add("oldSchool");
	console.log("Old School");
}

function original() {
	vid.classList.remove("oldSchool");
	console.log("Original");
}

document.querySelector("#orig").addEventListener("click", original);
document.querySelector("#vintage").addEventListener("click", oldSchool);
document.querySelector("#slider").addEventListener("change", changeVolume);
document.querySelector("#play").addEventListener("click", playVideo);
document.querySelector("#mute").addEventListener("click", mute);
document.querySelector("#skip").addEventListener("click", skipAhead);
document.querySelector("#faster").addEventListener("click", speedUp);
document.querySelector("#slower").addEventListener("click", slowDown);
document.querySelector("#pause").addEventListener("click", pauseVideo);
document.querySelector("#play").addEventListener("click", playVideo);
// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

