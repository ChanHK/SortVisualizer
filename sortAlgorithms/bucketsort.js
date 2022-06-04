import config from "./config";

export default function bucketSort(numArr) {
  const animations = getSortAnimations(numArr);
  for (let i = 0; i < animations.length; i++) {
    var arrayBars = document.getElementsByClassName("DisplayBars_bar__BuTCR");
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [firstBar, secondBar] = animations[i];
      var barOneStyle = arrayBars[firstBar].style;

      const barTwoStyle = arrayBars[secondBar].style;
      const color = i % 3 === 0 ? config.FIRSTCOLOR : config.SECONDCOLOR;
      const [nextBar, newHeight] = animations[i + 1];

      setTimeout(() => {
        if (newHeight === 0) barOneStyle.backgroundColor = config.THIRDCOLOR;
        else barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * config.TIME);
    } else {
      setTimeout(() => {
        const [firstBar, newHeight] = animations[i];
        const barOneStyle = arrayBars[firstBar].style;
        if (newHeight !== 0) barOneStyle.height = `${newHeight}px`;
      }, i * config.TIME);
    }
  }
}

function getSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  bSort(array, array.length, animations);
  return animations;
}

function bSort(arr, n, animations) {
  if (n <= 0) return;

  let buckets = new Array(n);

  for (let i = 0; i < n; i++) buckets[i] = [];

  //Put array elements in different buckets
  for (let i = 0; i < n; i++) {
    let idx = Math.floor(arr[i] / 50);
    animations.push([idx, i]);
    animations.push([idx, i]);
    animations.push([i, 0]);
    buckets[idx].push(arr[i]);
  }

  //Sort individual buckets
  for (let i = 0; i < n; i++) {
    buckets[i].sort(function (a, b) {
      return a - b;
    });
  }

  // Concatenate all buckets into arr[]
  let index = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      animations.push([index, i]);
      animations.push([index, i]);
      animations.push([index, buckets[i][j]]);
      arr[index] = buckets[i][j];
      index++;
    }
  }
}
