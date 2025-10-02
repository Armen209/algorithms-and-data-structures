class dynamicArray{
    #size = 0;
    #capacity = 0;
    #arr = null;
    #CAP_EXPONENT = 2;

    constructor(cap){
        if(cap <= 0) return;
        this.#capacity = cap;
        this.#arr = new Uint32Array(cap);
    }
    resize(new_cap,fill = 0){
        const tmp = new Uint32Array(new_cap);
        for(let i = 0; i < this.#size;++i){
            tmp[i] = this.#arr[i];
        }
        for(let i = this.#size; i < new_cap;++i){
            tmp[i] = fill;
        }
        this.#capacity = new_cap;
        this.#arr = tmp;
    }
    push_back(elem){
        if (this.#size === this.#capacity) {
      this.resize(this.#capacity * this.#CAP_EXPONENT);
    }
    this.#arr[this.#size++] = elem;
    }
    [Symbol.iterator]() {
    const collection = this.#arr;
    const collection_length = this.#size;
    let index = 0;
    return {
      next() {
        if (index < collection_length) {
          return {
            value: collection[index++],
            done: false,
          };
        }
        return { value: undefined, done: true };
      },
    };
  }

  pop_back(){
    if(this.#size === 0) throw new Error("Empty array");
    this.#size--;
  }

  insert(index,value){
    if(index < 0 || index > this.#size) throw new Error("Index out of bounds");
    if(this.#size == this.#capacity){
        this.resize(this.#capacity * this.#CAP_EXPONENT);
    }
    for(let i = this.#size; i > index; ++i){
        this.#arr[i] = this.#arr[i - 1];
    }
    this.#arr[index] = value;
    this.#size++;
  }

  erase(index){
    if(index < 0 || index >= this.#size){
        throw new Error("Index out of bounds");
    }
    for(let i = index ; i < this.#size - 1; ++i){
        this.#arr[i] = this.#arr[i + 1];
    }
    this.#size--;
  }
  swap(i,j){
    if(i < 0 || i >= this.#size || j < 0 || j >= this.#size) throw new Error("Index out of bounds");
    [this.#arr[i],this.#arr[j]] = [this.#arr[j],this.#arr[i]];
  }
}
