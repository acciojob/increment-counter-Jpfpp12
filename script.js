//your JS code here. If required.
document.getElementById("counter").innerText = "0";

document.getElementById("incrementBtn").addEventListener("click", () => {
    let counterElement = document.getElementById("counter");
    let currentValue = parseInt(counterElement.innerText);
    alert(counterElement.innerText = currentValue + 1);
	
});