function sendMessage() {
    let input = document.getElementById("messageInput");

    if(input.value.trim() === "") return;

    let msgBox = document.getElementById("messages");

    msgBox.innerHTML += `
      <div class="message me">
        ${input.value}
      </div>
    `;

    input.value = "";
}
