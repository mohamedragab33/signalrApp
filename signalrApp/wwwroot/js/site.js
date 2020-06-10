var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

connection.on("RecivedMessage", function (FromUser, message) {

    var msg = FromUser + ":" + message;

    var li = document.createElement("li");
    li.textContent = msg;
    $("#list").prepend(li);


});

connection.start(); 

$("#btnSend").on("click", function (){

    var fromUser = $("#txtUser").val();
    var message = $("#txtMessage").val();
    connection.invoke("SendMessage", fromUser, message);



})

