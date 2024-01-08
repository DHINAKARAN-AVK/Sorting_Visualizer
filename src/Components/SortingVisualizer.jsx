import React from 'react';
import { getMergeSortAnimations } from '../Algorithms/MergeSort';
import { quickSort } from '../Algorithms/QuickSort';
import { heapSort } from '../Algorithms/HeapSort';
import { bubbleSort } from '../Algorithms/BubbleSort';
import IntroModal from './IntroModel';
import './SortingVisualizer.css';

const NUMBER_OF_ARRAY_BARS = 150;
const PRIMARY_COLOR = '#46a4e3'; // Dodger Blue
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      animationSpeed: 5,
      arraySize: NUMBER_OF_ARRAY_BARS,
      sorting: false,
      sorted: false, // New property to track if the array is sorted
    };
  }

  showIntroModal() {
    // You can use state to control whether to show the intro modal
    this.setState({ showIntroModal: true });
  }
  
  closeIntroModal() {
    // Close the intro modal
    this.setState({ showIntroModal: false });
  }

  componentDidMount() {
    this.resetArray();
    this.showIntroModal();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < this.state.arraySize; i++) {
      array.push(randomIntFromInterval(5, 500));
    }
    this.setState({ array, sorting: false, sorted: false }); // Reset the sorting and sorted state
  }

    mergeSort() {
      this.setState({ sorting: true });
      const { array, animationSpeed } = this.state;
      const arrayCopy = [...array];
      const animations = getMergeSortAnimations(arrayCopy);

      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;

        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * animationSpeed);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * animationSpeed);
        }
      }
      setTimeout(() => {
        this.setState({ sorting: false, sorted: true });
      }, animations.length * animationSpeed);
    }

    quickSort() {
      this.setState({ sorting: true });
      const { array, animationSpeed } = this.state;
      const animations = quickSort(array);

      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const [barOneIdx, barTwoIdx, isSwap] = animations[i];

        if (isSwap) {
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;

          setTimeout(() => {
            barOneStyle.backgroundColor = SECONDARY_COLOR;
            barTwoStyle.backgroundColor = SECONDARY_COLOR;
          }, i * animationSpeed);

          setTimeout(() => {
            const temp = barOneStyle.height;
            barOneStyle.height = barTwoStyle.height;
            barTwoStyle.height = temp;

            barOneStyle.backgroundColor = PRIMARY_COLOR;
            barTwoStyle.backgroundColor = PRIMARY_COLOR;
          }, (i + 1) * animationSpeed);
        } else {
          setTimeout(() => {
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.backgroundColor = SECONDARY_COLOR;
          }, i * animationSpeed);

          setTimeout(() => {
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.backgroundColor = PRIMARY_COLOR;
          }, (i + 1) * animationSpeed);
        }
      }
      setTimeout(() => {
        this.setState({ sorting: false, sorted: true });
      }, animations.length * animationSpeed);
    }

    heapSort() {
      this.setState({ sorting: true });
      const { array, animationSpeed } = this.state;
      const arrayCopy = [...array];
      const animations = heapSort(arrayCopy);

      for (let i = 0; i < animations.length; i++) {
        const [barOneIdx, barTwoIdx, isSwap] = animations[i];
        const arrayBars = document.getElementsByClassName('array-bar');

        if (isSwap) {
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;

          setTimeout(() => {
            barOneStyle.backgroundColor = SECONDARY_COLOR;
            barTwoStyle.backgroundColor = SECONDARY_COLOR;
          }, i * animationSpeed);

          setTimeout(() => {
            const temp = barOneStyle.height;
            barOneStyle.height = barTwoStyle.height;
            barTwoStyle.height = temp;

            barOneStyle.backgroundColor = PRIMARY_COLOR;
            barTwoStyle.backgroundColor = PRIMARY_COLOR;
          }, (i + 1) * animationSpeed);
        } else {
          setTimeout(() => {
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.backgroundColor = SECONDARY_COLOR;
          }, i * animationSpeed);

          setTimeout(() => {
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.backgroundColor = PRIMARY_COLOR;
          }, (i + 1) * animationSpeed);
        }
      }

      setTimeout(() => {
        this.setState({ array: arrayCopy, sorting: false, sorted: true });
      }, animations.length * animationSpeed);
    }

    bubbleSort() {
      this.setState({ sorting: true });
      const { array, animationSpeed } = this.state;
      const arrayCopy = [...array];
      const animations = bubbleSort(arrayCopy);

      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const [barOneIdx, barTwoIdx, isSwap] = animations[i];

        if (isSwap) {
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;

          setTimeout(() => {
            barOneStyle.backgroundColor = SECONDARY_COLOR;
            barTwoStyle.backgroundColor = SECONDARY_COLOR;
          }, i * animationSpeed);

          setTimeout(() => {
            const temp = barOneStyle.height;
            barOneStyle.height = barTwoStyle.height;
            barTwoStyle.height = temp;

            barOneStyle.backgroundColor = PRIMARY_COLOR;
            barTwoStyle.backgroundColor = PRIMARY_COLOR;
          }, (i + 1) * animationSpeed);
        } else {
          setTimeout(() => {
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.backgroundColor = SECONDARY_COLOR;
          }, i * animationSpeed);

          setTimeout(() => {
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.backgroundColor = PRIMARY_COLOR;
          }, (i + 1) * animationSpeed);
        }
      }

      setTimeout(() => {
        this.setState({ array: arrayCopy, sorting: false, sorted: true });
      }, animations.length * animationSpeed);
    }

  handleSpeedChange(e) {
    const newSpeed = 21 - parseInt(e.target.value, 10);
    const clampedSpeed = Math.max(1, Math.min(50, newSpeed));
    this.setState({ animationSpeed: clampedSpeed });
  }

  render() {
    const { array, arraySize, sorted } = this.state;
    const barWidth = 700 / arraySize;
    const barColor = sorted ? '#4ee44e' : PRIMARY_COLOR;
    const { showIntroModal } = this.state;

    return (
      <div>
        {showIntroModal && <IntroModal onClose={() => this.closeIntroModal()} />}
        <div className="button-container">
          <button onClick={() => this.resetArray()} disabled={this.state.sorting}>
            Generate New Array
          </button>
          <button onClick={() => this.mergeSort()} disabled={this.state.sorting}>
            Merge Sort
          </button>
          <button onClick={() => this.quickSort()} disabled={this.state.sorting}>
            Quick Sort
          </button>
          <button onClick={() => this.heapSort()} disabled={this.state.sorting}>
            Heap Sort
          </button>
          <button onClick={() => this.bubbleSort()} disabled={this.state.sorting}>
            Bubble Sort
          </button>
          <div className="speed-container">
            <label htmlFor="speed">Animation Speed:</label>
            <input
              type="range"
              id="speed"
              name="speed"
              min="1"
              max="20"
              value={21 - this.state.animationSpeed}
              onChange={(e) => this.handleSpeedChange(e)}
              disabled={this.state.sorting}
            />
          </div>
          <div className="size-container">
            <label htmlFor="size">Array Size:</label>
            <input
              type="range"
              id="size"
              name="size"
              min="5"
              max="350"
              value={this.state.arraySize}
              onChange={(e) =>
                this.setState({ arraySize: parseInt(e.target.value, 10) }, this.resetArray)
              }
              disabled={this.state.sorting}
            />
            
          </div>
        </div>
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: barColor,
                height: `${value}px`,
                width: `${barWidth}px`,
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
