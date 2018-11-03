window.addEventListener("load",function(){
    // page events here
    document.getElementById('submit-button').addEventListener("click",function(e){
        Form.validateForm();
    });

})