function myFunction(){
    var userInput = document.querySelector("#userInput");
    var message = document.querySelector("#message");

    message.innerHTML = "Welcome to Coffee Talks,  " + userInput.value + "!";
}