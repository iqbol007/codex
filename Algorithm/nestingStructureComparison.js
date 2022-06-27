Array.prototype.sameStructureAs = (array = []) => {
    
};

// should return true
[1, 1, 1].sameStructureAs([2, 2, 2]);
[1, [1, 1]].sameStructureAs([2, [2, 2]]);

// should return false
[1, [1, 1]].sameStructureAs([[2, 2], 2]);
[1, [1, 1]].sameStructureAs([[2], 2]);

// should return true
[[[], []]].sameStructureAs([[[], []]]);

// should return false
[[[], []]].sameStructureAs([[1, 1]]);
