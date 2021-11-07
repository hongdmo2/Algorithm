/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let slow = head, fast = head
    while(fast !== null && fast.next !== null){
        slow = slow.next
        console.log("slow:",slow)
        fast = fast.next.next
        console.log("fast:",fast)
    }
    return slow
};

n= [1,2,3,4,5]
console.log(middleNode(n));