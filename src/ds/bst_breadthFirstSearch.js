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
  // Breadth First Search
  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(this.root);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }
}