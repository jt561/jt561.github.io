/**
 * merge sort algorithm
 */

/* Global variables */

// constructor, takes refrence to original array
var MergeSort = function(arr)
{
	this.i = 0;
	this.j = 0;
	this.done = false;
	this.direction = sortDirection;

	// size of sub array
	this.subArrSize = 1;
	// starting index of sub array
	this.subArrLeftInd = 0;

	// actual sort
	this.sort = function()
	{
		// merge subarrays upawards. start from 1 to size 2, then merge subarrays
		// of size 2 to create sorted subarrays of size 4....
		// we are done when our sub array size is greater than our list size-1
		if (this.subArrSize < arr.length)
		{
			// loop through each index based on [sorted sub]array size
			if (this.subArrLeftInd < arr.length - 1)
			{
				// find midpoint of sub array
				let mid = Math.min(this.subArrLeftInd+this.subArrSize-1, arr.length-1);
				// find end of sub array
				let subArrRightInd = Math.min(this.subArrLeftInd+2*this.subArrSize-1, arr.length-1);
				// sort/merge the array from start index(subArrLeftInd) to end(subArrRightInd)
				this.merge(arr, this.subArrLeftInd, mid, subArrRightInd);
				// for visuals
				this.j = mid;
				this.i = subArrRightInd;
				// after each sub array is evauated, each iteration in the inner loop
				this.subArrLeftInd += 2 * this.subArrSize;
			}
			else
			{
				// end of inner loop, increase outer loop by double the previous size
				this.subArrSize = this.subArrSize * 2;
				// reset inner loop
				this.subArrLeftInd = 0;
			}
		}
		// end of outer loop
		else
		{
				this.done = true;
		}
		printArrayAll(arr, this.subArrLeftInd, this.i, this.j, this.done);
	}

	// merges 2 arrays, then alter the main array with the sorted values
	this.merge = function(origArr, leftInd, midInd, rightInd)
	{
    let leftPtr, rightPtr, resultPtr;
    let leftArrSize = midInd - leftInd + 1;
    let rightArrSize = rightInd - midInd;

    // create left and right temp arrays
    let newLeftArr = [];
    let newRightArr = [];
    // and copy the items for it
    for (leftPtr = 0; leftPtr < leftArrSize; leftPtr++)
		{
			newLeftArr[leftPtr] = origArr[leftInd + leftPtr];
			// update the global auxiliary writes count
			moreStats['auxiliaryWrites']++;
		}
    for (rightPtr = 0; rightPtr < rightArrSize; rightPtr++)
		{
			newRightArr[rightPtr] = origArr[midInd + 1 + rightPtr];
			// update the global auxiliary writes count
			moreStats['auxiliaryWrites']++;
		}

    // put the merged version of left and right array back into original
		// array
    leftPtr = 0;
    rightPtr = 0;
    resultPtr = leftInd;
    while (leftPtr < leftArrSize && rightPtr < rightArrSize)
    {
        if (newLeftArr[leftPtr] <= newRightArr[rightPtr])
        {
						// calculate the number of swaps based on the values that have changed
						// update the global swap count - not sure if I should be counting this
						if (newLeftArr[leftPtr] != origArr[resultPtr]) { moreStats['swaps']++; }
						// insert the smallest value at its correct index
            origArr[resultPtr] = newLeftArr[leftPtr];
            leftPtr++;
        }
        else
        {
						// calculate the number of swaps based on the values that have changed
						// update the global swap count - not sure if I should be counting this
						if (newRightArr[rightPtr] != origArr[resultPtr]) { moreStats['swaps']++; }
						// insert the smallest value at its correct index
            origArr[resultPtr] = newRightArr[rightPtr];
            rightPtr++;
        }
        resultPtr++;
				// update the global comparisons count
				moreStats['comparisons']++;
    }
    // insert left over values from left array into original
    while (leftPtr < leftArrSize)
    {
        origArr[resultPtr] = newLeftArr[leftPtr];
        leftPtr++;
        resultPtr++;
    }
    // insert left over values from right array into original
    while (rightPtr < rightArrSize)
    {
        origArr[resultPtr] = newRightArr[rightPtr];
        rightPtr++;
        resultPtr++;
		}
	}
}
/* End of merge sort algorithm */
