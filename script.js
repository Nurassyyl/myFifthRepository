const btn = document.getElementById("e_btn");
const text = document.getElementById("text");
const square = document.getElementById("square");
const circle = document.getElementById("circle");
const range = document.getElementById("range");
const range_span = document.getElementById("range-span");

text.addEventListener("input", function (event) {
    console.log(event.target.value);
        btn.addEventListener('click', function () {
        square.style.backgroundColor = event.target.value;
        circle.style.display = "none";
    })    
});

range.addEventListener('input', function (event) {
    range_span.textContent = event.target.value;
    circle.style.width = event.target.value + "%";
    circle.style.height = event.target.value + "%";
})





