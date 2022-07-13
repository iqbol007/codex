package main

import "fmt"

func main() {
	val := []int{10, 15, 20}

	e := minCostClimbingStairs(val)
	fmt.Println(e)
}

func minCostClimbingStairs(cost []int) (res int) {
	end := len(cost) - 1
	for i := 0; i < len(cost); i++ {
		if i == end {
			break
		}
		a := cost[i]
		b := cost[i+1]
		if a > b {
			res += b
		}
		if a < b {
			res += a
		}
		if a == b {
			res += b
		}
		i++
	}

	return
}
