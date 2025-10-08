class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

// let head = new Node(10);
// let second = new Node(20);
// let third = new Node(30);

// head.next = second;
// second.next = third;

// let current = head;
//     while(current!== null){
//         console.log(current.data);
//         current = current.next;
//     }


class linkedList{
    constructor(){
        this.head = null;
        
    }

append(data){
    let newNode = new Node(data);
    if(this.head === null){
        this.head = newNode;
        return ;
    }
    let current = this.head;
    while(current.next !== null){
        current = current.next;
    }
        current.next = newNode;
}
prepend(data){
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
}

delete(data){
    if(this.head === null) return;
    if(this.head.data === data){
        this.head = this.head.next;
        return;
    }

    let current = this.head;
    while(current.next !== null && current.next.data !== data){
        current = current.next;
    }
    if(current.next !== null){
        current.next = current.next.next;
    }
}
 print(){
    let current = this.head;
    let result = "";
    while(current != null){
        result += current.data + "- >";
        current = current.next;
    }
    console.log(result + "null");
 }
 }


 let list1 = new linkedList();
 list1.append(10);
 list1.prepend(20);
 list1.append(30);
 list1.delete(10);
 list1.print();