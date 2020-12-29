/**
 * quick sort algorithm
 */

/* Global variables */

// constructor, takes refrence to original array
var QuickSort = function(arr)
{
	this.i = 0;
	this.j = 0;
	this.done = false;

	// actual sort
	this.sort = function()
	{
		printArrayAll(arr, this.j, this.j+1, this.j, this.done);
	}
}
/* End of quick sort algorithm */
