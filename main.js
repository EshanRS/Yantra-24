const button = document.querySelector("button");
const locationdiv = document.getElementById("location_details");

button.addEventListener("click", () => {
    if (navigator.geolocation) {
        button.innerText = "Allow To Detect Location";
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
        button.innerText = "Your Browser Does Not Support";
    }
});

function onSuccess(position) {
    button.innerText = "Detecting Your Location...";
    console.log(position);
    let { latitude, longitude } = position.coords;
    console.log(latitude, longitude);
    //https://api.opencagedata.com/geocode/v1/json?q=52.3877830%2C9.7334394&key=YOUR-API-KEY
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apikey}`)
        .then(response => response.json()).then(result => {
            let alldetails = result.results[0].components;
            let { county, postcode, country } = alldetails;
            locationdiv.innerText = `${county}, ${postcode}, ${country}`;
            console.table(alldetails);
            button.innerText = "Allow To Detect Location";
        }).catch(error => console.error("Error fetching data:", error));
}

function onError(error) {
    if (error.code == 1) {
        button.innerText = "You Denied Request";
    } else if (error.code == 2) {
        button.innerText = "Location Not Available";
    } else {
        button.innerText = "Something Went Wrong";
    }
}

button.setAttribute("disabled", "true");
