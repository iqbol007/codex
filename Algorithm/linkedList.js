class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(data) {
    const node = { data, next: null };
    if (this.tail) {
      this.tail.next = node;
    }
    if (!this.head) {
      this.head = node;
    }
    this.tail = node;
  }
  find(data) {
    if (!this.head) {
      return;
    }
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
  }
  prepend(data) {
    this.head = { data, next: this.head };
    if (!this.tail) {
      this.tail = this.head;
    }
  }
  getAll() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }
  insertAfter(after, data) {
    const found = this.find(after);
    if (!found) {
      return;
    }
    const node = { data, next: found.next };
    found.next = node;
  }
  delete(data) {
    if (!this.head) {
      return;
    }
    while (this.head && this.head.data === data) {
      this.head = this.head.next;
    }
    let current = this.head;
    while (current) {
      if (current.next.data === data) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }
}

const list = new LinkedList();
