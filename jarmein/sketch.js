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
}

// draw loop
function draw()
{
	// whilst bot is being loaded
	if(botLoading)
	{
		background("#000");
		stroke("#fff");
		fill("pink");
		ellipse(width/2, height/2, 55, 55);
	}
	else
	{
		// once loading is done, check whether the bot was actualy loaded or not
		if (!botLoaded)
		{

		}
		else
		{

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
  //botLoading = false; // remove comment after testing
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
