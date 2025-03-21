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
	point    Point
	cost     int
	heuristic int
	index    int
	parent   *Node
}

type PriorityQueue []*Node

func (pq PriorityQueue) Len() int           { return len(pq) }
func (pq PriorityQueue) Less(i, j int) bool { return pq[i].cost+pq[i].heuristic < pq[j].cost+pq[j].heuristic }
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

func heuristic(a, b Point) int {
	return int(math.Abs(float64(a.x-b.x)) + math.Abs(float64(a.y-b.y))) // Manhattan Distance
}

var directions = []Point{{0, 1}, {1, 0}, {0, -1}, {-1, 0}} // Right, Down, Left, Up

func aStar(start, goal Point, grid [][]int) []Point {
	pq := &PriorityQueue{}
	heap.Init(pq)
	startNode := &Node{point: start, cost: 0, heuristic: heuristic(start, goal)}
	heap.Push(pq, startNode)
	
	visited := make(map[Point]bool)
	
	for pq.Len() > 0 {
		current := heap.Pop(pq).(*Node)
		if current.point == goal {
			return reconstructPath(current)
		}
		
		if visited[current.point] {
			continue
		}
		visited[current.point] = true
		
		for _, d := range directions {
			neighbor := Point{current.point.x + d.x, current.point.y + d.y}
			if isValid(neighbor, grid) && !visited[neighbor] {
				heap.Push(pq, &Node{point: neighbor, cost: current.cost + 1, heuristic: heuristic(neighbor, goal), parent: current})
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
	
	path := aStar(start, goal, grid)
	if path != nil {
		fmt.Println("Path:", path)
	} else {
		fmt.Println("No path found.")
	}
}
