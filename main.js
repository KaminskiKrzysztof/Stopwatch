// downloads
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');

const infoBtn = document.querySelector('.fa-question');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');

const colorBtn = document.querySelector('.fa-paint-brush');
const colorPanel = document.querySelector('.colors');
const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');
const colorFour = document.querySelector('.four');
const colorFive = document.querySelector('.five');
const colorSix = document.querySelector('.six');

let root = document.documentElement;

// functions

let countTime;

let minutes = 0;
let seconds = 0;
let timesArr = [];

const handleStart = (params) => {
	clearInterval(countTime);

	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++;
			stopwatch.textContent = `${minutes}:0${seconds}`;
		} else if (seconds >= 9 && seconds < 59) {
			seconds++;
			stopwatch.textContent = `${minutes}:${seconds}`;
		} else {
			minutes++;
			seconds = 0;
			stopwatch.textContent = `${minutes}:00`;
		}
	}, 1000);
};

// ----------

const handlePause = () => {
	clearInterval(countTime);
};

// ----------

const handleStop = () => {
	time.innerHTML = `Last survey: ${stopwatch.textContent}`;

	if (stopwatch.textContent !== '0:00') {
		time.style.visibility = 'visible';
		timesArr.push(stopwatch.textContent);
	}

	clearStuff();
};

//  ----------

const handleReset = () => {
	time.style.visibility = 'hidden';
	timesArr = [];
	clearStuff();
};

const clearStuff = () => {
	clearInterval(countTime);
	stopwatch.textContent = '0:00';
	timeList.textContent = '';
	seconds = 0;
	minutes = 0;
};

const showHistory = () => {
	timeList.textContent = '';
	let num = 1;

	timesArr.forEach((time) => {
		const newTime = document.createElement('li');

		newTime.innerHTML = `Survey no. ${num}: <span>${time}</span>`;

		timeList.appendChild(newTime);
		num++;
	});
};

const showModal = () => {
	if (!(modalShadow.style.display === 'block')) {
		modalShadow.style.display = 'block';
	} else {
		modalShadow.style.display = 'none';
	}

	modalShadow.classList.toggle('modal-animation');
};

// addEventListener
startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
historyBtn.addEventListener('click', showHistory);

infoBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', showModal);
window.addEventListener('click', (e) =>
	e.target === modalShadow ? showModal() : false
);

colorBtn.addEventListener('click', () => {
	colorPanel.classList.toggle('show-colors');
});

colorOne.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(250,20,6');
	root.style.setProperty('--hover-color', 'rgb(209,33,24');
});

colorTwo.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(6,173,250');
	root.style.setProperty('--hover-color', 'rgb(28,145,199');
});

colorThree.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(0,255,42');
	root.style.setProperty('--hover-color', 'rgb(28,209,58');
});

colorFour.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(204, 255, 255)');
	root.style.setProperty('--hover-color', 'rgb(0, 204, 204)');
});

colorFive.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(255, 51, 255)');
	root.style.setProperty('--hover-color', 'rgb(255, 102, 255)');
});

colorSix.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(0, 153, 0)');
	root.style.setProperty('--hover-color', 'rgb(0, 230, 0)');
});
