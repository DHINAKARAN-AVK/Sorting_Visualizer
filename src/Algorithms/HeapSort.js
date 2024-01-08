// HeapSort.js
export function heapSort(array) {
  const animations = [];

  // Build the max heap
  const buildMaxHeap = () => {
    const n = array.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(n, i);
    }
  };

  // Heapify a subtree rooted with node i
  const heapify = (n, i) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && array[left] > array[largest]) {
      largest = left;
    }

    if (right < n && array[right] > array[largest]) {
      largest = right;
    }

    if (largest !== i) {
      // Push animations for comparison and swapping
      animations.push([i, largest, false]); // Comparison
      animations.push([i, largest, true]);  // Swapping
      [array[i], array[largest]] = [array[largest], array[i]];
      heapify(n, largest);
    }
  };

  // Perform Heap Sort
  buildMaxHeap();
  for (let i = array.length - 1; i > 0; i--) {
    // Swap root (max element) with the last element
    animations.push([0, i, true]);
    [array[0], array[i]] = [array[i], array[0]];

    // Heapify the reduced heap
    heapify(i, 0);
  }

  return animations;
}
