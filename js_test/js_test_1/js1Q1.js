let q1 = [1, 2, [3, 4, [5,6,0]], 4, [3,7], 0];

const dfsFlatten = arr => {
  let res = [];
  const helper = arr => {
    for (let i = 0; i < arr.length; i++) {
      let element = arr[i];
      if (Array.isArray(element))
       {
        helper(element);
      } else {
        res.push(arr[i]);
      }
    }
  }
  helper(arr);
  return console.log(res);
}

const bfsFlatten = arr => {
    let res = [];
    let queue = arr;
    while (queue.length) {
        let pop = queue.shift();
        if (Array.isArray(pop)) {
            queue = queue.concat(pop);
        } else {
            res.push(pop)
        }
    }
    return console.log(res);
}
dfsFlatten(q1);
bfsFlatten(q1);