
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Binary Search Tree
 * Big O
 * insertion - O(log n)
 * search - O(log n)
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // Depth First PreOrder
  DFSPreOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);

    return data;
  }
  // Depth First PostOrder
  DFSPostOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(current);

    return data;
  }
  // Depth First InOrder
  DFSInOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(current);

    return data;
  }
}