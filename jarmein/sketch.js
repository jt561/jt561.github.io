/**
 * Main board
 */

/* Global variables */

// main rivescript bot
let bot;
// brain with api's
let extBrain;
// turns to false when rivescript object loads rivescript file
let botLoading = true;
// true once bot has been loaded
let botLoaded = false;
// error message if bot couldnt be loaded
let botLoadingError = "";

// loading arcs
let loadingArcs = [];

// random counter
let counter = 0;

// bots voice
let speech;
// bots ears
let ears;
// speech recognition error
let earsError = "";

/* end of global variables */

// loads extra soruces before setup function is called
function preload()
{
	// nothing for now
}

// called once at start
function setup()
{
	// create board/canvas
	// full width viewport
	let canvasWidth = window.screen.width
	// canvas height should be 70% of the device height
	let canvasHeight = window.screen.height *  (70/100);
	createCanvas(canvasWidth, canvasHeight);

	// listener for submit button, this is essentially what kicks the bot to work
	$('#subBtn1').click(function() {
		var input = $('#input1').val();
		if (input === "") { return; }
		// display the command,
		$('#command1').text(input);
		// an interceptor brain will be hear to make api calls
		// and provide the bot with a reponse to say
		extBrain.intercept(input);
		// clear input
		$('#input1').val("");
	});

	// create bot
	bot = new RiveScript();
	// Load a list of rive/brain files
	bot.loadFile([
	  "brain-core/begin.rive",
		"brain-core/jarmein-brain.rive",
		"brain-core/specialreplies.rive",
		"brain-core/weather-api.rive",
		"brain-core/dateTime-api.rive",
		"brain-core/star.rive"
	]).then(loading_done).catch(loading_error);

	// use degrees not radians
	angleMode(DEGREES);
	// create arcs in an array
	for (let i = 0; i < 30; i++)
	{
		let dia = Math.min(width, height) - (i*40);
		dia = constrain(dia, 0, height);
		loadingArcs[i] = new LoadingArc(width/2, height/2, dia, dia, i+1);
	}

	// create the bots voice, async
	speech = new p5.Speech();
	// callback
	speech.onLoad = () => {
		speech.setVoice("Google UK English Male");
		speech.setPitch(0.75);
		speech.setRate(1.2);
		speech.setLang("en-GB");
		speech.setVolume(1);
	}

	// create bots speech recognition object
	/*let lang = navigator.language || "en-GB";
	ears = new p5.SpeechRec(lang, processSpeech);
	// listen continuously (true) or just once (false)
	let continous = true;
	// partial results (true) or wait for the speaker to pause (false)
	let interim = false;
	ears.start(continous, interim);
	ears.onError = (error) => { earsError = error; }*/

	// create extended brain object for api calls
	extBrain = new ExtBrain();
}

// draw loop
function draw()
{
	background("#000");
	// whilst bot is being loaded
	if(botLoading)
	{
		// draw loaidng arcs
		stroke("#ff0");
		loadingArcs.forEach(arc => arc.draw());
		// add loading text
		noStroke();
		fill(255, 255, 255);
		textSize(30);
		textFont('Georgia');
		textAlign(CENTER, CENTER);
		let dots = (counter <= 100) ? "." : (counter < 200) ? ".." : "...";
		counter = (counter >= 300) ? 0 : (counter+1);
		text("Please wait whilst i load"+dots, width/2, height/2);
	}
	else
	{
		// once loading is done, check whether the bot was actually loaded or not
		if (!botLoaded)
		{
			// draw loaidng arcs
			stroke("#f00");
			loadingArcs.forEach(arc => arc.draw());
			// add loading failed text
			noStroke();
			fill(255, 255, 255);
			textSize(30);
			textFont('Georgia');
			textAlign(CENTER, CENTER);
			text("Sorry I was unable to load", width/2, height/2);
			text("Please refresh the page", width/2, height/2 + 30);
		}
		else
		{
			// draw loaidng arcs
			stroke("#0f0");
			loadingArcs.forEach(arc => arc.draw());
			// add loading success text
			noStroke();
			fill(255, 255, 255);
			textSize(20);
			textFont('Georgia');
			textAlign(CENTER, CENTER);
			// place it at 10% away from the top of the canvas
			text("Say 'Jarmein', to speak to me", width/2, 0+(height*(10/100)));
		}
	}
}

// keyboard listener
function keyPressed() {
    switch(keyCode)
    {
			// click the submit button, when enter is clicked
      case ENTER: $('#subBtn1').click(); break;
    }
}

// on ready callback for ricescript object, loadFile function,
// when all rive files/brain is ready
function loading_done()
{
	// always sort bots replies!
  bot.sortReplies();
  botLoading = false;
	botLoaded = true;
}

// load error callback for ricescript object, loadFile function, when loading
// brain runs into an error,
function loading_error(error, filename, lineno)
{
	botLoading = false;
	botLoaded = false;
  botLoadingError = "Error when loading files: " + error + "Details: " + filename + ", " + lineno;
}

/* End of main board */
