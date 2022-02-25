document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input")
    inputField.addEventListener("keydown", function(e) {
        if (e.code === "Enter") {
            let input = inputField.value;
            inputField.value = "";
            output(input);
            console.log(`I typed '${input}'`);
        }
    })
})

function output (input) {
    let text = input.replace(/[^a-z' '!?.,]/gi, "");
    let response;
    if (text == "") {
        response = "Fine. Be that way!";
    } else if (text.match(/[A-Z]/g) && text.match(/[/?*]/g)) {
        response = "Calm down, I know what I'm doing!";
    } else if (text.match(/[?*]/g)) {
        response = "Sure.";
    } else if (text.match(/[A-Z]/g)) {
        response = "Whoa, chill out!";
    } else {
        response = "Whatever.";
    }
    
    addChat(text,response);
    console.log(response);
}

function addChat (text, response) {
    const mainDiv = document.getElementById("main");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.innerHTML = `You: <span id=user-response">${text}</span>`;
    mainDiv.appendChild(userDiv);

    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.innerHTML = `Chatbot: <span id="bot-response">${response}</span>`;
    mainDiv.appendChild(botDiv);
}
