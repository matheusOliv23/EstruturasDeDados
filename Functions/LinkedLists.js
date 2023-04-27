function Node(value) {
  const node = {
    value: value,
    next: null,
  };
  return node;
}

function LinkedList(value) {
  const list = {
    head: Node(value),
    tail: null,
    length: 1,
  };

  function push(value) {
    const newNode = Node(value);

    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }

    list.length++;
    return list;
  }

  function pop() {
    if (!list.head) return undefined;
    let temp = list.head;
    let pre = list.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    list.tail = pre;
    list.tail.next = null;
    list.length--;

    if (list.length === 0) {
      list.head = null;
      list.tail = null;
    }
    return temp;
  }

  function unshift(value) {
    const newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      newNode.next = list.head;
      list.head = newNode;
    }
    list.length++;
    return list;
  }

  function shift() {
    if (!list.head) return undefined;
    let temp = list.head;
    list.head = list.head.next;
    temp.next = null;
    list.length--;

    if (list.length === 0) {
      list.tail = null;
    }
    return temp;
  }

  function get(index) {
    if (index < 0 || index >= list.length) {
      return undefined;
    }
    let temp = list.head;

    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  function set(index, value) {
    let temp = get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  function insert(index, value) {
    if (index === 0) return unshift(value);
    if (index === list.length) return push(value);
    if (index < 0 || index > list.length) return false;

    const newNode = Node(value);
    let temp = get(index - 1);

    newNode.next = temp.next;
    temp.next = newNode;
    list.length++;
    return true;
  }

  function remove(index) {
    if (index === 0) return shift();
    if (index === list.length - 1) pop();
    if (index < 0 || index >= list.length) return undefined;
    const before = get(index - 1);
    const temp = before.next;
    before.next = temp.next;
    temp.next = null;
    list.length--;
    return temp;
  }

  function reverse() {
    let temp = list.head;
    list.head = list.tail;
    list.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < list.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return list;
  }

  return {
    push,
    pop,
    unshift,
    shift,
    get,
    set,
    insert,
    remove,
    reverse,
  };
}
