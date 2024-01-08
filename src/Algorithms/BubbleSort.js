// BubbleSort.js

export function bubbleSort(array) {
  const animations = [];

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      animations.push([j, j + 1, true]); // Highlight bars being compared

      if (array[j] > array[j + 1]) {
        // Swap if needed
        animations.push([j, j + 1, false]);
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      } else {
        // No swap, unhighlight bars
        animations.push([j, j + 1, true]);
      }
    }
    // Mark the largest element as sorted
    animations.push([array.length - i - 1, array.length - i - 1, false]);
  }

  // Mark the first element as sorted
  animations.push([0, 0, false]);

  return animations;
}
