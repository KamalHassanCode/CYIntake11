let colorBox = document.getElementById("colorBox");
let changeButton = document.getElementById("changeButton");


changeButton.addEventListener("click", function () {
    colorBox.style.backgroundColor = "gray";
    colorBox.textContent = "Thanks for attending this course.";
});



