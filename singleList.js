class Node {
    constructor(value,next = null){
        this.value = value;
        this.next = next;
    }
}

class singleList{
    #head = null;
    #tail = null;
    #size = 0;
    constructor(iterable = []){
        if(typeof iterable[Symbol.iterator] === "function"){
            for(let item of iterable){
                let newNode = new Node(item);
                if(!this.#head){
                    this.#head = newNode;
                    this.#tail = newNode;
                } else {
            this.#tail.next = newNode;
            this.#tail = newNode;
        }
        this.#size ++;
    } 
            }
            else{
                throw new Error("Provided value is not iterable");
            }
        }
     static from(iterable){
            let list = new singleList();
            for(let item of iterable){
                list.push_back(item);
            }
                return list;
        }
        print(){
            let current = this.#head;
            while(current){
                console.log(current.value);
                current = current.next;
            }
        }
        size(){
            return this.#size;
        }
        clear(){
            this.#head = null;
            this.#tail = null;
            this.#size = 0;
        }
        isEmpty(){
            return this.#size === 0;
        }
        reverse(){
            let next = null;
            let prev = null;
            let current = this.#head
            while(current){
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
                return prev;
        }
        // toArray(){
        //     let arr = [... this];
        //     return arr;
        // }
    }

    let list = new singleList([2,4,6,5,3,1]);
    // list.print();
    // console.log(list.isEmpty())
    console.log(list.reverse())
    console.log(list.toArray());