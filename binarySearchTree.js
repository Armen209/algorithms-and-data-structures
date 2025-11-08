class treeNode{
  constructor(data){
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

class BST{
  constructor(data = null){
    this.root = null;
    if(data){
      this.root = new treeNode(data);
      return;
    } 
  }
  add(value){
    const newNode = new treeNode(value);
    if(!this.root){
      this.root = newNode;
      return;
    }
    let current = this.root;
   while(true){
       if(value < current.data){
      if(!current.left){
        current.left = newNode;
            break;
      }
      current = current.left;
    } if(value > current.data){
        if(!current.right){
          current.right = newNode;
          break;
        }
        current = current.right;
    }
   }
  }
  get_height_iterative(){
    if(!this.root) return -1;
    let queue = [this.root];
    let height = -1;
    while(queue.length > 0){
      let level = queue.length;
      for(let i = 0; i < level; ++i){
        let node = queue.shift();
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
      }
      height ++;
    }
      return height;
  }
    inorder(node = this.root, result = []) {
    if (!node) return result;
    this.inorder(node.left, result);
    result.push(node.data);
    this.inorder(node.right, result);
    return result;
  }

  preorder(node = this.root, result = []) {
    if (!node) return result;
    result.push(node.data);
    this.preorder(node.left, result);
    this.preorder(node.right, result);
    return result;
  }

  postorder(node = this.root, result = []) {
    if (!node) return result;
    this.postorder(node.left, result);
    this.postorder(node.right, result);
    result.push(node.data);
    return result;
  }


  delete(value){
    this.root = _deleteRec(this.root,value);
  }

  _deleteRec(node,value){
    if(!node) return null;

    if(value < node.value){
      node.left = this._deleteRec(node.left,value);
    } else if(value > node.value){
      node.right = this._deleteRec(node.right,value);
    }
      else{
        if(!node.left && !node.right){
          return null;
        }
        if(!node.left) return node.right;
        if(!node.right) return node.left;

        let succersor = node.right;
       while (successor.left) {
        successor = successor.left;
      }
      node.data = successor.data;
      node.right = this._deleteRec(node.right, successor.data);
    }
    return node;
      }
  }

let bst = new BST();
bst.add(5);
bst.add(8);
bst.add(3);
bst.add(2);
bst.add(6);

console.log(bst.get_height_iterative());
console.log( "Post order",bst.postorder());
console.log("Pre Order",bst.preorder());
console.log("In order",bst.inorder());

