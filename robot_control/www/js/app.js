
//ubidots cloud value push




// the button click functions....
function stop()
{
    document.getElementById("print").innerHTML = ">> STOP MOVING <<";
    
    
    //fetch api  ubidots data push
    fetch('http://things.ubidots.com/api/v1.6/devices/teleop?token=YOUR_TOKEN', {    //place your token
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            command: '0'
        })
    })
    
    
}

function right()
{
     document.getElementById("print").innerHTML = "Moving right for 1 second";

    
    //fetch api  ubidots data push
    fetch('http://things.ubidots.com/api/v1.6/devices/teleop?token=YOUR_TOKEN', {   //place your token
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            command: '4'
        })
    })
    
    
}

function left()
{
     document.getElementById("print").innerHTML = "Moving left for 1 second";

    //fetch api  ubidots data push
    fetch('http://things.ubidots.com/api/v1.6/devices/teleop?token=YOUR_TOKEN', {   //place your token
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            command: '3'
        })
    })
    
    
}

function backward()
{
     document.getElementById("print").innerHTML = "Moving backward for 1 second";

    
    //fetch api  ubidots data push
    fetch('http://things.ubidots.com/api/v1.6/devices/teleop?token=YOUR_TOKEN', {    //place your token
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            command: '2'
        })
    })
    
    
}
function forward()
{
     document.getElementById("print").innerHTML = "Moving forward for 1 second";

    
    //fetch api  ubidots data push
    fetch('http://things.ubidots.com/api/v1.6/devices/teleop?token=YOUR_TOKEN', {   //place your token
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            command: '1'
        })
    })
    
}
