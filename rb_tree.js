`| Feature            | **AVL Tree**                                                              | **Red-Black Tree**                                                                      |
| ------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Balance criterion   | The height of left and right subtrees of any node differ by **at most 1** | The longest path is at most **twice as long** as the shortest (using color constraints) |
| Balance enforcement | **Very strict**                                                           | **Loose / probabilistic**                                                               |
| Rotation frequency  | **Frequent**                                                              | **Less frequent**                                                                       |
`;

const RED = 'RED';
const BLACK = 'BLACK';

// for print
const reset = '\x1b[0m';
const redColor = '\x1b[31m';
const blackColor = '\x1b[30m';
const bold = '\x1b[1m';

class TreeNode {
  constructor(data, color = RED, parent = null, left = null, right = null) {
    this.data = data;
    this.color = color;
    this.parent = parent;
    this.left = left;
    this.right = right;
  }
}

class RBTree {
  constructor() {
    this.nil = new TreeNode(null); // sentinel node
    this.nil.color = BLACK;
    this.root = this.nil;
  }

  rotateRight(current) {
    let pivotNode = current.left;
    current.left = pivotNode.right;

    if (pivotNode.right !== this.nil) {
    }

    pivotNode.parent = current.parent;

    if (current.parent === this.nil) {
      this.root = pivotNode;
    }

    pivotNode.right = current;
    current.parent = pivotNode;
  }

  insertFixUp(newNode) {
  while (newNode.parent.color === RED) {
    const grandparent = newNode.parent.parent;

    if (newNode.parent === grandparent.left) {
      const uncle = grandparent.right;

      if (uncle.color === RED) {
        newNode.parent.color = BLACK;
        uncle.color = BLACK;
        grandparent.color = RED;
        newNode = grandparent;
      } else {
        if (newNode === newNode.parent.right) {
          newNode = newNode.parent;
          this.rotateLeft(newNode);
        }
        newNode.parent.color = BLACK;
        grandparent.color = RED;
        this.rotateRight(grandparent);
      }
    }

    else {
      const uncle = grandparent.left;

      if (uncle.color === RED) {
        newNode.parent.color = BLACK;
        uncle.color = BLACK;
        grandparent.color = RED;
        newNode = grandparent;
      } else {
        if (newNode === newNode.parent.left) {
          newNode = newNode.parent;
          this.rotateRight(newNode);
        }
       
        newNode.parent.color = BLACK;
        grandparent.color = RED;
        this.rotateLeft(grandparent);
      }
    }
  }

  this.root.color = BLACK; 
}

  insert(data) {
    const newNode = new TreeNode(data);
    let parentNode = this.nil;
    let current = this.root;

    while (current !== this.nil) {
      parentNode = current;
      if (newNode.data < current.data) {
        current = current.left;
      } else if (newNode.data > current.data) {
        current = current.right;
      } else {
        return;
      }
    }

    if (parentNode === this.nil) {
      this.root = newNode;
    } else if (newNode.data < parentNode.data) {
      parentNode.left = newNode;
    } else {
      parentNode.right = newNode;
    }
    newNode.parent = parentNode;
    newNode.left = newNode.right = this.nil;

    this.insertFixUp(newNode);
  }
  _printTree(node, indent = '', isLeft = true) {
    if (!node) return;

    if (node.right) {
      this._printTree(node.right, indent + (isLeft ? '     ' : '│    '), false);
    }

    const colorCode = node.color === RED ? redColor : blackColor;
    const colorSymbol = node.color === RED ? 'R' : 'B';
    const nodeLabel = `${bold}${colorCode}(${
      node.data ? node.data : 'nil'
    }, ${colorSymbol})${reset}`;

    console.log(indent + (isLeft ? '└──' : '┌──') + nodeLabel);

    if (node.left) {
      this._printTree(node.left, indent + (isLeft ? '     ' : '│    '), true);
    }
  }

  print() {
    if (this.root === this.nil) {
      console.log('Empty tree');
      return;
    }
    this._printTree(this.root);
  }
 search(value) {
  let current = this.root;
  while (current !== this.nil && current.data !== null) {
    if (value === current.data) {
      return current; 
    } else if (value < current.data) {
      current = current.left;
    } else {
      current = current.right;
    }
  }
  return null; 
}
rotateLeft(current) {
  let pivotNode = current.right;         
  current.right = pivotNode.left;         

  if (pivotNode.left !== this.nil) {      
    pivotNode.left.parent = current;
  }

  pivotNode.parent = current.parent;      

  if (current.parent === this.nil) {      
    this.root = pivotNode;
  } else if (current === current.parent.left) {
    current.parent.left = pivotNode;
  } else {
    current.parent.right = pivotNode;
  }

  pivotNode.left = current;               
  current.parent = pivotNode;             
}


}

// const rb = new RBTree();

// rb.insert(30);
// rb.insert(20);
// rb.insert(10);
// // rb.insert(10);
// rb.print();