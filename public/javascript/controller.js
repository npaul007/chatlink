// objects here
var Form = {
    msgColor:"#000000",
    generateMsgColor:function(){
        this.msgColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    },
    validateForm: function (){
        var msg = document.forms["form"]["m"].value;
        var inputBox = document.getElementById("inputbox");

        // added this to give text area a chat box effect
        inputBox.value ="";
        inputBox.disabled = true;
        setTimeout(() => {
            inputBox.disabled = false;
            inputBox.focus();
        }, 20);

        if (msg == "") {
            alert("Input must be filled out");
        }
        else{
            this.submitMessage(msg); 
        }
    },
    recieveMessage:function (msgObj){
        /*should recieve from server*/
        document.getElementById("chatbox-container").innerHTML += "<br/><span style='color:#ccc'>[ "+moment(msgObj.date).fromNow()+" ]</span> <span style='color:"+this.msgColor+"'><strong>"+msgObj.msg+"</strong></span>";
    },
    submitMessage:function(msg){
        Http.open('POST','/receiveMessage',true);
        Http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 
        Http.send(JSON.stringify({
            "msg":msg,
            "msgColor":this.msgColor,
            "date":new Date()
        }));

    }
}

var Http = new XMLHttpRequest();

Http.onreadystatechange = function() {
    if (Http.readyState == XMLHttpRequest.DONE) {
        Form.recieveMessage(JSON.parse(Http.responseText));
    }
}
