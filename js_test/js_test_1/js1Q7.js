const find132pattern = nums => {
    let [stack, s3] = [[], -Infinity];
    for (let i = nums.length -1; i >= 0; i--) {
        if (nums[i] < s3) {
            return console.log(true);
        }
        while (stack[stack.length - 1] < nums[i]) {
            s3 = stack.pop();
        }
        stack.push(nums[i]);
    }
    return console.log(false);
};

test = [1, 2, 4, 3];
find132pattern(test);