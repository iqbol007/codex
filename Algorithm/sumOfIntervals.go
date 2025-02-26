package main

import "fmt"

//sumIntervals( [
//[1, 5],
//[10, 20],
//[1, 6],
//[16, 19],
//[5, 11]
//] ) => 19

func main() {
	intervals := [][]int{
		{1, 5},
		{10, 20},
		{1, 6},
		{16, 19},
		{5, 10},
	}
	fmt.Println(sumOfIntervals(intervals))
}

func sumOfIntervals(intervals [][]int) int {
	if len(intervals)%2 != 0 {
		intervals = append(intervals, []int{0, 0})
	}

	j := (len(intervals) / 2) - 1
	for i := 0; i < len(intervals)/2; i++ {
		j++
		fmt.Println(intervals[i], intervals[j])
	}

	return 0
}
