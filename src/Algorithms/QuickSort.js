// quickSort.js

export function quickSort(array) {
    const animations = [];
    const sortedArray = array.slice();
    quickSortHelper(sortedArray, 0, sortedArray.length - 1, animations);
    return animations;
  }
  
  function quickSortHelper(array, low, high, animations) {
    if (low < high) {
      const pivotIdx = partition(array, low, high, animations);
      quickSortHelper(array, low, pivotIdx - 1, animations);
      quickSortHelper(array, pivotIdx + 1, high, animations);
    }
  }
  
  function partition(array, low, high, animations) {
    const pivot = array[high];
    let i = low - 1;
  
    for (let j = low; j < high; j++) {
      animations.push([j, high, false]);
      if (array[j] < pivot) {
        i++;
        animations.push([i, j, true]);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  
    animations.push([i + 1, high, true]);
    const temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;
  
    return i + 1;
  }
  