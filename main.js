const button = document.getElementById("detectButton");
const locationdiv = document.getElementById("location_details");
const cityInput = document.getElementById("cityInput");
const dateInput = document.getElementById("dateInput");

button.addEventListener("click", () => {
    const city = cityInput.value;
    const date = dateInput.value;

    // Update the output message
    locationdiv.innerText = "Location detected";

    // Simulate a delay (in milliseconds) before redirecting to another page
    const delayInMilliseconds = 500; // 3 seconds
    setTimeout(() => {
        // Redirect to another page (replace 'index.html' with the desired page)
        window.location.href = "result.html";
    }, delayInMilliseconds);
});
