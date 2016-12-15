const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} greater than ${el2}? Enter 'yes' or 'no' `, res => {
    res === 'yes' ? callback(true) : callback(false);
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  console.log(arr);

  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i+1], isGreaterThan => {
      if (isGreaterThan) {
        console.log("Making swap");
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        madeAnySwaps = true;
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      }

      else {
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      }
    });
  }

  else if (i === (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps);
  }
  // reader.close();
}

function absurdBubbleSort(arr, sortCompletionCallback) {

  function outerBubbleSortLoop(madeAnySwaps) {
    console.log(`madeAnySwaps outside if/else: ${madeAnySwaps}`);
    if (madeAnySwaps) {
      console.log(`madeAnySwaps in if: ${madeAnySwaps}`);
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    else if (!madeAnySwaps) {
      console.log(`madeAnySwaps in else: ${madeAnySwaps}`);
      sortCompletionCallback(arr);
    }
  }

  outerBubbleSortLoop(true);

}



absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
