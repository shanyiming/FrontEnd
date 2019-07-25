function printTasks(list) {
    time = 0;
    for (let i = 0; i < list.length; i++) {
        setTimeout(() => {
            console.log(list[i].Value, Date.now());
        }, time + list[i].Time)
        time += list[i].Time;
    }
}

let input = [{
    Value: 'a',
    Time: 2000
  },
  {
    Value: 'b',
    Time: 1000
  },
  {
    Value: 'c',
    Time: 3000
  },
  {
    Value: 'd',
    Time: 2000
  }
  ];
  
  printTasks(input);