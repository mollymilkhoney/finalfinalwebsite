//below is for my bee that follows the curser
document.addEventListener('mousemove', (event) => {
    // get the main element
    const mainElement = document.querySelector('main');

    // calculate the position of the mouse relative to the viewport
    const xPercent = (event.clientX / window.innerWidth) * 100;
    const yPercent = (event.clientY / window.innerHeight) * 100;

    // update the background position to follow the cursor
    mainElement.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
});



//---------------------------------------------------------------------
//below is for the main section two divs appearing slowly after eachother
document.addEventListener('DOMContentLoaded', () => {
    // selects elements
    const textContent1 = document.querySelector('.text-content1');
    const textContent2 = document.querySelector('.text-content2');

    // shows element 1 after 1 second
    setTimeout(() => {
        textContent1.classList.add('visible');
    }, 1000); // 1000ms = 1 second

    // show element 2 after 2 seconds
    setTimeout(() => {
        textContent2.classList.add('visible');
    }, 2000); // 2000ms = 2 seconds
});


// ------------------------------------------------------------------
// below is the code for changing from light mode to dark mode
document.getElementById("toggle-colors").addEventListener("click", () => {
    console.log("Before toggle:", document.getElementById("toggle-colors").textContent); // debug statement to check what the content is 
    document.body.classList.toggle("invert-colors");

    const button = document.getElementById("toggle-colors"); // these 3 lines are changing the moon to sun & back
    button.textContent = button.textContent === "☽" ? "☼" : "☽";
    console.log("After toggle:", button.textContent); // debug statement to check what the content is
});


// ------------------------------------------------------------------


