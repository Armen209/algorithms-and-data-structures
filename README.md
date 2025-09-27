# Algorithms and Data Structures

This repository contains implementations of various algorithms and data structures in JavaScript.  
Currently, it includes the following **sorting algorithms** located inside the `sorting` folder:

---

## Sorting Algorithms

### 🫧 Bubble Sort (`bubbleSort.js`)
- Repeatedly compares each pair of adjacent elements and swaps them if they are in the wrong order.
- Each pass "bubbles" the largest unsorted element to the end.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)
- **Stable:** Yes

---

### 📝 Insertion Sort (`insertionSort.js`)
- Builds the sorted part of the array one element at a time.
- Takes each element and inserts it into its correct position among the previously sorted elements.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)
- **Stable:** Yes

---

### ✅ Selection Sort (`selectionSort.js`)
- Repeatedly selects the smallest element from the unsorted part and places it at the beginning.
- Reduces the size of the unsorted part by one each pass.
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)
- **Stable:** No

---

### 🔢 Counting Sort (`countingSort.js`)
- Counts the number of occurrences of each unique element.
- Uses these counts to place elements in the correct sorted position.
- Works only with integers or discrete values in a known range.
- **Time Complexity:** O(n + k) (where `k` is the range of input values)
- **Space Complexity:** O(n + k)
- **Stable:** Yes

---

## 📁 Folder Structure
algorithms-and-data-structures/
├── README.md
└── sorting/
├── bubbleSort.js
├── insertionSort.js
├── selectionSort.js
└── countingSort.js

