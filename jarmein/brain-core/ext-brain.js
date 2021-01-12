/**
 * Extended brain class
 */

/* Global variables */

// constructor
let ExtBrain = function()
{

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
	console.log(words);
	//console.log(ears.resultString);
	// speech recognised
	// if (ears.resultValue)
	// {
	// 	console.log(ears.resultString);
	// 	// speech starts with jarmein
	// 	if (ears.resultString.startsWith("Jarmein"))
	// 	{
	// 		// put the string in the input text box and submit it(send it to the bot)
	// 		$('#input1').val(ears.resultString);
	// 		$('#subBtn1').click();
	// 	}
	// }
}

/* end of helper functions */
