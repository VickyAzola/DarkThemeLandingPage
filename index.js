const form = document.getElementById("form")
const inputEmail = document.getElementById("email")
const errorMessage = document.getElementById("errorMessage");

let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   

function validForm(event) {
    let formValidation = document.forms["form"]["email"].value;
    if (formValidation == "" || !form.match(emailFormat)) {
        inputEmail.style.borderColor= "#FF5263"
        errorMessage.textContent = "Please enter a valid email adress";
        event.preventDefault()

        form.addEventListener("click", function () {
            errorMessage.textContent = "";
            inputEmail.style.borderColor = "#717985"
        });
    } else {
        errorMessage.textContent = "";
    }
}