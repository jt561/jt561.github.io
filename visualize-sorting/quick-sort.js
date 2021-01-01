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
	this.direction = sortDirection;
	// start and end index, initialise with initial array
	this.startInd = 0;
	this.endInd = arr.length - 1;
	// auxiliary stack/array
	this.stack = [];
	// push start and end index onto stack
	this.stack.push(this.startInd);
	this.stack.push(this.endInd);

	// actual sort
	this.sort = function()
	{
		// whilst there are elements in the stack
		if (this.stack.length > 0 )
		{
			// set start and end index
			this.endInd = this.stack.pop();
			this.startInd = this.stack.pop();
			// partiiton
			let partiitonInd = this.partition(arr, this.startInd, this.endInd);
			// push left side of pivot to the stack
			if (partiitonInd - 1 > this.startInd)
			{
        this.stack.push(this.startInd);
        this.stack.push(partiitonInd - 1);
      }
			// push right side of pivot to the stack
			if (partiitonInd + 1 < this.endInd)
			{
        this.stack.push(partiitonInd + 1);
        this.stack.push(this.endInd);
      }
			// for visuals
			this.i = partiitonInd;
			this.j = this.endInd;
		}
		// end of outer loop
		else
		{
				this.done = true;
		}
		printArrayAll(arr, this.j, this.i, this.startInd, this.done);
	}

	// partitioning/sorting
	this.partition = function(arr, startInd, endInd)
	{
		// pivot index/partition index
		let pivotInd = startInd;
		let pivotValue = arr[endInd];
		// get all the small elements to the left of pivot index
		for (let i = startInd; i < endInd; i++)
		{
			if (this.direction == "DESC")
			{
				if (arr[i] >= pivotValue)
				{
					// calculate the number of swaps based on the values that have changed
					// update the global swap count - not sure if I should be counting this
					if (arr[i] != arr[pivotInd]) { moreStats['swaps']++; }
					// swap
					let temp = arr[pivotInd];
					arr[pivotInd] = arr[i];
					arr[i] = temp;
					// move pivot index forward
					pivotInd++;
				}
			}
			// ascending as default
			else
			{
				if (arr[i] <= pivotValue)
				{
					// calculate the number of swaps based on the values that have changed
					// update the global swap count - not sure if I should be counting this
					if (arr[i] != arr[pivotInd]) { moreStats['swaps']++; }
					// swap
					let temp = arr[pivotInd];
					arr[pivotInd] = arr[i];
					arr[i] = temp;
					// move pivot index forward
					pivotInd++;
				}
			}
			// update the global comparisons count
			moreStats['comparisons']++;
		}
		// put the pivot value from end to its new position
		// swap
		let temp = arr[endInd];
		arr[endInd] = arr[pivotInd];
		arr[pivotInd] = temp;
		// return pivot index
		return pivotInd;
	}
}
/* End of quick sort algorithm */
