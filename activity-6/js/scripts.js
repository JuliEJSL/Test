// Array to store messages
var messages = [];

//Message Type look up object.
var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown:'unknown-message'
};

// See data
var data = [
    {
        type: messageType.out,
        user: 'Juliana',
        message: 'Hi, do you want to talk?',
    },
    {
        type: messageType.in,
        user: 'Sylvia',
        message:'Yeah! I have some questions about the project'
    },
    {
        type: messageType.out,
        user: 'Juliana',
        message: 'Ok, cool call me',
    },
];

// Message constructor function
function Message(type, user, message){
    this.type = type;
    this.user = user;
    this.message = message;
};
// Function to create and return an element for the supplied messages.
function createMessageElement(message) {
    // Create text element for message
    var messageText = document.createTextNode(message.user + ':' + message.message);

    // Create the element and add the message text

    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    // Add class using the message type.
    messageEl.className = message.type;

    return messageEl;
}

// Button click event handler to add a newmessage
function addMessageHandler(event){
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messagesContainerEl = document.getElementById('message-container');

    // Determine message type and set message variables accordingly
    switch (event.target.id) {
        case 'send-button':
        user = 'Juliana';
        type = messageType.out;
        break;
    
        case 'reply-button':
        user = 'Joe';
        type = messageType.in;
         break;

        default:
            user = 'unknown';
            type = messageType.unknown;
            break;
    }

    // Create new message
    if (messageInput.value != ''){
// Contruct a message and add ot tp the array
    var message = new Message(type, user, messageInput.value);
    messages.push(message);
     
    // Create a message element 
    
    var el = createMessageElement(message);

    // Add the message element to the DOM

    messagesContainerEl.appendChild(el);

    // Reset input
    messageInput.value = '';
    }
}
 
// Load seed data from data array above
 function loadSeeData() {
    for (var i = 0; i < data.length; i++){
        var message = new Message (data[i].type, data[i].message);
        messages.push(message);
    }
    // Load view with pre loaded messages
    var messagesContainerEl = document.getElementById('message-container');

    for (var i = 0; i < messages.length; i++) {
       var message = messages[i];
       var el = createMessageElement(message)

        messagesContainerEl.appendChild(el);
    }
}
   var init = function(){
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    // Load seed data from data array
    loadSeeData();
   }

   init();