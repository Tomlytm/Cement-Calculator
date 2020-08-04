const lgt = document.querySelector('.length');
const brt = document.querySelector('.breadth');
const dpt = document.querySelector('.depth');
const btn = document.querySelector('.btn');
const screen = document.querySelector('.screen');


btn.addEventListener('click', function displayBags () {
	if (!isNaN(lgt.value) && !isNaN(brt.value) && !isNaN(dpt.value)) {
	let wetVol = lgt.value * brt.value * dpt.value;
	//convert to dry volume
	let dryVol = wetVol * 1.54;
	//calculate volume of cement from ratio 1:2:4
	let cemVol = 0.143 * dryVol;
	//convert to cement bags
	let cemBags =Math.ceil(cemVol/2.5)
	screen.innerHTML = cemBags + " Bags";
} else {
	screen.innerHTML = 'please Input numbers only'
	//set color to orange
	screen.style.color = 'orange' 	}

	
})