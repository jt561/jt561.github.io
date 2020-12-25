/**
 * selection sort algorithm
 */

/* Global variables */

var SelectionSort = function(scl, arr)
{
	this.scl = scl;
	this.i = 0;
	this.j = 0;
	this.currentMinIndex = this.i;
	this.currentMinValue = arr[this.i];
	this.done = false;
	this.alreadySorted = 0;

	// actual sort
	this.sort = function()
	{
		// whilst theres still elements to iterate over
		if (this.i < arr.length)
		{
			if (this.j < arr.length)
			{
				if (parseInt(arr[this.j]) < this.currentMinValue)
				{
					this.currentMinIndex = this.j;
					this.currentMinValue = arr[this.j];
				}
				if (parseInt(arr[this.j]) <= parseInt(arr[this.j+1]))
				{
					this.alreadySorted++;
				}
				this.j++;
			}
			else
			{
				if (this.currentMinValue < parseInt(arr[this.i]))
				{
					// swap
					let temp = arr[this.i];
					arr[this.i] = this.currentMinValue;
					arr[this.currentMinIndex] = temp;
				}
				// start of outer loop
				this.i++;
				this.j = this.i;
				// set min index and val to i
				this.currentMinIndex = this.i;
				this.currentMinValue = arr[this.i];
				// exit if there were no swaps in an iteration
				if (this.alreadySorted >= arr.length - this.i) this.i = arr.length;
				this.alreadySorted = 0;
			}
		}
		// if array is "sorted" after all iteration
		else
		{
				this.done = true;
		}
		printArrayAll(arr, this.i, this.j, this.done);
	}
}
/* End of selection sort algorithm */
