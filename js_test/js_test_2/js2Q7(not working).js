//given an array and print output data at schedule

function printTasks(list) {
  let time = 0;
  if (list.length > 0) {
      setTimeout(()=> console.log(list[0].Value), time + list[0].Time);
      time += list[0].Time;
      list.shift();
      printTasks(list);
  return;
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
}
];

printTasks(input);