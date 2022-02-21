/*  Linked List : 
 *    串列不必使用連續的記憶體空間，不必事先指定串列大小(?)
 *    新增及刪除節點時，其他索引不會改變
*/

// 建構Node(節點)類
class Node {
  constructor(item) {
    this.item = item
    this.next = null  // 下一個節點 next將貫穿整個Linked List並依賴next找到下一個值
  }
}

/* ==================
 * 建構單向Linked List
 * ==================
 */
class SinglyLinkedList {
  constructor() {   // 初始化
    this.head = null
    this.tail = null
    this.lenght = 0
  }

  /**
   * 新增一個節點到尾端
   * @param {*} item 
   * @returns New linked list
   */
  push(item) { 
    const newNode = new Node(item)
    if(!this.head) { // 當頭部沒有節點時
      this.head = newNode
      this.tail = newNode
    }else { 
      this.tail.next = newNode // 先將當前尾部的next指向新節點 留下引用依賴
      this.tail = newNode // 再將當前尾部替換成新節點 
      // 參考: https://stackoverflow.com/questions/70125588/how-does-this-tail-next-adds-node-to-this-head
    }
    this.lenght++
    return this
  } 

  /**
   * 刪除Linked list最後一個節點
   * @returns 被刪除的節點
   */
  pop() { 
    if(!this.head) return this.emptyLinkedList()
    let currNode = this.head
    if(this.head === this.tail) { // 當節點只有一個的時候
      this.head = null
      this.tail = null
      this.lenght--
      return currNode
    }
    let newTill = null
    while(currNode) {
      if(currNode.next != null) {
        newTill = currNode
        currNode = currNode.next
      }else {
        this.tail = newTill
        this.tail.next = null
        this.lenght--
        return currNode
      }
    }
  } 

  /**
   * 刪除第一個節點
   * @returns 被刪除的節點
   */
  shift() {
    if(this.head === null) return this.emptyLinkedList()
    const currHead = this.head
    this.head = this.head.next
    this.lenght--
    return currHead
  }

  /**
   * 在head新增一個節點
   * @param {*} item 
   * @returns 新增的節點
   */
  unshift(item) {
    const newNode = new Node(item)
    if(this.head === null) {
      this.head = newNode
      this.tail = newNode
    }else {
      const currHead = this.head
      this.head = newNode
      this.head.next = currHead
    }
    this.lenght++
    return this.head
  }

  /**
   * 傳入想要獲取的節點
   * @param {Number} index 第一節點的index為0
   * @returns 取得的節點 || Undefined
   */
  get(index) {
    if(index < 0 || index >= this.lenght) return this.overBound(index)
    let counter = 0
    let currNode = this.head
    while(counter !== index) {
      currNode = currNode.next
      counter++
    }
    return currNode
  }

  /**
   * 修改節點的值
   * @param {Number} index 第一節點的index為0
   * @param {*} item 要更新的值
   * @returns 
   */
  set(index, item) {
    const targetNode = this.get(index)
    targetNode.item = item
    return this
  }

  /**
   * 新增一個節點至指定位置
   * @param {Numbet} index 要插入的索引位置
   * @param {*} item 要插入的值
   * @returns 
   */
  insert(index, item) {
    if(index < 0 || index >= this.lenght) return this.overBound(index)
    if(index === 0) return this.unshift(item)
    if(index === this.lenght) return this.push(item)
    const newNode = new Node(item)
    newNode.next = this.get(index) // 該節點的next更新為原表中的該節點
    let preNode = this.get(index - 1) // 目標索引的前一個節點
    preNode.next = newNode // 該節點的next更新為新節點
    this.lenght++
    return this
  }

  /**
   * 
   * @param {Number} index 要刪除的索引位置
   * @returns 被刪除的節點
   */
  remove(index) {
    if(index < 0 || index >= this.lenght) return this.overBound(index)
    if(index === 0) return this.shift()
    if(index === this.lenght - 1) return this.pop()
    const preNode = this.get(index - 1) 
    preNode.next = this.get(index + 1)
    this.lenght -- 
    return this
  }

  /**
   * 判斷Linked List是否沒有節點
   * @returns boolean
   */
  isEmpty() {
    return this.lenght === 0
  }

  /**
   * 將Linked List的節點值以陣列方式呈現
   * @returns Array
   */
  toArray() {
    const arr = []
    let currNode = this.head
    while(currNode) {
      arr.push(currNode.item)
      currNode = currNode.next
    }
    return arr
  }

  /* 
   * =======
   * 訊息提示
   * =======
  */
  overBound(index) {
    console.warn(`未檢測到Index，請確認Param - Index:[${index}] 是否存在`);
    return
  }

  emptyLinkedList() {
    console.warn('Linked list is empty');
    return
  }
}



/* 
 * ==================
 * 測試
 * ==================
 */


let myLL = new SinglyLinkedList

myLL.push(25)
myLL.push(50)
myLL.push(75)
myLL.push(100)
myLL.push(150)

console.log(`=== pop方法 ===`);
console.log(myLL.pop())

console.log(`=== shift方法 ===`);
console.log(myLL.shift());

console.log(`=== unshift方法 ===`);
console.log(myLL.unshift(5));

console.log(`=== get方法 ===`);
console.log(myLL.get(2));

console.log(`=== set方法 ===`);
console.log(myLL.set(3, '被修改'));

console.log(`=== insert方法 ===`);
console.log(myLL.insert(2, '插入'));

console.log(`=== remove方法 ===`);
console.log(myLL.remove(3));



console.log('=== 最終 ===');
console.log(myLL);
console.log(`是否為空Linked list: ${myLL.isEmpty()}`);
console.log(`Linked list轉數組: [${myLL.toArray()}]`);