class maxHeap{
  constructor(arr){
    if(arr){
      this.heap = createHeap(arr);
    }
    else{
      this.heap = [null];
    }
  };
  createHeap(arr){
    if(arr[0]){
      arr.unshift(null);
    }
    
  }
}
