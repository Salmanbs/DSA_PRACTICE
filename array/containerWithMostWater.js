/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

    let initialArea = 0
    for (i = 0; i < height.length; i++) {
        for (j = i + 1; j < height.length; j++) {
            const area = Math.min(height[i], height[j]) * (j - i)
            if (area > initialArea) {
                initialArea = area
            }
        }
    }

    return initialArea
};


testCase1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]

console.log(maxArea(testCase1), 'testCase')