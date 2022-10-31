let FirstName = document.getElementById("FirstName");
let LastName = document.getElementById("LastName");
let EmailAddress = document.getElementById("EmailAddress");
let Password = document.getElementById("Password");

let FirstNameError = document.getElementById("FirstNameError");
let LastNameError = document.getElementById("LastNameError");
let emailAddressError = document.getElementById("emailAddressError");
let PasswordError = document.getElementById("PasswordError");

let buttonSubmit = document.getElementById("submit");

buttonSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  validateEmpty(
    FirstName.value,
    FirstName,
    FirstNameError,
    'First Name'
  );
  validateEmpty(
    LastName.value,
    LastName,
    LastNameError,
    "Last Name"
  );
  validateEmail(
    EmailAddress.value, 
    EmailAddress, 
    emailAddressError
    );
  validateEmpty(
    Password.value,
    Password,
    PasswordError,
    'Password'
  );
});

function validateEmail(valueInput, divInput, divError) {
  let regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  if (regExp.test(valueInput) == true) {
    hiddenError(divInput, divError);
  } else {
    showError(divInput, divError, "Looks like this is not an email");
  }
}

function validateEmpty(valueInput, divInput, divError, nameInput) {
  if (valueInput.length == 0) {
    showError(divInput, divError, `${nameInput} cannot be empty`);
  } else {
    hiddenError(divInput, divError);
  }
}

function showError(divInput, divError, error) {
  divInput.style.border = "1px solid rgb(255, 122, 122)";
  divError.innerHTML = `<img class="iconError" src="./images/icon-error.svg" alt="iconError">
            <p class="textError"> ${error} </p>`;
}

function hiddenError(divInput, divError) {
  divInput.style.border = "1px solid rgb(185, 182, 211)";
  divError.innerHTML = ``;
}
