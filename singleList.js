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
//        push_front(value) {
//     const n = new Node(value);  
//     if (!this.#head) {
//         this.#head = this.#tail = n;
//     } else {                
//         n.next = this.#head;
//         this.#head = n;     
//     this.#size++;           
// }

//     }

//     push_back(value) {
//     const n = new Node(value);
//     if (!this.#head) {          // եթե ցուցակը դատարկ է
//         this.#head = this.#tail = n;
//     } else {                    // ցուցակում արդեն կա տարր
//         this.#tail.next = n;
//         this.#tail = n;
//     }
//     this.#size++;
// }

// pop_front() {
//     if (!this.#head) {
//         throw new Error("List is empty");
//     }

//     const removedNode = this.#head;  // պահում ենք հին head-ը
//     this.#head = this.#head.next;    // նոր head-ը դնում հաջորդ հանգույցը

//     if (!this.#head) {               // եթե ցուցակը հիմա դատարկ է
//         this.#tail = null;
//     }

//     removedNode.next = null;         // հին node-ի next-ը մաքրում
//     this.#size--;
// }

// pop_back() {
//     if (!this.#head) {
//         throw new Error("List is empty");
//     }

//     if (this.#head === this.#tail) { // եթե միայն մեկ հանգույց կա
//         this.#head = this.#tail = null;
//     } else {
//         let current = this.#head;
//         while (current.next !== this.#tail) { // անցնում ենք մինչև վերջինից առաջ
//             current = current.next;
//         }
//         current.next = null;   // վերջին node-ը կտրվի
//         this.#tail = current;  // նոր tail-ը՝ վերջինից առաջ
//     }

//     this.#size--;
//  }

pop_back(){
    if(!this.#head){
        throw new Error("there is no node to pop from back");
    }
   if(this.#head == this.#tail){
    this.#head = this.#tail = null;
    this.#size --;
    return;
   }

   let current  = this.#head;

   while(current.next !== this.#tail){
    current = current.next;
   }
   current.next = null;
    this.#tail = current;
   this.#size --;
}
push_back(value) {
    const n = new Node(value);

    // if list is empty
    if (!this.#head) {
        this.#head = this.#tail = n;
        this.#size++;
        return;
    }

    // attach to the end
    this.#tail.next = n;
    this.#tail = n;
    this.#size++;
}
   push_front(value) {
    const n = new Node(value);

    if (!this.#head) {           // if list is empty
        this.#head = this.#tail = n;
    } else {                     // if list already has nodes
        n.next = this.#head;
        this.#head = n;
    }

    this.#size++;
}
    
}
    let list = new singleList([2,4,6,5,3,1]);
    list.pop_back();
    list.pop_back();
    list.push_back(10);
    list.push_back(20);
    list.push_back(30);
    list.push_front(90);
    list.print();