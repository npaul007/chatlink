// objects here
var Form = {
    validateForm: function (){
        var msg = document.forms["form"]["m"].value;
        document.getElementById("inputbox").value ="";
        if (msg == "") {
            alert("Input must be filled out");
        }else{
            this.submitMessage(msg); 
        }
    },
    recieveMessage:function (msg){
        /*should recieve from server*/
        document.getElementById("chatbox-container").innerHTML +="<br />"+mmsg;
    },
    recieveMessage :function(msg){
        /*should recieve from server*/
        document.getElementById("chatbox-container").innerHTML +="<br />"+msg;
        
    },
    submitMessage:function(msg){
        /*should go to server*/
       this. recieveMessage(msg)
    }
}
