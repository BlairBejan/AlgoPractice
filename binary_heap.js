class MinHeap{
  constructor(arr){
    this.heap = [null];
  }
  heapify(idx){
    if(this.heap[idx] < this.heap[Math.floor(idx/2)]){
      let temp = this.heap[idx];
      this.heap[idx] = this.heap[Math.floor(idx/2)];
      this.heap[Math.floor(idx/2)] = temp;
      idx = Math.floor(idx/2);
      heapify(idx);
    }
  }
  insert(num){
    this.heap.push(num);
    heapify(this.heap.length-1);
  }
}
