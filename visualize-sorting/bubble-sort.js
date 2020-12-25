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

	// print a the array
	/*this.printArrayB = function(arr,scl)
	{
		fill(255, 0, 0);
		stroke(255, 255, 255);
		for (let k = 0; k < arr.length; k++)
		{
			rect(k*scl, height, scl, arr[k]/1);
		}
	}*/

	// actual sort
	this.sort = function()
	{
		// whilst theres element to sort
		if (this.i < arr.length - 1)
		{
			if (this.j < arr.length - 1 - this.i)
			{
				let c = this.j;
				let n = this.j+1;
				let left = parseInt(arr[c]);
				let right = parseInt(arr[n]);
				//console.log(`${arr[c]}>${arr[n]} = ${(arr[c]>arr[n])}`);
				if (left > right)
				{
					//swap
					let temp = arr[c];
					arr[c] = arr[n];
					arr[n] = temp;
					this.swaps++;
				}
				this.j++;
			}
			else
			{
				this.j = 0;
				this.i++;
				if (this.swaps <= 0) this.i = values.length;
				this.swaps = 0;
			}
		}
		else
		{
				this.done = true;
		}
		printArrayAll(arr, this.j, this.j+1, this.done);
	}
}
/* End of bubble sort algorithm */
