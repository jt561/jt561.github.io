/**
 * bubble sort algorithm
 */

/* Global variables */

var BubbleSort = function(scl, arr)
{
	this.scl = scl;
	this.i = 0;
	this.j = 0;
	this.done = false;
	this.swaps = 0;

	// actual sort
	this.sort = function()
	{
		// whilst theres element to sort
		if (this.i < arr.length - 1)
		{
			if (this.j < arr.length - 1 - this.i)
			{
				// current element and next element
				let c = this.j;
				let n = this.j+1;
				let left = parseInt(arr[c]);
				let right = parseInt(arr[n]);

				if (left > right)
				{
					//swap
					let temp = arr[c];
					arr[c] = arr[n];
					arr[n] = temp;
					this.swaps++;
				}
				// move to next element
				this.j++;
			}
			else
			{
				// if we are done with one inner iteration
				this.j = 0;
				this.i++;
				// if no swaps were made, array is sorted
				if (this.swaps <= 0) this.i = values.length;
				this.swaps = 0;
			}
		}
		// if array is "sorted" after al iteration
		else
		{
				this.done = true;
		}
		printArrayAll(arr, this.j, this.j+1, this.done);
	}
}
/* End of bubble sort algorithm */
