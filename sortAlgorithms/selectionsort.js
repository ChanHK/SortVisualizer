import config from "./config";

export default function selectionSort(numArr) {
  const animations = getSortAnimations(numArr);
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

function getSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  sort(array, array.length, animations);
  return animations;
}

function swap(arr, xp, yp, animations) {
  animations.push([xp, yp]);
  animations.push([xp, yp]);
  var temp = arr[xp];
  animations.push([xp, arr[yp]]);
  arr[xp] = arr[yp];
  animations.push([yp, temp]);
  arr[yp] = temp;
}

function sort(arr, n, animations) {
  var i, j, min_idx;

  // One by one move boundary of unsorted subarray
  for (i = 0; i < n - 1; i++) {
    // Find the minimum element in unsorted array
    min_idx = i;
    for (j = i + 1; j < n; j++) if (arr[j] < arr[min_idx]) min_idx = j;

    // Swap the found minimum element with the first element
    swap(arr, min_idx, i, animations);
  }
}
