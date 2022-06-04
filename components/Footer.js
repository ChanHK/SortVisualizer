import classes from "./Footer.module.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Selector from "./Selector";
import { useState } from "react";
import mergeSort from "../sortAlgorithms/mergesort";
import sortTypes from "../sortAlgorithms/sortTypes";
import quickSort from "../sortAlgorithms/quicksort";
import heapSort from "../sortAlgorithms/heapsort";
import bubbleSort from "../sortAlgorithms/bubblesort";
import selectionSort from "../sortAlgorithms/selectionsort";
import insertionSort from "../sortAlgorithms/insertionsort";
import countingSort from "../sortAlgorithms/countingsort";
import radixSort from "../sortAlgorithms/radixsort";
import bucketSort from "../sortAlgorithms/bucketsort";
import combSort from "../sortAlgorithms/combsort";
import shellSort from "../sortAlgorithms/shellsort";

function Footer(props) {
  const [sortType, setSort] = useState("");
  const [numArr, setNum] = useState(generateArr());

  function generateArr() {
    var defaultSize = 100;
    let arr = Array.from({ length: defaultSize }, () =>
      Math.floor(Math.random() * 570 + 30)
    );
    return arr;
  }

  function arrHandler() {
    let newArr = generateArr();
    setNum(newArr);
    props.getArray(newArr);
  }

  function runSort() {
    switch (sortType) {
      case sortTypes.merge:
        mergeSort(numArr);
        break;
      case sortTypes.quick:
        quickSort(numArr);
        break;
      case sortTypes.heap:
        heapSort(numArr);
        break;
      case sortTypes.bubble:
        bubbleSort(numArr);
        break;
      case sortTypes.selection:
        selectionSort(numArr);
        break;
      case sortTypes.insertion:
        insertionSort(numArr);
        break;
      case sortTypes.counting:
        countingSort(numArr);
        break;
      case sortTypes.radix:
        radixSort(numArr);
        break;
      case sortTypes.bucket:
        bucketSort(numArr);
        break;
      case sortTypes.comb:
        combSort(numArr);
        break;
      case sortTypes.shell:
        shellSort(numArr);
        break;
    }
  }

  return (
    <footer className={classes.footer}>
      <div className={classes.buttonsContainer}>
        <Button variant="primary" onClick={() => arrHandler()}>
          Generate
        </Button>
      </div>
      <div className={classes.buttonsContainer}>
        <Selector setSortType={(type) => setSort(type)} value={sortType} />
      </div>
      <div className={classes.buttonsContainer}>
        <Button variant="info" onClick={() => runSort()}>
          Sort
        </Button>
      </div>
    </footer>
  );
}

export default Footer;
