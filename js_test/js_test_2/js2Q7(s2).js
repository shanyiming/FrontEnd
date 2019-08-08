function printTasks(list) {
  let index = 0;
  function printTask() {
    if(!list[index]) {
      return;
    }
    setTimeout(() => {
      console.log(list[index].Value);
      index++;
      printTask();
    }, list[index].Time);
  }
  printTask();
  return;
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