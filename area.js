const sideInput = document.querySelectorAll(".side-input");
const areaBtn = document.querySelector("#area-btn");

const outputEl = document.querySelector("#output");


function calculateProductOfSides(b, h) {
    const productOfSides = b * h;
    // console.log(productOfSides)

    return productOfSides;

}

function calculateArea() {
    const productOfSides = calculateProductOfSides(Number(sideInput[0].value), Number(sideInput[1].value));
    const areaOfTriangle = (productOfSides) / 2
    // console.log(areaOfTriangle);
    outputEl.innerText = "The Area of the Triangle is " +
        areaOfTriangle;
    // calculateProductOfSides(2, 3)
}

areaBtn.addEventListener("click", calculateArea);