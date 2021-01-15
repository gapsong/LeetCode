/**
 * @param {number} n
 * @return {number}
 */
/*
    nums[0] = 0
    nums[1] = 1
    nums[2 * i] = nums[i] when 2 <= 2 * i <= n
    nums[2 * i + 1] = nums[i] + nums[i + 1] when 2 <= 2 * i + 1 <= n
*/

var getMaximumGenerated = function(n) {
    
    
    if(n == 0){
        return 0
    }
    const nums = new Array(n + 1);
    nums[0] = 0;
    nums[1] = 1;
    nums[2] = 1;
    
    for(let i = 0; i <= n; i++){    
        if((2 * i) <= n){
            nums[2 * i] = nums[i]
        }
        if((2 * i + 1) <= n){
            nums[2 * i + 1] = nums[i] + nums[i + 1]
        }
    }
    
    return Math.max(...nums)
};

const prepareMax = function() {
    const final = new Array(101)
    for(let i = 0; i <= 100; i++){
        final[i] = getMaximumGenerated(i)
    }
    console.log(final)
}

prepareMax()
