package main

import (
	"container/heap"
	"fmt"
	"math"
)

type Point struct {
	x, y int
}

type Node struct {
	point  Point
	cost   int
	index  int
	parent *Node
}

type PriorityQueue []*Node

func (pq PriorityQueue) Len() int           { return len(pq) }
func (pq PriorityQueue) Less(i, j int) bool { return pq[i].cost < pq[j].cost }
func (pq PriorityQueue) Swap(i, j int)      { pq[i], pq[j] = pq[j], pq[i]; pq[i].index = i; pq[j].index = j }
func (pq *PriorityQueue) Push(x interface{}) {
	n := x.(*Node)
	n.index = len(*pq)
	*pq = append(*pq, n)
}
func (pq *PriorityQueue) Pop() interface{} {
	old := *pq
	n := old[len(old)-1]
	*pq = old[0 : len(old)-1]
	return n
}

var directions = []Point{{0, 1}, {1, 0}, {0, -1}, {-1, 0}} // Right, Down, Left, Up

func dijkstra(start, goal Point, grid [][]int) []Point {
	pq := &PriorityQueue{}
	heap.Init(pq)
	startNode := &Node{point: start, cost: 0}
	heap.Push(pq, startNode)
	
	costs := make(map[Point]int)
	costs[start] = 0
	parents := make(map[Point]*Node)
	
	for pq.Len() > 0 {
		current := heap.Pop(pq).(*Node)
		if current.point == goal {
			return reconstructPath(current)
		}
		
		for _, d := range directions {
			neighbor := Point{current.point.x + d.x, current.point.y + d.y}
			if isValid(neighbor, grid) {
				newCost := current.cost + 1
				if prevCost, found := costs[neighbor]; !found || newCost < prevCost {
					costs[neighbor] = newCost
					newNode := &Node{point: neighbor, cost: newCost, parent: current}
					heap.Push(pq, newNode)
					parents[neighbor] = current
				}
			}
		}
	}
	return nil // No path found
}

func reconstructPath(n *Node) []Point {
	var path []Point
	for n != nil {
		path = append([]Point{n.point}, path...)
		n = n.parent
	}
	return path
}

func isValid(p Point, grid [][]int) bool {
	if p.x < 0 || p.y < 0 || p.x >= len(grid) || p.y >= len(grid[0]) || grid[p.x][p.y] == 1 {
		return false
	}
	return true
}

func main() {
	grid := [][]int{
		{0, 0, 0, 0, 1},
		{1, 1, 0, 1, 0},
		{0, 0, 0, 0, 0},
		{0, 1, 1, 1, 0},
		{0, 0, 0, 0, 0},
	}
	start := Point{0, 0}
	goal := Point{4, 4}
	
	path := dijkstra(start, goal, grid)
	if path != nil {
		fmt.Println("Path:", path)
	} else {
		fmt.Println("No path found.")
	}
}
