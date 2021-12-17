function setFormMessage(formelement, type, message) {
    const messageElement = formelement.querySelector(".form__message");

    messageElement.textcontent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textcontent = message;
}

document.addEventListener('DOMContentLoaded', () => {
    const loginform = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkcreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginform.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });
    document.querySelector("#linklogin").addEventListener("click", e => {
        e.preventDefault();
        loginform.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginform.addEventListener("submit", e => {
        e.preventDefault();

        //performlogin

        setFormMessage(loginform, "error", "Invalid Username/Password Combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e =>{
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 7 Characters in length");
            }
        });
    });
});