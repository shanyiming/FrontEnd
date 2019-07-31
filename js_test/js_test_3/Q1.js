let width = 1;
function go() {

  let elem = document.getElementById("barStatus");
  let elem1 = document.getElementById("p");
  let id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width += 1; 
      elem.style.width = width + '%';
      elem1.innerText = width + '%';
    }
  }

}