import config from "./config";

export default function combSort(numArr) {
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
  // Start with a big gap, then reduce the gap
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    // Do a gapped insertion sort for this gap size.
    // The first gap elements a[0..gap-1] are already
    // in gapped order keep adding one more element
    // until the entire array is gap sorted
    for (let i = gap; i < n; i += 1) {
      // add a[i] to the elements that have been gap
      // sorted save a[i] in temp and make a hole at
      // position i
      let temp = arr[i];

      // shift earlier gap-sorted elements up until
      // the correct location for a[i] is found
      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        animations.push([j, gap]);
        animations.push([j, gap]);
        animations.push([j, arr[j - gap]]);
        arr[j] = arr[j - gap];
      }
      // put temp (the original a[i]) in its correct
      // location
      animations.push([j, i]);
      animations.push([j, i]);
      animations.push([j, temp]);
      arr[j] = temp;
    }
  }
  return arr;
}
