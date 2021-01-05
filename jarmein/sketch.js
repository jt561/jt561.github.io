/**
 * Main board
 */

/* Global variables */

// main rivescript bot
let bot;
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

// loads extra soruces before setup function is called
function preload()
{

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

	// sumbit button for text input form
	$('#btn1').click(function() {
		var input = $('#input1').val();
		getResponse("User1", input);
	});

	// create bot
	bot = new RiveScript();
	// Load a list of rive/brain files
	bot.loadFile([
	  "brain-core/jarmein-brain.rive"
	]).then(loading_done).catch(loading_error);

	// use degrees not radians
	angleMode(DEGREES);
	// create arcs in an array
	for (let i = 0; i < 40; i++)
	{
		let dia = Math.min(width, height) - (i*40);
		dia = constrain(dia, 0, 10000);
		loadingArcs[i] = new LoadingArc(width/2, height/2, dia, dia, i);
	}
}

// draw loop
function draw()
{
	background("#000");
	// whilst bot is being loaded
	if(botLoading)
	{
		stroke("#ff0");
		loadingArcs.forEach(arc => arc.draw());
		noStroke();
		fill(255, 255, 255);
		textSize(30);
		textFont('Georgia');
		textAlign(CENTER, CENTER);
		let dots = (counter >= 3000) ? "..." : (counter >= 2000) ? ".." : ".";
		counter = (counter >= 4000) ? 0 : (counter+1);
		text("Please wait whilst i load"+dots, width/2, height/2);
	}
	else
	{
		// once loading is done, check whether the bot was actualy loaded or not
		if (!botLoaded)
		{
			stroke("#f00");
			loadingArcs.forEach(arc => arc.draw());
		}
		else
		{
			stroke("#0f0");
			loadingArcs.forEach(arc => arc.draw());
		}
	}
}

// returns bots response based on given input
function getResponse(username, input)
{
	// API v2.0.0 returns a Promise.
	bot.reply(username, input)
	.then(function(reply) {
		$('#p1').text(reply);
  })
	.catch(function(error){
		// to do, when promise is rejected
	});
}

// on ready callback for ricescript object, loadFile function,
// when all rive files/brain is ready
function loading_done()
{
	// always sort replies!
  bot.sortReplies();
  //botLoading = false;
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
