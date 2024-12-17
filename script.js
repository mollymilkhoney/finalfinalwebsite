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
// below is the code for the contact form in main element
const main = document.getElementById('column1');
const nextColumn = document.getElementById('column2');
const originalContent = main.innerHTML; // save original content from home
const columnOriginal = nextColumn.innerHTML; 

// function to reapply animation in column1 
function reapplyAnimations() {
    const textContent1 = main.querySelector('.text-content1');
    const textContent2 = main.querySelector('.text-content2');

    if (textContent1) {
        textContent1.classList.remove('visible'); 
        textContent1.classList.add('hidden'); 
        setTimeout(() => {
            textContent1.classList.add('visible'); 
        }, 1000);
    }

    if (textContent2) {
        textContent2.classList.remove('visible'); 
        textContent2.classList.add('hidden'); 
        setTimeout(() => {
            textContent2.classList.add('visible'); 
        }, 2000);
    }
}

// show contact form when nav button is clicked
document.getElementById('show-contact-form').addEventListener('click', () => {
    const contactForm = document.getElementById('contact-form');
    const weatherApp = document.getElementById('weather');
    const column3 = document.getElementById('column3');

    if (!contactForm || !weatherApp || !column3) {
        console.error("elements not found, beep boop");
        return;
    }

    // clear content and show contact form & weather app
    main.innerHTML = ''; // clear content of column1
    nextColumn.innerHTML = ''; // clear content of column2
    column3.style.display = 'none'; // hide column3
    contactForm.style.display = 'block'; // make form visible
    weatherApp.style.display = 'block'; // make weather app visible
    main.appendChild(contactForm); // add form to column1
    nextColumn.appendChild(weatherApp); // add weather app to column2
});

// reset to original content when home button is clicked
document.getElementById('home-button').addEventListener('click', () => {
    const column3 = document.getElementById('column3');
    const contactForm = document.getElementById('contact-form');
    const weatherApp = document.getElementById('weather');

    if (!column3 || !contactForm || !weatherApp) {
        console.error("elements not found, beep boop");
        return;
    }

    // reset original main content
    main.innerHTML = originalContent; // reset column1
    nextColumn.innerHTML = columnOriginal; // reset column2
    column3.style.display = 'block'; // show column3
    contactForm.style.display = 'none'; // hide contact form
    weatherApp.style.display = 'none'; // hide weather app
    reapplyAnimations(); // reapply animations to column1 aka call the animation function^
});


//------------------------------------------------------------------
//below is advent calendar javascript

document.getElementById("present1").addEventListener("click", () => {
    console.log("Before toggle:", 					      document.getElementById("present1").textContent); 
 const button = document.getElementById("present1"); 
     button.textContent = button.textContent === "🎁" ? "🕊️" : "🎁";
     console.log("After toggle:", button.textContent); 
 });
 
 //-----------------
 document.getElementById("present2").addEventListener("click", () => {
    console.log("Before toggle:", 					      document.getElementById("present2").textContent); 
 const button = document.getElementById("present2"); 
     button.textContent = button.textContent === "🎁" ? "🍷" : "🎁";
     console.log("After toggle:", button.textContent); 
 });
 
 //-----------------
 document.getElementById("present3").addEventListener("click", () => {
    console.log("Before toggle:", 					      document.getElementById("present3").textContent); 
 const button = document.getElementById("present3"); 
     button.textContent = button.textContent === "🎁" ? "🦃" : "🎁";
     console.log("After toggle:", button.textContent); 
 });
 
 //-----------------
 document.getElementById("present4").addEventListener("click", () => {
    console.log("Before toggle:", 					      document.getElementById("present4").textContent); 
 const button = document.getElementById("present4"); 
     button.textContent = button.textContent === "🎁" ? "❄️" : "🎁";
     console.log("After toggle:", button.textContent); 
 });
 
 //-----------------
 document.getElementById("present5").addEventListener("click", () => {
    console.log("Before toggle:", 					      document.getElementById("present5").textContent); 
 const button = document.getElementById("present5"); 
     button.textContent = button.textContent === "🎁" ? "☃️" : "🎁";
     console.log("After toggle:", button.textContent); 
 });
 
 //------------------
 document.getElementById("present6").addEventListener("click", () => {
    console.log("Before toggle:", 					      document.getElementById("present6").textContent); 
 const button = document.getElementById("present6"); 
     button.textContent = button.textContent === "🎁" ? "🌟" : "🎁";
     console.log("After toggle:", button.textContent); 
 });
 
 //------------------
 document.getElementById("present7").addEventListener("click", () => {
    console.log("Before toggle:", 					      document.getElementById("present7").textContent); 
 const button = document.getElementById("present7"); 
     button.textContent = button.textContent === "🎁" ? "🔔" : "🎁";
     console.log("After toggle:", button.textContent); 
 });
 
 //------------------
 document.getElementById("present8").addEventListener("click", () => {
    console.log("Before toggle:", 					      document.getElementById("present8").textContent); 
 const button = document.getElementById("present8"); 
     button.textContent = button.textContent === "🎁" ? "🍪" : "🎁";
     console.log("After toggle:", button.textContent); 
 });
 
 //----------------
 document.getElementById("present9").addEventListener("click", () => {
    console.log("Before toggle:", 					      document.getElementById("present9").textContent); 
 const button = document.getElementById("present9"); 
     button.textContent = button.textContent === "🎁" ? "🦌" : "🎁";
     console.log("After toggle:", button.textContent); 
 });
 
 //-----------------
 document.getElementById("present10").addEventListener("click", () => {
    console.log("Before toggle:", 					      document.getElementById("present10").textContent); 
 const button = document.getElementById("present10"); 
     button.textContent = button.textContent === "🎁" ? "🎄" : "🎁";
     console.log("After toggle:", button.textContent); 
 });

 //--------------------------------------------------------------------
// below is the code for weather api on the contact page

getWeather(); // call the function

function getWeather() {
    const apiKey = "2cd93f314e9d63c5646320d5c0f733c2"; // api key I registered
    const zip = "55416"; // always my zip code

    // weatherstack.com api 'endpoint'
    let endpoint = "https://api.weatherstack.com/current";
    let queryString = "?access_key=" + apiKey + "&query=" + zip + "&units=f"; // 'f' = fahrenheit 
    let url = endpoint + queryString;

    // request API
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", responseReceivedHandler);
    xhr.responseType = "json";
    xhr.open("GET", url);
    xhr.send();
}

function responseReceivedHandler() {
    let weatherInfo = document.getElementById("weather");

    if (this.status === 200 && this.response.current) {
        weatherInfo.innerHTML =
            "<h3>📍minneapolis weather</h3>" + // Adding the H3 header
            "<p>current temp: " + this.response.current.temperature + " &deg;F</p>" +
            "<p>humidity: " + this.response.current.humidity + "%</p>";
    } else {
        weatherInfo.innerHTML = "shucks, weather unavailable atm.";
    }
}
