/**
 * Extended brain class
 */

/* Global variables */

// constructor
let ExtBrain = function()
{
	// array of api's and their information
	this.apis = [
			{ name: "weather" },
			{ name: "time" }
	];

	this.intercept = function(input)
	{
		// checks to see if the input string contains any of our api objects name
		if (input.split(" ").some(word => { let r; this.apis.forEach(obj => { if (obj.name === word) { r = true; } } ); return r; }))
		{
			//console.log("test");
		}
		// if the input includes specific keywords, perform api calls for them,
		// else just get the rive bot to reply with preprogrammed answers
		// I am guessing apis-dont-work-on-static-servers-so-ignore-this-and-return-false
		if (input.toLowerCase().includes("weather"))
		{
			// default weather location is london for now
			let location = `london`;
			// please dont abuse the api key
			let apiKey = "6760c147ee8ca243ceefb10a4edc8b22";
			let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
			loadJSON(apiUrl, processData);
			function processData(data)
			{
				let temp = data.main.temp;
				// turn the decimal point into the actual word
				temp = temp.toString().split(".").join(" Point ");
				let output = `specialrepeat111 The weather in London is currently ${temp} degrees endspecialrepeat111`;
				getResponse("User1", output);
			}
		}
		// generic responses without api calls
		else
		{
			// get response from bot
			getResponse("User1", input);
		}
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
		$('#response1').text(sanitizeSpecial(reply));
		speech.speak(sanitizeSpokenSpecial(reply));
  })
	.catch(function(error){
		// to do, when promise is rejected
	});
}

// removes any special words from the response before it is displayed
function sanitizeSpecial(input)
{
	return  input.replace("specialrepeat111", "")
		.replace("endspecialrepeat111", "")
		.replace(" Point ", ".");
}

// removes any special words from the response before it is spoken
function sanitizeSpokenSpecial(input)
{
	return input.replace(" Point ", ".");
}

/* end of helper functions */
