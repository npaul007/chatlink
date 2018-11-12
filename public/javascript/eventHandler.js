window.addEventListener("load",function(){
    // initialize socket connection
    socket = io.connect('http://localhost:3000');
    socket.on('connect', function(data) {
        console.log('CLient connected to Socket successfully.');
    });

    socket.on('msgToClient',function(msgObj){
        Form.recieveMessage(JSON.parse(msgObj));
    });

    // generate random msg color
    Form.generateMsgColor();

    // page events here
    document.getElementById('submit-button').addEventListener("click",function(e){
        Form.validateForm();
    });
    
    // can now hit enter to send messages
    document.getElementById('inputbox').addEventListener("keydown",function(e){
        if(e.keyCode === 13){
            Form.validateForm();
        }
    });

})