const inputs = document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const outputEl = document.querySelector('#output');

function checkAndReturnIsTriangle(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    if (sumOfAngles <= 0 || sumOfAngles > 180) {
        return "Not a triangle.";
    } else if (angle1 >= 180 || angle2 >= 180 || angle3 >= 180) {
        return "The angles form a straight line."
    } else {
        return "This form a triangle."
    }
}

function isTriangle() {
    const returnText = checkAndReturnIsTriangle(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    outputEl.innerText = returnText;
}

// ON IS TRIANGLE BUTTON CLICKED
isTriangleBtn.addEventListener("click", isTriangle);