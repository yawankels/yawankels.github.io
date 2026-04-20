const myImage = document.querySelector("img");
const src1 = "images/Bensonlogo.png"

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === src1) {
        myImage.setAttribute("src", "images/BensonHighSchoolPrimaryLogoImage.webp");
    } else {
        myImage.setAttribute("src", src1);
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Welcome to 267 EMP, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome to 267 EMP, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
});