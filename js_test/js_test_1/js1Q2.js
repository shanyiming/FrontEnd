const threeSum = nums => {

    let n = nums.length;
    let res = [];
    nums.sort((a,b) => a - b);
    
    for (let i = 0; i < n - 2; i++) {
        if (nums[i] + nums[i + 1] + nums[i + 2] > 0) {
            break;
        }
        if (nums[i] + nums[n - 2] + nums[n - 1] < 0) {
            continue;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = n - 1;
        while (left < right) {
             let temp = nums[i] + nums[left] + nums[right];
             if (temp === 0) {
                 res.push([nums[i], nums[left], nums[right]]);
                 while (left + 1 < right && nums[left] === nums[left + 1]) {
                      left += 1;
                 }
                 left += 1;
                 while (left < right - 1 && nums[right] == nums[right - 1]) {
                     right -= 1;
                 }
                 right -= 1;
             } else if (temp < 0) {
                  left += 1;
             } else {
                 right -= 1;
             }
        }
    }
    return console.log(res);
}

const nums = [-3, -1, -2, 1 , 2, 0, 3];
threeSum(nums);