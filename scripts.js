// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    const flightStatus = document.querySelector("#flightStatus");
    const shuttleBackground = document.querySelector("#shuttleBackground");
    const shuttleHeight = document.querySelector("#spaceShuttleHeight");
    const shuttle = document.querySelector("#rocket");
    const takeOffButton = document.querySelector("#takeoff");
    const landingButton = document.querySelector("#landing");
    const abortButton = document.querySelector("#missionAbort");
    const up = document.querySelector("#up");
    const down = document.querySelector("#down");
    const right = document.querySelector("#right");
    const left = document.querySelector("#left");

    let shuttlePixelHeight = Number(shuttle.style.top.slice(0, shuttle.style.top.length - 2));
    let shuttlePixelLeft = Number(shuttle.style.left.slice(0, shuttle.style.left.length - 2));
    let shuttlePixelRight = Number(shuttle.style.right.slice(0, shuttle.style.right.length - 2));

    takeOffButton.addEventListener('click', function() {
        let confirmation = window.confirm("Confirm that theshuttle is ready for takeoff.");
        if (confirmation) {
            flightStatus.textContent = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttle.style.top = shuttlePixelHeight - 50 + 'px';
            let height = Number(shuttleHeight.textContent);
            shuttleHeight.textContent = height += 10000;
        }
    });

    landingButton.addEventListener('click', function() {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.textContent = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.textContent = 0;
        shuttle.style.top = "250px";
    });

    abortButton.addEventListener('click', function() {
       let confirmation = confirm( "Confirm that you want to abort the mission." );
       if (confirmation) {
           flightStatus.textContent = "Flight aborted";
           shuttleBackground.style.backgroundColor = "green";
           shuttleHeight.textContent = 0;
           shuttle.style.top = "250px";
       }
    });

});