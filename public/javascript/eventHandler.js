window.addEventListener("load",function(){
    // generate random msg color
    Form.generateMsgColor();

    // page events here
    document.getElementById('submit-button').addEventListener("click",function(e){
        Form.validateForm();
    });

})