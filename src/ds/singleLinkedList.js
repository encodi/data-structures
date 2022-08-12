class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Single Linked List Class
 * Big Os
 *  insertion - O(1)
 *  removal - O(1) or O(n)
 *  searching - O(n)
 *  access - O(n)
 */
class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter != index) {
      current = current.next;
      counter++
    }
    return current;
  }
  set(index, value) {
    let current = this.get(index);
    if (current) {
      current.val = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(value);
      return true;
    }
    if (index === 0) {
      this.unshift(value);
      return true;
    }

    let previous = this.get(index - 1);
    let newNode = new Node(value);
    let temp = previous.next;
    previous.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.pop();
      return true;
    }
    if (index === 0) {
      this.shift();
      return true;
    }

    let previous = this.get(index - 1);
    let removed = previous.next;
    previous.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    //  H                      T
    // N1 -> N2 -> N3 -> N4 -> N5

    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    // T                       H
    // N1 -> N2 -> N3 -> N4 -> N5

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) { // NOSONAR
      next = node.next;
      node.next = prev;
      //          T                       H
      //         N1 -> N2 -> N3 -> N4 -> N5
      //NULL <- NODE  NEXT
      //          T                       H
      //         N1 -> N2 -> N3 -> N4 -> N5
      //NULL <- PREV <- NODE  NEXT
      prev = node;
      node = next;
      //          T                       H
      //         N1 -> N2 -> N3 -> N4 -> N5
      //NULL <- PREV  NODE
      //          T                       H
      //         N1 -> N2 -> N3 -> N4 -> N5
      //NULL <-      PREV <- NODE  NEXT
    }
    return this;
  }
}
