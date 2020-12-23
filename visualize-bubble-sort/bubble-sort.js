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

	// print a the array
	this.printArrayB = function(arr,scl)
	{
		fill(255, 0, 0);
		stroke(255, 255, 255);
		for (let k = 0; k < arr.length; k++)
		{
			rect(k*scl, height, scl, arr[k]/1);
		}
	}

	// actual sort
	this.sort = function()
	{
		// whilst theres element to sort
		if (this.i < arr.length - 1)
		{
			// check if we are done with the current iteration
			if (this.j == arr.length-1-this.i)
			{
				this.j = 0;
				this.i++;
			}
			// during one iteration, swap the largest element to the back
			if (arr[this.j] > arr[this.j+1])
			{
				//swap
				let temp = arr[this.j];
				arr[this.j] = arr[this.j+1];
				arr[this.j+1] = temp;
			}
			// move on to the next element
			this.j++;
		}
		else
		{
				this.done = true;
		}
		printArrayAll(arr, this.j, this.j+1, this.done);
	}
}
/* End of bubble sort algorithm */
