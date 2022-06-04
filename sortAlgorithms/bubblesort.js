import config from "./config";

export default function bubbleSort(numArr) {
  const animations = getBubbleSortAnimations(numArr);
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

function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  bubbleSortHelper(array, array.length + 1, animations);
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

function bubbleSortHelper(arr, n, animations) {
  var i, j;
  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1, animations);
      }
    }
  }
}
