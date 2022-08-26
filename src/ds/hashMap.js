// Simple hashtable just for practice
// Big Os Average Case:
// Insertion, Deletion, Access O(1)
class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      return undefined;
    }
    for (const element of this.keyMap[index]) {
      if (element[0] === key) {
        return element[1];
      }
    }
    return undefined;
  }

  keys() {
    let keysArr = [];
    for (const element of this.keyMap) {
      if (element) {
        for (const item of element) {
          if (!keysArr.includes(item[0])) {
            keysArr.push(item[0]);
          }
        }
      }
    }
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for (const element of this.keyMap) {
      if (element) {
        for (const item of element) {
          if (!valuesArr.includes(item[1])) {
            valuesArr.push(item[1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

