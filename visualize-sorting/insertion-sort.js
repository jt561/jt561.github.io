/**
 * insertion sort algorithm
 */

/* Global variables */

var InsertionSort = function(scl, arr)
{
	this.scl = scl;
	this.i = 1;
	this.j = 0;
	this.key = arr[this.i];
	this.done = false;

	// actual sort
	this.sort = function()
	{
		// loop to end of list
		if (this.i < arr.length)
		{

			// if current element needs to keep going down
			if (this.j >= 0 && this.key < arr[this.j])
			{
				// swap
				let temp = arr[this.j];
				arr[this.j] = arr[this.j+1];
				arr[this.j+1] = temp;
				this.j--
			}
			else
			{
				// next item
				this.i++;
				// key is current index value
				this.key = arr[this.i];
				// start going down from the current index
				this.j = this.i - 1;
			}
		}
		// end of outer loop
		else
		{
				this.done = true;
		}
		printArrayAll(arr, this.j+1, this.i, this.j, this.done);
	}
}
/* End of insertion sort algorithm */
