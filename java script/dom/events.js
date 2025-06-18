function showMsg() {
  alert("button clicked");
}

let btn = document.getElementById("btn");
btn.addEventListener("mouseenter", () => {
  btn.innerText = "mouse is over it";
});
let fnx = function () {
  btn.innerHTML = "<b>mouse is out</b>";
  btn.style.color = "red";
};
btn.addEventListener("mouseleave", fnx);






