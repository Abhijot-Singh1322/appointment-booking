let startTime;

function startWork(){
startTime = new Date();
document.getElementById("status").innerText = "Work started";
}

function stopWork(){
let end = new Date();
let duration = (end - startTime)/60000;

document.getElementById("status").innerText =
"Worked for " + duration.toFixed(2) + " minutes";
}

document.addEventListener("submit", function(e){

if(e.target.id === "bookingForm"){
e.preventDefault();

alert("Appointment booked!");

}

});