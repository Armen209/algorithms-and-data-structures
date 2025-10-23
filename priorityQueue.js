class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // helpers
  _parent(i) {
    return Math.floor((i - 1) / 2);
  }

  _left(i) {
    return 2 * i + 1;
  }

  _right(i) {
    return 2 * i + 2;
  }

  _shiftUp(i) {
    while (i > 0) {
      let parent = this._parent(i);
      if (this.heap[i] < this.heap[parent]) {
        [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
        i = parent;
      } else {
        break;
      }
    }
  }

  _shiftDown(i) {
    const n = this.heap.length;

    while (true) {
      const left = this._left(i);
      const right = this._right(i);

      let smallest = i;

      if (i < n && this.heap[left] < this.heap[right]) smallest = left;
      if (i < n && this.heap[right] < this.heap[left]) smallest = right;

      console.log('smallest: ', smallest);
      if (i != smallest) {
        [this.heap[i], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[i],
        ];
        i = smallest;
      } else {
        break;
      }
    }
  }

  // interfaces

  size() {
    return this.heap.length;
  }
  empty() {
    return this.heap.length === 0;
  }

  push(elem) {
    this.heap.push(elem);

    this._shiftUp(this.heap.length - 1);
  }

  peek() {
    return this.heap[0];
  }

  pop() {
    if (this.empty()) {
      throw new Error('Underflow');
    }

    const root = this.heap[0];
    const last = this.heap.pop();

    if (!this.empty()) {
      this.heap[0] = last;
      this._shiftDown(0);
    }

    return root;
  }
  print() {
    console.log(`[${this.heap}]`);
  }
}

const pq = new PriorityQueue();

pq.push(30);
pq.push(20);
pq.push(15);
pq.push(12);
pq.push(10);
pq.push(8);
pq.push(16);

pq.print();

// let r = pq.pop();

// console.log('root is: ', r);

// pq.print();

// r = pq.pop();

// console.log('root is: ', r);

// pq.print();

// r = pq.pop();

// console.log('root is: ', r);

// pq.print();

// r = pq.pop();

// console.log('root is: ', r);

// pq.print();

// r = pq.pop();

// console.log('root is: ', r);

// pq.print();