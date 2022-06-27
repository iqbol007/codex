package main

import (
	"fmt"
	"strings"
)

func main() {
	res := solution([]int{-13, -7, -6, -5, 4, 5, 6, 7, 16, 17, 23, 24, 25, 26, 27, 36, 37, 44})
	println(res)
	res = solution([]int{-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20})
	println(res)

}

func solution(list []int) string {
	var result string = ""
	var a, b float64
	for i := range list {
		a = float64(list[i])
		var nextItem int
		nextItem = i + 1
		if nextItem+1 > len(list) {
			break
		}
		b = float64(list[nextItem])

		if len(result) == 0 {
			result += fmt.Sprint(list[0], ",")
		}

		if a < 0 && b < 0 {
			if b-1 == a || a+1 == b || a == 0 && b == 1 || a == -1 && b == 0 {
				result += fmt.Sprint(b, ",")
			} else {
				result += fmt.Sprint("§")
				result += fmt.Sprint(b, ",")
			}

		} else {
			if a == b+1 || a+1 == b {
				result += fmt.Sprint(b, ",")
			} else {
				result += fmt.Sprint("§")
				result += fmt.Sprint(b, ",")
			}
		}
	}

	split := strings.Split(result, "§")
	result = ""
	for _, s := range split {
		s1 := strings.Split(s[:len(s)-1], ",")
		if len(s1) == 1 {
			result += s1[0] + ","
		} else {
			if len(s1) == 2 {
				result += s1[0] + "," + s1[len(s1)-1] + ","
			} else {
				result += s1[0] + "-" + s1[len(s1)-1] + ","
			}
		}
	}
	return result[:len(result)-1]
}
