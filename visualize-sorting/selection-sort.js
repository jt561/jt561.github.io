/**
 * selection sort algorithm
 */

/* Global variables */

// constructor, takes refrence to original array
var SelectionSort = function(arr)
{
	this.i = 0;
	this.j = 0;
	this.currentMinIndex = this.i;
	this.currentMinValue = arr[this.i];
	this.done = false;
	this.alreadySorted = 0;
	this.direction = sortDirection;

	// actual sort
	this.sort = function()
	{
		// whilst theres still elements to iterate over
		if (this.i < arr.length)
		{
			// if we havent reach the last value
			if (this.j < arr.length)
			{
				if (this.direction == "DESC")
				{
					// find the largest value in the list after an iteration
					if (parseInt(arr[this.j]) > this.currentMinValue)
					{
						this.currentMinIndex = this.j;
						this.currentMinValue = arr[this.j];
					}
					// check how many items are already sorted whilst iterating
					if (parseInt(arr[this.j]) >= parseInt(arr[this.j+1]))
					{
						this.alreadySorted++;
					}
				}
				// ascending as default
				else
				{
					// find the smallest value in the list after an iteration
					if (parseInt(arr[this.j]) < this.currentMinValue)
					{
						this.currentMinIndex = this.j;
						this.currentMinValue = arr[this.j];
					}
					// check how many items are already sorted whilst iterating
					if (parseInt(arr[this.j]) <= parseInt(arr[this.j+1]))
					{
						this.alreadySorted++;
					}
				}
				// update the global comparisons count
				moreStats['comparisons']++;
				// next value
				this.j++;
			}
			else
			{
				if (this.direction == "DESC")
				{
					// if theres a value larger than our current i, put it in place
					// of current i
					if (this.currentMinValue > parseInt(arr[this.i]))
					{
						// swap
						let temp = arr[this.i];
						arr[this.i] = this.currentMinValue;
						arr[this.currentMinIndex] = temp;
						// update the global swap count
						moreStats['swaps']++;
					}
				}
				// ascending order is defaults
				else
				{
					// if theres a value smaller than our current i, put it in place
					// of current i
					if (this.currentMinValue < parseInt(arr[this.i]))
					{
						// swap
						let temp = arr[this.i];
						arr[this.i] = this.currentMinValue;
						arr[this.currentMinIndex] = temp;
						// update the global swap count
						moreStats['swaps']++;
					}
				}
				// start of outer loop
				this.i++;
				this.j = this.i;
				// set min index and val to i
				this.currentMinIndex = this.i;
				this.currentMinValue = arr[this.i];
				// exit if there were no swaps in an iteration
				if (this.alreadySorted >= arr.length - this.i) this.i = arr.length;
				// reset swap count for next iteration
				this.alreadySorted = 0;
			}
		}
		// if array is "sorted" after all iteration
		else
		{
				this.done = true;
		}
		printArrayAll(arr, this.i, this.j, this.currentMinIndex, this.done);
	}
}
/* End of selection sort algorithm */
