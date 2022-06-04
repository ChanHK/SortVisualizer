import config from "./config";

export default function combSort(numArr) {
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

function getNextGap(gap) {
  // Shrink gap by Shrink factor
  gap = parseInt((gap * 10) / 13, 10);
  if (gap < 1) return 1;
  return gap;
}

function sort(arr, n, animations) {
  let gap = n;

  // Initialize swapped as true to
  // make sure that loop runs
  let swapped = true;

  // Keep running while gap is more than
  // 1 and last iteration caused a swap
  while (gap != 1 || swapped == true) {
    // Find next gap
    gap = getNextGap(gap);

    // Initialize swapped as false so that we can
    // check if swap happened or not
    swapped = false;

    // Compare all elements with current gap
    for (let i = 0; i < n - gap; i++) {
      if (arr[i] > arr[i + gap]) {
        // Swap arr[i] and arr[i+gap]
        let temp = arr[i];
        animations.push([i, i + gap]);
        animations.push([i, i + gap]);
        animations.push([i, arr[i + gap]]);
        arr[i] = arr[i + gap];
        animations.push([i + gap, temp]);
        arr[i + gap] = temp;

        swapped = true;
      }
    }
  }
}
