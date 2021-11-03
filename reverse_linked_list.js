
// Linked List Data Structure
function Node(value, next = null){
    this.value = value;
    this.next = next;
}
// Q. 받은 Linked List 뒤집기
// ex) 1->2->3 => 3->2->1
// class LinkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     addFirst(data){
//         this.head = new Node(data, this.head)
//         /*
        
//         */
        
//     }
//     printListData(){
//         let current = this.head;
//         let print ="";
//         while(current){
//             print += current.data + ""
//             current = current.next
//         }
//         console.log(print)
//     }
//     printListDataNotReverse(){
        
//     }
// }
function solution(node){
    //여기부터 코딩 return=>linked list로
   let prev,temp = null; //or new Node()
   while(node){
    temp = node.next
    node.next = prev
    prev = node
    node = temp
   }
   return prev
}
let node1 = new Node(1);
node1.next = new Node(2);
node1.next.next = new Node(3);

// let a = new LinkedList()
// a.addFirst(1)
// a.addFirst(2)
// a.addFirst(3)
// a.printListData();
// let a1 = new LinkedList()
// a1.addFirst(1000)
// a1.addFirst(2000)
// a1.addFirst(3000)
// a1.addFirst(4000)
// a1.printListData();





//==================================================================================//
// function Node(value, next = null){
//     this.value = value;
//     this.next = next;
// }

// let node1 = new Node(1);
// node1.next = new Node(2);
// node1.next.next = new Node(3);


// let node2 = new Node(10);
// node2.next = new Node(20);
// node2.next.next = new Node(30);
// node2.next.next.next = new Node(40);
// node2.next.next.next.next = new Node(50);

// let node3 = new Node(100);
// node3.next = new Node(200);
// node3.next.next = new Node(300);
// node3.next.next.next = new Node(400);
// node3.next.next.next.next = new Node(500);

// let node4 = new Node(1);
// let cur = node4;
// for(let i = 0; i<20; i++){
//     cur.next = new Node(i*2);
//     cur = cur.next;
// }

// let node5 = new Node(50);
// cur = node5;
// for(let i = 1; i<10; i++){
//     cur.next = new Node(cur.value+i);
//     cur = cur.next;
// }

const ans = [
    [3, 2, 1],
    [50, 40, 30, 20, 10],
    [500, 400, 300, 200, 100],
    [38, 36, 34, 32, 30, 28, 26, 24, 22, 20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0, 1],
    [95, 86, 78, 71, 65, 60, 56, 53, 51, 50]
]


const test_case = [node1];

test_case.forEach((test,idx)=>{
    let res = solution(test);
    let res_arr = [];

    while(res){
        res_arr.push(res.value);
        res = res.next;
    }

    if(res_arr.length!=0){
        let test_result = res_arr.every((val,i)=>val===ans[idx][i]) ? 'Correct' : 'Wrong';
        console.log('========'+test_result+'=========');
        console.log('Use Answer : '+res_arr);
        console.log('Answer     : '+ans[idx]);
        console.log();
    }else{
        console.log('========Wrong=========');
        console.log('Use Answer : '+res_arr);
        console.log('Answer     : '+ans[idx]);
        console.log();
    }
});
