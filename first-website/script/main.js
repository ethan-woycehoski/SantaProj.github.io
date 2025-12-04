// Programmed by: Ethan Woycehoski
// stores a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");
// Update the heading to say this instead
myHeading.addEventListener("click", () => {
    const myText = myHeading;
    if (myText == "Santa Claus Is Ready!") {
        myHeading.setAttribute(myHeading.textContent, "Hello Carley!");
    } else {
        myHeading.textContent("Hello Allison!");
    }

});
