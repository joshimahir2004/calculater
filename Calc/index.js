let string = " ";
let buttons = document.querySelectorAll(".button");
let input = document.getElementById("input");
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if(e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    } 
    else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  })
});
function cancle() {
  string = " ";
  input.value = " ";
}
