// 206. Reverse Linked List

// Solution

function reverseList(head) {
let prev = null;
    let curr = head;

    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}

reverseList([1, 2, 3, 4, 5]);
reverseList([1, 2]);
reverseList([]);
