export function startAuroraAnimation() {

var filter = document.querySelector("#turbulence");
	var frames = 0;
	var rad = Math.PI / 480;

	function freqAnimation() {
	var bfx = 0.005;
	var bfy = 0.005;
	frames += .5
	bfx += 0.0025 * Math.cos(frames * rad);
	bfy += 0.0025 * Math.sin(frames * rad);

	var bf = bfx.toString() + ' ' + bfy.toString();
	filter.setAttributeNS(null, 'baseFrequency', bf);
	window.requestAnimationFrame(freqAnimation);
	}

	window.requestAnimationFrame(freqAnimation);
}