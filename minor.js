const userMessage = [
    ["hi", "hey", "hello"],
    ["sure", "yes", "no"],
    ["what is the use of it","use","what is the use of you"],
    
    
    
    ["what are you doing", "what is going on", "what is up"],
   
    ["who are you", "are you human", "are you bot", "are you human or bot"],
    ["who created you", "who made you", "who is your creator"],
    ["your name please", "your name", "may i know your name", "what is your name", "what call yourself"],
    
    ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good"],
    
   
    ["ah", "ok", "okay", "nice", "welcome"],
    ["thanks", "thank you"],
    ["PAN","pan","pan card"]
   
   
   
    
  
];

const botReply = [
    ["Hello! how can i help you..", "Hi! how can i help you..", "Hey! how can i help you..", "Hi there! how can i help you.."],
    ["Okay"],
    ["we are providing the public vital services"],
    
    
    
    ["Nothing much", "About to go to sleep", "Can you guess?", "I don't know actually"],
   
    ["I am just a  Rulebased chatbot", "I am just a rulw based chatbot"],
    ["PALLAVI TEAM"],
    ["I am public service bot.."],
   
    ["Have you ever felt bad?", "Glad to hear it"],
    
   
    ["Thank you"],
    ["You're welcome"]
    

    
 
  
  
];

const alternative = [
    "Same here, dude.",
    "That's cool! Go on...",
    "Dude...",
    "Ask something else...",
    "Hey, I'm listening..."
];

function sendMessage() {
    const inputField = document.getElementById("input");//input from textarea
    let input = inputField.value.trim();
    if (input !== "") {
        output(input);
    }
    inputField.value = "";
}

function output(input) {
    let product;
    let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
    text = text
        .replace(/[\W_]/g, " ")
        .replace(/ a /g, " ")
        .replace(/i feel /g, "")
        .replace(/whats/g, "what is")
        .replace(/please /g, "")
        .replace(/ please/g, "")
        .trim();
    let comparedText = compare(userMessage, botReply, text);
    product = comparedText ? comparedText : alternative[Math.floor(Math.random() * alternative.length)];
    addChat(input, product);
}

function compare(triggerArray, replyArray, string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
        for (let y = 0; y < replyArray.length; y++) {
            if (triggerArray[x][y] === string) {
                item = replyArray[x][Math.floor(Math.random() * replyArray[x].length)];
            }
        }
    }
    if (item) {
        return item;
    } else {
        return containMessageCheck(string);
    }
}

function containMessageCheck(string) {
    let expectedReply = [
        ["Good Bye, dude", "Bye, See you!", "Dude, Bye. Take care of your health in this situation."],
        ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
        ["Have a pleasant evening!", "Good evening too", "Evening!"],
        ["Good morning, Have a great day!", "Morning, dude!"],
        ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
    ];
    let expectedMessage = [
        ["bye", "tc", "take care"],
        ["night", "good night"],
        ["evening", "good evening"],
        ["morning", "good morning"],
        ["noon"]
    ];
    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
        if (expectedMessage[x].includes(string)) {
            item = expectedReply[x][Math.floor(Math.random() * expectedReply[x].length)];
        }
    }
    return item;
}

function addChat(input, product) {
    const mainDiv = document.getElementById("message-section");
    let userDiv = document.createElement("div");
    userDiv.classList.add("message", "user-message");
    userDiv.textContent = input;
    mainDiv.appendChild(userDiv);

    let botDiv = document.createElement("div");
    botDiv.classList.add("message", "bot-message");
    botDiv.textContent = product;
    mainDiv.appendChild(botDiv);

    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
}

