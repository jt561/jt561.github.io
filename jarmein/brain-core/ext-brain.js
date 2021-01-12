/**
 * Extended brain class
 */

/* Global variables */

// brain/ears hasnt met users
let met = false;

// constructor
let ExtBrain = function()
{
	this.met = false;

	this.intercept = function(input)
	{
			// get response(text/speech) from bot
			getResponse("user-1", input.toLowerCase());
	}
}

/* End of Extended brain class */

/* helper functions */

// returns bots response based on given input
function getResponse(username, input)
{
	// API v2.0.0 returns a Promise.
	bot.reply(username, input)
		.then(function(reply) {
			// display the respose and then speak it
			$('#response1').text(reply);
			speech.speak(reply);
	  })
		.catch(function(error){
			// to do, when promise is rejected
		});
}

// processes the speech received from the bots ears(speech object)
function processSpeech(words)
{
	// let nameAliases = ["Jarmein", "Jarmaine", "Jermaine", "Garmain", "Germain"];
	// if (nameAliases.includes(words.split(" ")[0]))
	// {
	// 	let commands = words.split(" ");
	// 	commands.shift();
	// 	commands = commands.join(" ");
	// 	$('#input1').val(commands);
	// 	$('#subBtn1').click();
	// }
	if(!met)
	{
		$('#input1').val(words);
		$('#subBtn1').click();
	}
}

/* end of helper functions */
