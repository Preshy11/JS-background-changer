const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ["red", "blue", "black", "pink", "yellow", "white", "purple", "peach", "black"];

body.style.backgroundColor = "pink";

/*button.addEventListener("click", buttonChange)

function buttonChange() {
    const colorChange = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorChange];
}*/

button.addEventListener("click", buttonChange => {
    const colorChange = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorChange];
});



