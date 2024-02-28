class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let newNode = new Node(value);

      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  traverse() {
    let current = this.head;

    while(current !== null){
        console.log(current.value);
        current = current.next;
    }
  }
  reverseTraverse() {
    let prev = null;
    let current = this.head;

    while(current){
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    this.head = prev
  }
}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

list.traverse()
console.log();
list.reverseTraverse()
list.traverse()
