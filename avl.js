class Node {
    constructor(value){
        this.data = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVL {
    constructor(value){
        if(value === undefined || value == null){
            this.root = null;
            return;
        }
        this.root = new Node(value);
    }
    _get_height(node){
      return  node ? node.height : 1;
    }
    update(node){
        return 1 + Math.max(this._get_height(node.left),this._get_height(node.right));
    }

    _bf(node){
        return (this._get_height(node.left) - this._get_height(node.right));
    }
      _right_rotate(node) {
    let newRoot = node.left;
    node.left = newRoot.right;
    newRoot.right = node;

    newRoot.height = this._update(newRoot);
    node.height = this._update(node);
    return newRoot;
  }
    _left_rotate(node){
        let newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;

        newRoot.height = this._get_height(newRoot);
        node.height = this._get_height(node);

        return newRoot;
    }

    _insert(node,value){
        if(!node){
            return new Node(value);
        }
        if(value < node.data){
            node.left = this._insert(node.left,value);
        } else if(value > node.data){
            node.right = this._insert(node.right,value);
        }else{
            return node;
        }
        node.height = this.update(node);
        let bf = this._bf(node);
        if(node > 1){
            node = this._right_rotate(node);
        } else if(node < 1){
            node = this._left_rotate(node);
        } else {
            return node;
        }
    }
    insert(value){
        this.root = this._insert(this.root,value);
    }
      level_order() {
    if (!this.root) return;
    const q = new Queue(1000);
    let out = '';
    q.enqueue(this.root);

    while (!q.isEmpty()) {
      const level = q.size();
      for (let i = 0; i < level; ++i) {
        const node = q.dequeue();
        out += node.data + ' ';
        if (node.left) q.enqueue(node.left);
        if (node.right) q.enqueue(node.right);
      }
    }
    console.log(out);
}
}
