class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedList {
  #head = null;
  #tail = null;
  #size = 0;

  #MAGIC_ZERO = 0;

  constructor(iterables) {
    if (iterables === undefined) return;

    if (iterables && typeof iterables[Symbol.iterator] !== 'function') {
      iterables = new Array(iterables);
    }

    for (const item of iterables) {
      this.push_back(item);
    }
  }

  size() {
    return this.#size;
  }

  isEmpty() {
    return this.#size === this.#MAGIC_ZERO;
  }

  clear() {
    this.#head = this.#tail = null;
    this.#size = 0;
  }

  push_front(value) {
    const n = new Node(value);

    if (!this.#size) {
      this.#tail = n;
    } else {
      n.next = this.#head;
      this.#head.prev = n;
    }

    this.#head = n;
    ++this.#size;
  }

  push_back(value) {
    const n = new Node(value);

    if (!this.#size) {
      this.#head = n;
      this.#tail = n;
    } else {
      n.prev = this.#tail;
      this.#tail.next = n;
    }

    this.#tail = n;
    ++this.#size;
  }

  pop_front() {
    if (!this.#size) {
      return null;
    }

    const n = this.#head.data;

    if (this.#size > 1) {
      this.#head = this.#head.next;
      this.#head.prev = null;
    } else {
      this.#head = this.#tail = null;
    }

    --this.#size;
    return n;
  }

  pop_back() {
    if (!this.#size) {
      return null;
    }

    const n = this.#tail.data;

    if (this.#size === 1) {
      this.#head = null;
      this.#tail = null;
    } else {
      this.#tail = this.#tail.prev;
      this.#tail.next = null;
    }

    this.#size--;
    return n;
  }

  front() {
    if (!this.#size) {
      return null;
    } else {
      return this.#head.data;
    }
  }

  back() {
    if (!this.#size) {
      return null;
    } else {
      return this.#tail.data;
    }
  }

  at(index) {
    if (index < 0 || index >= this.#size) {
      return null;
    }

    let current = this.#head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current.data;
      }
      current = current.next;
      count++;
    }

    return null;
  }

  insert(index, value) {
    if (index < 0 || index > this.#size) {
      return false;
    }

    if (index === 0) {
      this.push_front(value);
      return true;
    }

    if (index === this.#size) {
      this.push_back(value);
      return true;
    }

    const n = new Node(value);

    let current = this.#head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    const prevNode = current.prev;

    prevNode.next = n;
    n.prev = prevNode;

    n.next = current;
    current.prev = n;

    this.#size++;
    return true;
  }

  erase(index) {
    if (index < 0 || index >= this.#size) {
      return null;
    }

    if (index === 0) {
      return this.pop_front();
    }

    if (index === this.#size - 1) {
      return this.pop_back();
    }

    let current = this.#head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    const value = current.data;

    current.prev.next = current.next;
    current.next.prev = current.prev;

    this.#size--;

    return value;
  }

  remove(value, equals) {
    if (!this.#size) return 0;

    let countRemoved = 0;
    let current = this.#head;
    const cmp = equals || ((a, b) => a === b);

    while (current) {
      const nextNode = current.next;

      if (cmp(current.data, value)) {
        countRemoved++;

        if (current.prev) {
          current.prev.next = current.next;
        } else {
          this.#head = current.next;
        }

        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.#tail = current.prev;
        }

        this.#size--;
      }

      current = nextNode;
    }

    return countRemoved;
  }

  reverse() {
    if (!this.#size || this.#size === 1) return;

    let current = this.#head;
    let temp = null;

    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    temp = this.#head;
    this.#head = this.#tail;
    this.#tail = temp;
  }

  print() {
    let current = this.#head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList([10, 5, 12, 53, 23, 4, 1, 8]);

list.print();

list.push_front(99);
list.push_back(77);
list.print();

console.log(list.pop_front());
console.log(list.pop_back());
list.print();

console.log(list.front());
console.log(list.back());

console.log(list.at(3));

list.insert(2, 99);
list.print();

list.erase(4);
list.print();

list.push_back(12);
list.remove(12);
list.print();

list.reverse();
list.print();

console.log(list.size());
console.log(list.isEmpty());

list.clear();
list.print();
console.log(list.size());
console.log(list.isEmpty());
