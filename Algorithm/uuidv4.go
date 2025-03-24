package main

import (
	"fmt"
	"math/rand"
)

func generateUUID() string {
	const chars = "89ab"
	b := make([]byte, 16)

	for i := range b {
		b[i] = byte(rand.Intn(256))
	}

	b[6] = (b[6] & 0x0F) | 0x40 // Version 4
	b[8] = (b[8] & 0x3F) | 0x80 // Variant

	return fmt.Sprintf("%08x-%04x-%04x-%04x-%012x",
		b[0:4], b[4:6], b[6:8], b[8:10], b[10:16])
}
