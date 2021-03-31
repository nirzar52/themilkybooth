let width = 800,
	height = 0,
	streaming = false,
	video = null,
	canvasPhoto = null,
	startButton = null,
	startMixingButton = null,
	lips = null,
	glasses = null,
	horns = null,
	downloadButton = null,
	returnButton = null,
	cameraContentarea = null,
	canvasMixArea = null,
	canvas = null,
	photo = null,
	tempContext;

function startUp() {
	cameraContentarea = document.querySelector("#cameraContentarea");
	canvasMixArea = document.querySelector("#canvasMixArea");
	cameraContentarea.style.display = "block";
	canvasMixArea.style.display = "none";

	video = document.querySelector("#video");
	canvasPhoto = document.querySelector("#canvasPhoto");
	photo = document.querySelector("#photo");
	startButton = document.querySelector("#startButton");
	lips = document.querySelector("#lips");
	glasses = document.querySelector("#glasses");
	horns = document.querySelector("#horns");
	downloadButton = document.querySelector("#downloadButton");
	returnButton = document.querySelector("#returnButton");
	startMixingButton = document.querySelector("#startMixingButton");
	canvas = new fabric.Canvas('c');

	startButton.addEventListener("click", takePicture);
	startMixingButton.addEventListener("click", startMixingFunction);
	downloadButton.addEventListener("click", saveImage);
	returnButton.addEventListener("click", returnFunction);
	lips.addEventListener("click", placeImage);
	glasses.addEventListener("click", placeImage);
	horns.addEventListener("click", placeImage);
	video.addEventListener("click", () => {
		video.play()
	});

	navigator.mediaDevices.getUserMedia({
		video: true,
		audio: false
	}).then((stream) => {
		video.srcObject = stream;
		video.play();
	}).catch((err) => {
		console.error(`Erh!!! ${err}`);
	});

	video.addEventListener("canplay", (e) => {

		if (!streaming) {
			height = video.videoHeight / (video.videoWidth / width);

			// vh/h = vw/w
			// h = vh/(vw / w)

			if (isNaN(height)) {
				height = width / (4 / 3);
			}

			video.setAttribute("width", width);
			video.setAttribute("height", height);
			canvasPhoto.setAttribute("width", width);
			canvasPhoto.setAttribute("height", height);

			streaming = true;
		}
	});

	clearPhoto();

} // end startUp

function clearPhoto() {
	tempContext = canvasPhoto.getContext('2d');

	// tempContext.fillStyle = "#ff0000"
	tempContext.fillRect(0, 0, canvasPhoto.width, canvasPhoto.height);
	let data = canvasPhoto.toDataURL('image/png');
	photo.setAttribute('src', data);
} //end clearPhoto

function takePicture() {
	tempContext = canvasPhoto.getContext('2d');
	if (width && height) {
		canvasPhoto.width = width;
		canvasPhoto.height = height;
		tempContext.drawImage(video, 0, 0, width, height);

		let data = canvasPhoto.toDataURL('image/png');
		photo.setAttribute('src', data);
	} else {
		clearPhoto();
	}
} // end takePicture


// ! end camara
/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////



form page
confirmation box
legal page
booth page



function startMixingFunction() {
	cameraContentarea.style.display = "none";
	cameraContentarea.style.display = "none";
	canvasMixArea.style.display = "block";

	let webcamPicture = document.querySelector("#photo"),
		webcamPictureSrc = webcamPicture.getAttribute('src');
	fabric.Image.fromURL(webcamPictureSrc, (wImg) => {
		wImg.set({
			left: 0,
			top: 0
		});
		canvas.add(wImg)
	});

	// fabric.Image.fromURL('image/kitten.jpg', (kImg) => {
	// 	kImg.set({
	// 		left: Math.random() * 600 + 100,
	// 		top: Math.random() * 400 + 100
	// 	});
	// 	canvas.add(kImg);
	// });

} // end startMixingFunction

function saveImage(e) {

	let today = new Date(),
		ss = today.getSeconds(),
		mn = today.getMinutes(),
		hh = today.getHours(),
		dd = today.getDate(),
		months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		mm = months[today.getMonth()],
		yyyy = today.getFullYear(),
		time = `${mm}-${dd}-${yyyy}-${hh}-${mn}-${ss}`;

	e.target.download = `-${time}.png`;
	e.target.href = canvas.toDataURL('image/png');
} // end saveImage

function returnFunction() {
	cameraContentarea.style.display = "block";
	canvasMixArea.style.display = "none";
	canvas.clear();
	clearPhoto();
} // end returnFunction

function placeImage(e) {
	console.log(e.currentTarget.getAttribute('src'));
	let newImg = e.currentTarget.getAttribute('src');
	fabric.Image.fromURL(newImg, (nImg) => {
		let newX = canvas.width / 2 - nImg.width / 2;
		let newY = canvas.height / 2 - nImg.height / 2;
		nImg.set({
			left: newX,
			top: newY,
		})
		canvas.add(nImg);
	});
} // end placeImage

document.addEventListener("DOMContentLoaded", startUp);