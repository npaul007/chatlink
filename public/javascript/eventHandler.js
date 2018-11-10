window.addEventListener("load",function(){
    // generate random msg color
    Form.generateMsgColor();

    // page events here
    document.getElementById('submit-button').addEventListener("click",function(e){
        Form.validateForm();
    });
    
    document.getElementById('inputbox').addEventListener("keydown",function(e){
        // can now hit enter to send messages
        if(e.keyCode === 13){
            Form.validateForm();
        }
    });

})