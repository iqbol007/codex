/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	nums2.forEach((el) => {
		nums1.push(el);
	});
	nums1.some((a, b) => b - a);
	nums1 = nums1.filter((f) => f);
	console.log(nums1);
};

// nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
