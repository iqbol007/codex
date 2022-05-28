function numberOfPairs(gloves) {
	return gloves
		.reduce((acc, curr, i) => {
			if (!acc.length) {
				return [[curr]];
			}
			const existent = acc.find((c) => c.includes(curr));
			if (existent) {
				const index = acc.indexOf(existent);
				acc[index].push(curr);
				return acc;
			}
			acc.push([curr]);
			return acc;
		}, [])
		.map((s) => s.length)
		.map((s) => (s % 2 === 0 ? s : s - 1))
		.map((s) => s / 2)
		.reduce((acc, curr) => acc + curr, 0);
}

console.log(
	numberOfPairs([
		'Fuchsia',
		'Yellow',
		'Gray',
		'Navy',
		'Fuchsia',
		'Silver',
		'Gray',
		'Red',
		'Aqua',
		'Yellow',
		'Navy',
		'Yellow',
		'Silver',
		'Blue',
		'Olive',
		'Fuchsia',
		'Lime',
		'Maroon',
		'Maroon',
		'Maroon',
		'Maroon',
		'Green',
		'Lime',
		'Aqua',
		'Red',
		'Fuchsia',
		'Purple',
		'Fuchsia',
		'Navy',
		'Silver',
		'Maroon',
		'White',
		'White',
		'Blue',
		'Teal',
		'White',
		'Red',
		'Teal',
		'Maroon',
		'Blue',
		'Fuchsia',
		'Yellow',
		'Gray',
		'Silver',
		'Fuchsia',
		'Aqua',
		'Red',
		'Silver',
		'Teal',
		'Silver',
		'Teal',
		'Silver',
		'White',
		'Aqua',
		'Yellow',
		'Red',
		'Olive',
		'White',
		'Gray',
		'Silver',
		'Maroon',
		'Fuchsia',
		'Green',
		'Purple',
		'Green',
		'Blue',
		'Silver',
		'Purple',
		'Silver',
		'Gray',
		'Maroon',
		'Silver',
		'Red',
		'Black',
		'White',
		'Yellow',
		'White',
		'Olive',
		'Maroon',
		'Yellow',
		'Purple',
		'Black',
		'Purple',
		'White',
		'Blue',
		'Fuchsia',
		'Purple',
		'Gray',
		'Lime',
		'Aqua',
		'Navy',
		'Green',
		'Black',
		'Blue',
		'White',
	])
);
