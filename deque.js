class Deque {
  #map = null;
  constructor(initialBucket = 4, initialBlockSize = 8){

   if(initialBucket < 2)  throw new Error("Buckets must be at least 2");

   this.#map = new Array(initialBucket).fill(null);
   let mid = Math.floor(initialBucket / 1);
   this.headBlock = mid - 1;
   this.tailBlock = mid;
   this.headIndex = initialBlockSize - 1;
   this.tailIndex = 0;
   this.size = 0;
   this.blockSize = initialBlockSize;
 }

 push_back(value){
  if(!this.#map[this.tailBlock]){
    this.#map[this.tailBlock] = new Array(this.blockSize).fill(null);
  }

  this.#map[this.tailBlock][this.tailIndex] = value;

  if(this.tailIndex === this.blockSize - 1){
    if(this.tailBlock >= this.#map - 1){
      this.resize();
    }
    this.tailBlock++;
    this.tailIndex = 0;
  } else{
    this.tailIndex ++;
  }
  this.size++;
 }

  push_front(value){
    if(!this.#map[this.headBlock]){
      this.#map[this.headBlock] = new Array(this.blockSize).fill(null);
    } 
    this.#map[this.headBlock][this.headIndex] = value;
    if(this.headIndex === 0){
      if(this.headBlock === 0){
        this.resize();
      }
      this.headIndex = this.blockSize - 1;
      this.headBlock --;
    }
    else {
      this.headIndex --;
    }
    this.size ++;
  }

resize(){
  let old = this.#map;
  let newLength = old * 2;
  let next = new Array(newLength).fill(null);
  let offset = Math.floor((newLength - old) / 2);
    for(let i = 0; i < old; ++i){
      next(i + offset) = old[i];
    }
  this.#map = next;
  this.headBlock += offset;
  this.tailBlock += offset;
}


at(index) {
    if (index < 0 || index >= this.size) {
      throw new Error('Index out of bounds');
    }

    let block = this.headBlock;
    let indexInBlock = this.headIndex;

    if (indexInBlock === this.blockSize - 1) {
      block++;
      indexInBlock = 0;
    } else {
      indexInBlock++;
    }

    for (let i = 0; i < index; i++) {
      if (indexInBlock === this.blockSize - 1) {
        block++;
        indexInBlock = 0;
      } else {
        indexInBlock++;
      }
    }

    if (!this.#map[block]) {
      throw new Error('Internal structure corrupted');
    }

    return this.#map[block][indexInBlock];
  }


  visualize() {
    for (let i = 0; i < this.#map.length; ++i) {
      const bucket = this.#map[i];
      if (!bucket) continue;

      const display = bucket
        .map((elem) => (elem === null ? '.' : elem))
        .join(' ');
      console.log(`Bucket_${i}: [ ${display} ]`);
    }
  }
}

let dq = new Deque();
for (let i = 0; i < 40; i++) {  
  dq.push_back(i);
}
dq.visualize()
