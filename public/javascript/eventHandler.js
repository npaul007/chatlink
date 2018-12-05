let setSocketListener = (socket,Form) => {
    socket.on(Form.roomId,function(msgObj){
        Form.recieveMessage(JSON.parse(msgObj));
    });
}

window.addEventListener("load",function(){
    // generate random msg color
    Form.generateMsgColor();
    
    // generate room id
    Form.generateRoomId();

    // initialize socket connection
    socket = io.connect();
    socket.on('connect', function(data) {
        console.log('CLient connected to Socket successfully.');
        setSocketListener(socket,Form)
    });

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

    // submit formid
    document.getElementById('submit-roomid').addEventListener('click',function(e){
        var newRoomId = document.getElementById('input-roomid').value;
        if(newRoomId.trim() != ""){
            Form.roomId = newRoomId;
            setSocketListener(socket,Form)
            alert('Your room id has been set to: '+ Form.roomId);
        }
        else{
            alert("room id input is empty!");
        }
    });
});