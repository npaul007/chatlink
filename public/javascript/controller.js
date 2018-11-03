// objects here
var Form = {
    msgColor:"#000000",
    generateMsgColor:function(){
        this.msgColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    },
    validateForm: function (){
        var msg = document.forms["form"]["m"].value;
        document.getElementById("inputbox").value ="";
        
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
        var msgObj = {
            msg:msg,
            msgColor:this.msgColor,
            date:new Date()
        };
        /*should go to server*/
       this. recieveMessage(msgObj)
    }
}
