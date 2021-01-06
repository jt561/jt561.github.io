/**
 * Extended brain class
 */

/* Global variables */

// constructor
let ExtBrain = function()
{
	this.intercept = function(input)
	{
		// remove any special phrases we use from it
		input = sanitizeSpecial(input);
		// get response from bot
		getResponse("User1", input);
	}
}

/* End of Extended brain class */
