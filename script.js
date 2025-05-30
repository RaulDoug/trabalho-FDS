const btn =  document.querySelector("#btn");
let message = document.querySelector(".show-message");


function showMessage() {
    btn.addEventListener("click", ()=> {
        message.classList.toggle("hidden");
    })
}

showMessage();