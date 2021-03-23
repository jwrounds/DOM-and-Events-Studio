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

    let shuttlePixelHeight = 250;
    let shuttlePixelLeft = 0;

    let resetShuttlePosition = function () {
        shuttle.style.top = "250px";
        shuttlePixelHeight = 250;
        shuttle.style.left = "0px"
        shuttlePixelLeft = 0;
    }

    takeOffButton.addEventListener('click', function() {
        let confirmation = window.confirm("Confirm that theshuttle is ready for takeoff.");
        if (confirmation) {
            flightStatus.textContent = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttlePixelHeight -= 50; 
            shuttle.style.top = shuttlePixelHeight + 'px';
            let height = Number(shuttleHeight.textContent);
            shuttleHeight.textContent = height += 10000;
        }
    });

    landingButton.addEventListener('click', function() {
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.textContent = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.textContent = 0;
        resetShuttlePosition();
    });

    abortButton.addEventListener('click', function() {
       let confirmation = confirm( "Confirm that you want to abort the mission." );
       if (confirmation) {
           flightStatus.textContent = "Flight aborted";
           shuttleBackground.style.backgroundColor = "green";
           shuttleHeight.textContent = 0;
            resetShuttlePosition();
       }
    });

    up.addEventListener('click', function() {
        if (shuttlePixelHeight > 0 && flightStatus.textContent === "Shuttle in flight.") {
            shuttlePixelHeight -= 10;
            shuttle.style.top = shuttlePixelHeight + 'px'
        }
    });

    down.addEventListener('click', function() {
        if (shuttlePixelHeight < 240) {
            shuttlePixelHeight += 10;
            shuttle.style.top = shuttlePixelHeight + 'px'
        } 
    });

    left.addEventListener('click', function() {
        if (shuttlePixelHeight < 240 && shuttlePixelLeft > -360) {
            shuttlePixelLeft -= 10;
            shuttle.style.left = shuttlePixelLeft + 'px'
        } 
    });

    right.addEventListener('click', function() {
        if (shuttlePixelHeight < 240 && shuttlePixelLeft < 360) {
            shuttlePixelLeft += 10;
            shuttle.style.left = shuttlePixelLeft + 'px'
        } 
    });

});