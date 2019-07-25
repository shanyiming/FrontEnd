//implement js debounce function

function debounce(fn, wait) {
    let timer;
    return ()=> {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn();
            //timer = null;
        }, wait);
  }
}

const testFunc = ()=> {
    console.log('Go Dodgers!');
}

const debouncedTestFunc = debounce(testFunc, 2000);

//exepect only one output 'Go Dodgers!' after 2000ms
debouncedTestFunc();
debouncedTestFunc();
debouncedTestFunc();
debouncedTestFunc();
debouncedTestFunc();