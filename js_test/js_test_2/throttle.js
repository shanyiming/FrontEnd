//implement js throttle function

function throttle(fn, limit) {
    let lastCall = 0;
    return function (...args) {
        let now = (new Date).getTime();
        if (now - lastCall < limit) {
            return;
        }
        lastCall = now;
        return fn(...args);
  }
}

const testFunc = ()=> {
    console.log('Go Dodgers!');
}

const throttledTestFunc = throttle(testFunc, 5000);

//set limit to 5 ms, called function 10,000 times, only 2 were excuted. (result depending on performance.)
for (let i = 0; i < 10000; i++) {
    throttledTestFunc();
}