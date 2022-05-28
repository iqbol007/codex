package main

import "fmt"

func main() {
	var a int
	var b int
	var c *int
	a = 3
	b = a
	c = &a

	a = 1

	fmt.Println("a", a)
	fmt.Println("b", b)
	fmt.Println("c", *c)
}

func Calc(a, b int) (result int) {
	result = a + b
	return
}
