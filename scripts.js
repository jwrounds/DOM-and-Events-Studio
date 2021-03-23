// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
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

    let posTop = shuttle.style.top;
    let posBottom = shuttle.style.bottom;
    let posLeft = shuttle.style.left;
    let postRight = shuttle.style.right;

    takeOffButton.addEventListener('click', function(){
        let confirmation = window.confirm("Confirm that theshuttle is ready for takeoff.");
        if (confirmation) {
            flightStatus.textContent = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";

            let shuttlePixelHeight = Number(posTop.slice(0, posTop.length - 2)) - 50;
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
    });
});