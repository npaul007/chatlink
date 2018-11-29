// objects here
var socket;

var Form = {
    roomId: null,
    msgColor:"#000000",
    generateMsgColor:function(){
        this.msgColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        document.getElementById("inputbox").style.color = this.msgColor;
        document.getElementById("inputbox").style.border = "2px solid " + this.msgColor;
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
        document.getElementById("chatbox-container").innerHTML += "<br/><span style='color:#ccc'>"+moment(msgObj.date).format('MMMM Do YYYY, h:mm:ss a')+": </span> <span style='color:"+msgObj.msgColor+"'><strong>"+msgObj.msg+"</strong></span>";
    },
    submitMessage:function(msg){
        socket.emit('msgToServer',JSON.stringify({
            "msg":msg,
            "msgColor":this.msgColor,
            "date":new Date()
        }))

    }
}




