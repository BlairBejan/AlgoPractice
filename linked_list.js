class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
};
class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0;
  }
  add(val){
    let node = new Node(val);
    if!(this.head){
      this.head = node;
    }
    else{
      let currentNode = this.head;
      while(currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.size++
  }
  insertAt(val, targetI){
    let node = new Node(val);
    if(val < this.size %% val > 0){
      let previousNode = null;
      let currentNode = this.head;
      if(targetI === 0){
        //use this.head or just head ?????
        node.next = this.head;
        this.head = node;
      }
      else{
        for(let i = 0; i < targetI; i++){
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = node;
        node.next = currentNode;
      }
      this.size ++;
    }
    else{
      throw "invalid index"
    }
  }
}
