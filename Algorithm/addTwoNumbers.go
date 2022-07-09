package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func main() {

	l1 := ListNode{
		Val: 2,
		Next: &ListNode{
			Val: 4,
			Next: &ListNode{
				Val: 9,
			},
		},
	}

	l2 := ListNode{
		Val: 5,
		Next: &ListNode{
			Val: 6,
			Next: &ListNode{
				Val: 4,
				Next: &ListNode{
					Val: 9,
				},
			},
		},
	}

	// n1 := []int{2, 4, 9}
	// n2 := []int{5, 6, 4, 9}
	e := addTwoNumbers(&l1, &l2)
	fmt.Println(e.Val)
	fmt.Println(e.Next.Val)
	fmt.Println(e.Next.Next.Val)
	fmt.Println(e.Next.Next.Next.Val)
	// fmt.Println(e.Next.Next.Next.Next.Val)
}
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	return arrToListNode(sumLarge(all(l1), all(l2)))
}

func reverse(arr []int) (res []int) {
	length := len(arr) - 1
	for i := range arr {
		res = append(res, arr[length-i])
	}
	return
}

func sumLarge(n2, n3 []int) (res []int) {
	n1 := []int{}
	if len(n3) >= len(n2) {
		n1 = reverse(n3)
	} else {
		n1 = reverse(n2)
		n2 = n3
	}

	len1 := len(n1) - 1
	residue := 0

	for i := range n1 {
		next := len1 - i
		v := 0
		if i < len(n2) {
			v = n2[i]
		}
		val := n1[next] + v + residue
		tail := 0
		if val >= 10 {
			tail = val % 10
			if tail >= 10 {
				residue = tail / 10
				tail = tail % 10
			}
			res = append(res, tail)
			residue = val / 10

			if len(n1)-1 == i && residue > 0 {
				res = append(res, residue)
			}
			continue
		} else {
			residue = 0
		}
		residue = 0
		res = append(res, val)
	}
	return res
}

func all(list *ListNode) (all []int) {
	currentNode := list
	all = append(all, currentNode.Val)
	for currentNode.Next != nil {
		currentNode = currentNode.Next
		all = append(all, currentNode.Val)
	}
	return all
}

func arrToListNode(arr []int) *ListNode {

	res := []int{}
	for _, v := range arr {
		res = append(res, v)
	}

	currentNode := &ListNode{}
	for i := range res {

		AddBack(res[i], currentNode)
	}

	currentNode = currentNode.Next

	return currentNode
}

func AddBack(n int, s *ListNode) {

	ele := &ListNode{
		Val: n,
	}

	current := s
	for current.Next != nil {
		current = current.Next
	}
	current.Next = ele
}
