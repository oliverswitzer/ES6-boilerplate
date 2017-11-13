var WaveformPlaylist = require('waveform-playlist');
var $ = require("jquery")

var playlist = WaveformPlaylist.init({
	samplesPerPixel: 3000,
	mono: true,
	waveHeight: 70,
	container: document.getElementById('playlist'),
	state: 'cursor',
	colors: {
		waveOutlineColor: '#E0EFF1',
		timeColor: 'grey',
		fadeColor: 'black'
	},
	controls: {
		show: true,
		width: 400
	},
	zoomLevels: [500, 1000, 3000, 5000]
});

playlist.load([
{
	src: 'assets/media/Heavy.mp3',
	name: 'Vocals',
	gain: 0.5,
}
]).then(function() {
  // can do stuff with the playlist.
});

var ee = playlist.getEventEmitter();
var $container = $("body");

$container.on("click", ".btn-play", function() {
	console.log("YOYO")
	ee.emit("play");
});
