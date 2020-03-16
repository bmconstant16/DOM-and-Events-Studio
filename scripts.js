// part 1 use window load event to ensure all elements have loaded
window.addEventListener('load', function () {
    // command button elements
    const takeOffButton = document.getElementById('takeoff');
    let landingButton = document.getElementById('landing');
    let abortButton = document.getElementById('missionAbort');
    
    // direction button elements
    let upButton = document.getElementById('up');
    let downButton = document.getElementById('down');
    let rightButton = document.getElementById('right');
    let leftButton = document.getElementById('left');
    
    //rocket elements
    const rocket = document.getElementById('rocket') 
    
    let flightStatus = document.getElementById('flightStatus');
    let flightColor = document.getElementById('shuttleBackground');
    let shuttleHeight = document.getElementById('spaceShuttleHeight');
    
    // part 2 things that happen when the Take off button is clicked
    
    //clicking on the lift off button
    takeOffButton.addEventListener('click', confirmWindow);
    
    function confirmWindow() {
        let response = window.confirm('Is the shuttle ready?');

        if (response) {
            flightStatus.innerHTML = "Shuttle in flight";
            flightColor.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = '10,000';
            rocket.style.bottom = '120px';
        };
    };
    
    //clicking the landing button
    landingButton.addEventListener('click', landingAlert);

    function landingAlert() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        flightColor.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = '0';
        rocket.style.bottom = '0';
        rocket.style.left = '195px'
        rocket.style.position = 'absolute'

    };

    //clicking the abort mission button
    abortButton.addEventListener('click', abortConfirm);

    function abortConfirm() {
        let cancelConfirm = window.confirm("Confirm that you want to abort the mission.");

        if (cancelConfirm) {
            flightStatus.innerHTML = "Mission aborted.";
            flightColor.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = '0';
            rocket.style.bottom = '0';
            rocket.style.left = '195px';
        };
        
    };

    //direction button clicks

    downButton.addEventListener('click', function (){
        console.log('down', rocket.style.bottom);
        rocket.style.bottom = String(parseInt(rocket.style.bottom, 10) - 10) + 'px';

    });

    upButton.addEventListener('click', function () {
        console.log('up', rocket.style.bottom);
        rocket.style.bottom = String(parseInt(rocket.style.bottom, 10) + 10) + 'px';
    });

    rightButton.addEventListener('click', rightFunction);
    function rightFunction() {
        console.log('right', rocket.style.left);
        rocket.style.left = String(parseInt(rocket.style.left, 10) + 10) + 'px';
    };

    leftButton.addEventListener('click', leftFunction);
    function leftFunction() {
        console.log('left', rocket.style.left);
        rocket.style.left = String(parseInt(rocket.style.left, 10) - 10) + 'px';
    };


});





   // Write your JavaScript code here.
   // Remember to pay attention to page loading!