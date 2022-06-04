import config from "./config";

export default function insertionSort(numArr) {
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

function sort(arr, n, animations) {
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
    while (j >= 0 && arr[j] > key) {
      animations.push([j + 1, j]);
      animations.push([j + 1, j]);
      animations.push([j + 1, arr[j]]);
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    animations.push([j + 1, i]);
    animations.push([j + 1, i]);
    animations.push([j + 1, key]);
    arr[j + 1] = key;
  }
}
