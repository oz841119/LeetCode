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
   * @param {*} val 
   * @returns New linked list
   */
  push(val) { 
    const newNode = new Node(val)
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
    if(!this.head) return
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
    if(this.head === null) return
    const currHead = this.head
    this.head = this.head.next
    this.lenght--
    return currHead
  }

  /**
   * 在head新增一個節點
   * @param {*} val 
   * @returns 新增的節點
   */
  unshift(val) {
    const newNode = new Node(val)
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

  get(index) {}   // 取node
  set(index, val) {}  // 設置某個node的value
  insert(index, val) {}   // 將node插入至某處
  remove(index) {}  // 刪除某一節點

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

console.log(`=== pop方法 ===`);
console.log(myLL.pop())

console.log(`=== shift方法 ===`);
console.log(myLL.shift());

console.log(`=== unshift方法 ===`);
console.log(myLL.unshift(5));

console.log('=== 最終 ===');
console.log(myLL.toArray());
console.log(myLL);