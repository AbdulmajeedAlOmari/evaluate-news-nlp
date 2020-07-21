// const this that those?
const errorMessageHolder = document.getElementById("error-message-holder");

function showErrorMessage(text) {
  errorMessageHolder.innerText = text;
}

function hideErrorMessage() {
  errorMessageHolder.innerText = "";
}

export {
  showErrorMessage,
  hideErrorMessage
}