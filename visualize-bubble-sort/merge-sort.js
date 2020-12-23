/**
 * merge sort algorithm
 */

/* Global variables */

var MergeSort = function(scl, arr)
{
	this.scl = scl;
	this.i = 0;
	this.j = 0;
	this.done = false;

	// actual sort
	this.sort = function()
	{
		printArrayAll(arr, this.j, this.j+1, this.done);
	}
}
/* End of merge sort algorithm */
