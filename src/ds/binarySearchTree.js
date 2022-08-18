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
  insert(value) { // NOSONAR, @todo refactor to reduce cognitive complexity, or make it recursive
    const newNode = new Node(value);
    let currentNode;
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      currentNode = this.root;
      while (true) {
        if (value < current.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else if (value > current.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        } else {
          // duplicates case, i am going to ignore them for now to avoid inifinite loop
          return undefined;
        }
      }
    }
  }
  find(value) {
    if (!this.root) return false;
    let currentNode;
    currentNode = this.root;
    let found = false;
    while (currentNode && !found) {
      if (value === currentNode.value) {
        found = true;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      }
    }
    if (!found) return false;
    return currentNode;
  }
}