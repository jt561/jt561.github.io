/**
 * bubble sort algorithm
 */

/* Global variables */

// constructor, takes refrence to original array
var BubbleSort = function(arr)
{
	this.i = 0;
	this.j = 0;
	this.done = false;
	this.swaps = 0;
	this.direction = sortDirection;

	// actual sort
	this.sort = function()
	{
		// whilst theres element to sort
		if (this.i < arr.length - 1)
		{
			if (this.j < arr.length - 1 - this.i)
			{
				// current element index and next element index
				let c = this.j;
				let n = this.j+1;
				let left = parseInt(arr[c]);
				let right = parseInt(arr[n]);

				// move smallest to the left for descending order
				if (this.direction == "DESC")
				{
					if (left < right)
					{
						//swap
						let temp = arr[c];
						arr[c] = arr[n];
						arr[n] = temp;
						this.swaps++;
						// update the global swap count
						moreStats['swaps']++;
					}
				}
				// ascending order as default
				else {
					if (left > right)
					{
						//swap
						let temp = arr[c];
						arr[c] = arr[n];
						arr[n] = temp;
						this.swaps++;
						// update the global swap count
						moreStats['swaps']++;
					}
				}
				// update the global comparisons count
				moreStats['comparisons']++;
				// move to next element
				this.j++;
			}
			else
			{
				// if we are done with one inner iteration
				this.j = 0;
				this.i++;
				// if no swaps were made, array is sorted
				if (this.swaps <= 0) this.i = arr.length;
				this.swaps = 0;
			}
		}
		// if array is "sorted" after all iteration
		else
		{
				this.done = true;
		}
		printArrayAll(arr, this.j, this.j+1, this.j+1, this.done);
	}
}
/* End of bubble sort algorithm */
