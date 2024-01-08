// IntroModal.js

import React, { useState } from 'react';
import './IntroModel.css';

const IntroModal = ({ onClose }) => {
  const [step, setStep] = useState(0); // Track the current step

  const algorithmInfo = [
    {
      title: 'Welcome to Sorting Visualizer!',
      description:
        'Welcome to the Sorting Visualizer, a captivating exploration of sorting algorithms. Imagine algorithms as conductors orchestrating elements in a symphony, arranging them into harmonious order. This interactive journey invites you to witness the magic behind sorting techniques, enhancing your understanding of algorithmic principles.',
      imageSrc: `${process.env.PUBLIC_URL}/sort.jpeg`,
    },
    {
      title: 'Merge Sort - The Virtuoso',
      description:
        'Meet Merge Sort, often regarded as the virtuoso of sorting algorithms. It follows a divide-and-conquer strategy, breaking down the challenge into smaller, more manageable tasks. As the algorithm recursively sorts and merges, it showcases the art of organization. Its stability and efficiency make it a cornerstone in the world of sorting.',
        imageSrc: `${process.env.PUBLIC_URL}/Merge-sort.png`,
    },
    {
      title: 'Quick Sort - The Swift Maestro',
      description:
        'Introducing Quick Sort, the swift maestro of sorting. Operating with unparalleled speed, Quick Sort partitions arrays and conquers with agility. Its adaptability to various datasets makes it a favorite in real-world scenarios. Observe the virtuosity of Quick Sort as it efficiently sorts and rearranges elements.',
    imageSrc: `${process.env.PUBLIC_URL}/quicksort.jfif`,
    },
    {
      title: 'Heap Sort - The Grand Composer',
      description:
        'Enter the realm of Heap Sort, the grand composer of algorithms. Leveraging the structure of a binary heap, Heap Sort orchestrates elements with precision. Building a max heap and extracting elements methodically, it demonstrates the power of heap-based sorting. Explore the symphonic beauty of Heap Sort as it creates harmonious order.',
        imageSrc: `${process.env.PUBLIC_URL}/heapsort.png`,
    },
    {
      title: 'Bubble Sort - The Fundamental Prelude',
      description:
        'Experience the fundamental prelude with Bubble Sort. This algorithm, though basic, introduces you to the core concepts of sorting. Iterating through a list, comparing adjacent elements, and swapping them if needed, Bubble Sort provides insights into the foundational principles of sorting algorithms. Explore the simplicity that lays the groundwork for more complex symphonies.',
        imageSrc: `${process.env.PUBLIC_URL}/bubblesort.jfif`,
    },
  ];

  const handleNext = () => {
    if (step < algorithmInfo.length - 1) {
      setStep(step + 1);
    } else {
      onClose(); // Close the modal when all steps are completed
    }
  };

  return (
    <div className="intro-modal">
      <div className="modal-content">
        <h2>{algorithmInfo[step].title}</h2>
        <img src={algorithmInfo[step].imageSrc} alt="Algorithm Visual" />
        <p>{algorithmInfo[step].description}</p>
        <button onClick={handleNext}>
          {step < algorithmInfo.length - 1 ? 'Next' : 'Start Sorting'}
        </button>
      </div>
    </div>
  );
};

export default IntroModal;
