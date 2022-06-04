import config from "./config";

export default function heapSort(numArr) {
  const animations = getHeapSortAnimations(numArr);
  for (let i = 0; i < animations.length; i++) {
    var arrayBars = document.getElementsByClassName("DisplayBars_bar__BuTCR");
    const isColorChange = i % 4 !== 3 && i % 4 !== 2;
    if (isColorChange) {
      const [firstBar, secondBar] = animations[i];
      const barOneStyle = arrayBars[firstBar].style;
      const barTwoStyle = arrayBars[secondBar].style;
      const color = i % 4 === 0 ? config.FIRSTCOLOR : config.SECONDCOLOR;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * config.TIME);
    } else {
      setTimeout(() => {
        const [firstBar, newHeight] = animations[i];
        const barOneStyle = arrayBars[firstBar].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * config.TIME);
    }
  }
}

function getHeapSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  heapSortHelper(array, animations);
  return animations;
}

function heapSortHelper(arr, animations) {
  var n = arr.length;
  // Build heap (rearrange array)
  for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
    heapify(arr, n, i, animations);

  // One by one extract an element from heap
  for (var i = n - 1; i > 0; i--) {
    // Move current root to end
    var temp = arr[0];
    animations.push([0, i]);
    animations.push([0, i]);

    animations.push([0, arr[i]]);
    arr[0] = arr[i];

    animations.push([i, temp]);
    arr[i] = temp;

    // call max heapify on the reduced heap
    heapify(arr, i, 0, animations);
  }
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapify(arr, n, i, animations) {
  var largest = i; // Initialize largest as root
  var l = 2 * i + 1; // left = 2*i + 1
  var r = 2 * i + 2; // right = 2*i + 2

  // If left child is larger than root
  if (l < n && arr[l] > arr[largest]) largest = l;

  // If right child is larger than largest so far
  if (r < n && arr[r] > arr[largest]) largest = r;

  // If largest is not root
  if (largest != i) {
    var swap = arr[i];

    animations.push([i, largest]);
    animations.push([i, largest]);

    animations.push([i, arr[largest]]);
    arr[i] = arr[largest];

    animations.push([largest, swap]);
    arr[largest] = swap;

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest, animations);
  }
}
