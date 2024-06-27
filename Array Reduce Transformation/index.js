/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let a=init
    for (var i=0;i<nums.length;i++){
        a=fn(a,nums[i])
    }
    return a
};
