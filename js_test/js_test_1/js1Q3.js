const permute = nums => {

    let res = [];
    const dfs = (nums, temp) => {
        if (temp.length === nums.length) {
            res.push(temp.slice());
        }
        for (let i = 0; i < nums.length; i++) {
            if (temp.includes(nums[i])) {
                continue;
            }
            temp.push(nums[i]);
            dfs(nums, temp);
            temp.pop();
        }
    }
    dfs(nums, []);
    return console.log(res);
}

let nums = [1, 2, 3];
permute(nums);