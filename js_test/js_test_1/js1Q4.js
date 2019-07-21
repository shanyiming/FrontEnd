const merge = intervals => {
    
    let res = [];
    
    intervals.sort(function(a, b) {
        return a[0] - b[0];
    });
    
    for (let i = 0; i < intervals.length; i++) {
        let preElement = res[res.length - 1];
        if (i == 0 || intervals[i][0] > preElement[1]) {
            res.push(intervals[i]);
        } else {
            preElement[1] = Math.max(preElement[1], intervals[i][1]);
        }
    }
    
    return console.log(res);
};

intervals = [[1,3],[2,6],[8,10],[15,18]];
merge(intervals);