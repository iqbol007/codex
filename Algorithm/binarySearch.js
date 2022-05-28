const array = [22, 33, 21, 2, 25, 2, 12, 13, 66, 78, 86];
let count = 0;

function binarySearch(array, item) {
	let start = 0;
	let end = array.length;
	let middle;
	let found = false;
	let position = -1;
	while (!found && start <= end) {
		count++;
		middle = Math.floor((start + end) / 2);
		if (array[middle] === item) {
			position = middle;
			return position;
		}
		if (item < array[middle]) {
			end = middle - 1;
		} else {
			start = middle + 1;
		}
	}
	return position;
}
