class MinHeap{
  constructor(arr){
    this.heap = [null];
  }
  heapify(idx){
    if(this.heap[idx] < this.heap[Math.floor(idx/2)]){

    }
  }
  insert(num){
    this.heap.push(num);
    heapify(this.heap.length-1);
  }
}
