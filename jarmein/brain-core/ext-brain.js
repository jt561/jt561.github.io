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
		// if the input includes specific keywords, perform api calls for them,
		// else just get the rive bot to reply with preprogrammed answers
		if (input.toLowerCase().includes("weather"))
		{
			// default weather location is london for now
			let location = `london`;
			// please dont abuse the api key
			let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=b284f130b1df78a6656b23e11c867e2b`;
			loadJSON(apiUrl, processData);
			function processData(data)
			{
				let temp = data.main.temp;
				// turn the decimal point into the actual word
				temp = temp.toString().split(".").join(" point ");
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
