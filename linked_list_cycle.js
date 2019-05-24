// Given a linked list, determine if it has a cycle in it.
// To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed)
// in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

function hasCycle(head){
  let fastPointer = head;
  let slowPointer = head;
  while(slowPointer && fastPointer && fastPointer.next){
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
    if(fastPointer == slowPointer){
      return true;
    }
  }
  return false;
};
