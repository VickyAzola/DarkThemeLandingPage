const form = document.getElementById("form")
const inputEmail = document.getElementById("email")
const errorMessage = document.getElementById("errorMessage");

let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   

function validForm(event) {
    let formValidation = document.forms["form"]["email"].value;
    if (formValidation == "" || !form.match(emailFormat)) {
        inputEmail.style.borderColor= "#FF5263"
        errorMessage.style.visibility="visible";
        event.preventDefault()

        form.addEventListener("click", function () {
            errorMessage.style.visibility= "hidden";
            inputEmail.style.borderColor = "#717985"
        });
    } else {
        errorMessage.style.visibility= "hidden";
    }
}