import config from "./config";

export default function radixSort(numArr) {
  const animations = getSortAnimations(numArr);
  for (let i = 0; i < animations.length; i++) {
    var arrayBars = document.getElementsByClassName("DisplayBars_bar__BuTCR");
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [firstBar, secondBar] = animations[i];
      const barOneStyle = arrayBars[firstBar].style;
      const barTwoStyle = arrayBars[secondBar].style;
      const color = i % 3 === 0 ? config.FIRSTCOLOR : config.SECONDCOLOR;
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

function getSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  sort(array, array.length, animations);
  return animations;
}

function countSort(arr, n, exp, animations) {
  let output = new Array(n);
  let i;
  let count = new Array(10);
  for (let i = 0; i < 10; i++) count[i] = 0;

  // Store count of occurrences in count[]
  for (i = 0; i < n; i++) count[Math.floor(arr[i] / exp) % 10]++;

  // Change count[i] so that count[i] now contains
  // actual position of this digit in output[]
  for (i = 1; i < 10; i++) count[i] += count[i - 1];

  // Build the output array
  for (i = n - 1; i >= 0; i--) {
    animations.push([count[Math.floor(arr[i] / exp) % 10] - 1, i]);
    animations.push([count[Math.floor(arr[i] / exp) % 10] - 1, i]);
    animations.push([count[Math.floor(arr[i] / exp) % 10] - 1, arr[i]]);

    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
  }

  // Copy the output array to arr[], so that arr[] now
  // contains sorted numbers according to current digit
  for (i = 0; i < n; i++) arr[i] = output[i];
}

function sort(arr, n, animations) {
  // Find the maximum number to know number of digits
  let m = getMax(arr, n);

  // Do counting sort for every digit. Note that
  // instead of passing digit number, exp is passed.
  // exp is 10^i where i is current digit number
  for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10)
    countSort(arr, n, exp, animations);
}

function getMax(arr, n) {
  let mx = arr[0];
  for (let i = 1; i < n; i++) if (arr[i] > mx) mx = arr[i];
  return mx;
}
